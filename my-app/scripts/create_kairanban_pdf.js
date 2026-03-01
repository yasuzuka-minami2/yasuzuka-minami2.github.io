const { PDFDocument, degrees } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Helper function to get actual page size considering rotation
function getPageSize(page) {
    const rotation = page.getRotation().angle;
    const { width, height } = page.getSize();

    // If rotated 90 or 270 degrees, swap width and height
    if (rotation === 90 || rotation === 270) {
        return { width: height, height: width, rotation };
    }
    return { width, height, rotation };
}

// Check for issue number argument
const issueNumber = process.argv[2];
if (!issueNumber) {
    console.error('Error: Please provide an issue number. Example: node scripts/create_kairanban_pdf.js 4');
    process.exit(1);
}

const kairanbanDir = path.join(__dirname, '..', 'public', 'kairanban', issueNumber);
const outputFile = path.join(kairanbanDir, `kairanban${issueNumber}_all.pdf`);

if (!fs.existsSync(kairanbanDir)) {
    console.error(`Error: Directory not found: ${kairanbanDir}`);
    process.exit(1);
}

async function mergePdfs() {
    try {
        // Get all PDF files in the directory
        const files = fs.readdirSync(kairanbanDir)
            .filter(file => file.toLowerCase().endsWith('.pdf') && file !== `kairanban${issueNumber}_all.pdf` && file !== 'all.pdf')
            .sort((a, b) => {
                // Natural sort (so 1.pdf comes before 10.pdf)
                return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
            });

        console.log(`Found ${files.length} PDF files.`);

        const mergedPdf = await PDFDocument.create();
        let addedCount = 0;

        // 1. First pass: Find the minimum page area to determine target size
        let minArea = Infinity;
        let targetShort = 0;
        let targetLong = 0;
        const validDocs = [];

        for (const filename of files) {
            if (filename.includes('非公開') || filename.includes('private')) {
                console.log(`Skipping private file: ${filename}`);
                continue;
            }

            const filePath = path.join(kairanbanDir, filename);
            const pdfBytes = fs.readFileSync(filePath);
            const pdf = await PDFDocument.load(pdfBytes);
            validDocs.push({ filename, pdf });

            const pages = pdf.getPages();
            for (const page of pages) {
                const { width, height } = getPageSize(page);
                const area = width * height;
                if (area < minArea) {
                    minArea = area;
                    targetShort = Math.min(width, height);
                    targetLong = Math.max(width, height);
                }
            }
        }

        if (validDocs.length === 0) {
            console.warn('No public PDF files found.');
            return;
        }

        console.log(`Target minimum size: Short edge=${targetShort.toFixed(2)}, Long edge=${targetLong.toFixed(2)}`);

        // 2. Second pass: Resize all pages and add to the merged PDF
        for (const { filename, pdf } of validDocs) {
            console.log(`Adding and resizing ${filename}...`);
            const pages = pdf.getPages();

            for (let i = 0; i < pages.length; i++) {
                const page = pages[i];
                const currentSize = getPageSize(page);
                const isLandscape = currentSize.width > currentSize.height;

                // Determine target dimensions for this specific page based on its orientation
                let targetW, targetH;
                if (isLandscape) {
                    targetW = targetLong;
                    targetH = targetShort;
                } else {
                    targetW = targetShort;
                    targetH = targetLong;
                }

                // Calculate scale factors
                const scaleX = targetW / currentSize.width;
                const scaleY = targetH / currentSize.height;

                // Apply transformation depending on rotation
                if (currentSize.rotation === 90 || currentSize.rotation === 270) {
                    // For 90/270 rotated pages, pdf-lib's underlying coordinate system is swapped.
                    // Visual X (width) scales visual Y's underlying axis, and vice versa.
                    page.scale(scaleY, scaleX);
                    // Adjust MediaBox to match new scaled dimensions (in unrotated coordinate space)
                    page.setSize(targetH, targetW);
                } else {
                    page.scale(scaleX, scaleY);
                    page.setSize(targetW, targetH);
                }
            }

            // Copy the resized pages to the merged document
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
            addedCount++;
        }

        const mergedPdfBytes = await mergedPdf.save();
        fs.writeFileSync(outputFile, mergedPdfBytes);
        console.log(`Successfully created ${outputFile} (Merged and resized ${addedCount} files)`);
    } catch (error) {
        console.error('Error merging PDFs:', error);
    }
}

mergePdfs();

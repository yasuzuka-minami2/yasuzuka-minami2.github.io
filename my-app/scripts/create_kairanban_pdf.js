const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Check for issue number argument
const issueNumber = process.argv[2];
if (!issueNumber) {
    console.error('Error: Please provide an issue number. Example: node scripts/create_kairanban_pdf.js 4');
    process.exit(1);
}

const kairanbanDir = path.join(__dirname, '..', 'public', 'kairanban', issueNumber);
const outputFile = path.join(kairanbanDir, 'all.pdf');

if (!fs.existsSync(kairanbanDir)) {
    console.error(`Error: Directory not found: ${kairanbanDir}`);
    process.exit(1);
}

async function mergePdfs() {
    try {
        // Get all PDF files in the directory
        const files = fs.readdirSync(kairanbanDir)
            .filter(file => file.toLowerCase().endsWith('.pdf') && file !== 'all.pdf')
            .sort((a, b) => {
                // Natural sort (so 1.pdf comes before 10.pdf)
                return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
            });

        console.log(`Found ${files.length} PDF files.`);

        const mergedPdf = await PDFDocument.create();
        let addedCount = 0;

        for (const filename of files) {
            if (filename.includes('非公開') || filename.includes('private')) {
                console.log(`Skipping private file: ${filename}`);
                continue;
            }

            console.log(`Adding ${filename}...`);
            const filePath = path.join(kairanbanDir, filename);
            const pdfBytes = fs.readFileSync(filePath);
            const pdf = await PDFDocument.load(pdfBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
            addedCount++;
        }

        if (addedCount === 0) {
            console.warn('No public PDF files merged.');
            return;
        }

        const mergedPdfBytes = await mergedPdf.save();
        fs.writeFileSync(outputFile, mergedPdfBytes);
        console.log(`Successfully created ${outputFile} (Merged ${addedCount} files)`);
    } catch (error) {
        console.error('Error merging PDFs:', error);
    }
}

mergePdfs();

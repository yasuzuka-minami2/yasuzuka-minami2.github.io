const pdfHook = require('pdf-img-convert');
const fs = require('fs');
const path = require('path');

// Correct path relative to where script is run (my-app root)
const pdfPath = path.join('public', 'kairanban', '2', '5.Wanted!!探しています！組規約.pdf');
const outputDir = path.join('public', 'images');
const outputPath = path.join(outputDir, 'wanted_rules.png');

console.log(`Converting ${pdfPath} to ${outputPath}...`);

(async function () {
    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Convert page 1
        const pdfArray = await pdfHook.convert(pdfPath, {
            width: 1200,
            page_numbers: [1]
        });

        if (pdfArray.length > 0) {
            fs.writeFileSync(outputPath, pdfArray[0]);
            console.log('Successfully created wanted_rules.png');
        } else {
            console.error('No images generated from PDF');
        }
    } catch (error) {
        console.error('Error converting PDF:', error);
    }
})();

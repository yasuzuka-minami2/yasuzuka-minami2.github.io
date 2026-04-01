const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

async function checkPdf() {
  const filePath = path.join(__dirname, 'app/koho/ドラフト/5.鈴鹿市内公共交通時刻表2026年度版.pdf');
  const pdfBytes = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  
  const pages = pdfDoc.getPages();
  console.log(`Total Pages: ${pages.length}`);
  
  for(let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const { width, height } = page.getSize();
    console.log(`Page ${i + 1}: Width = ${width}, Height = ${height}`);
  }
}

checkPdf().catch(console.error);

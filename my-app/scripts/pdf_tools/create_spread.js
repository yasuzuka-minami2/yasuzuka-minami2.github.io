const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

async function createSpread() {
  const baseDir = path.join(__dirname, 'app/koho/ドラフト');
  const inputPath = path.join(baseDir, '5.鈴鹿市内公共交通時刻表2026年度版_split並び替え.pdf');
  const outputPath = path.join(baseDir, '5.鈴鹿市内公共交通時刻表2026年度版_完成版.pdf');

  console.log(`Loading ${inputPath}...`);
  const pdfBytes = fs.readFileSync(inputPath);
  // ignoreEncryption で読み込む
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const newPdfDoc = await PDFDocument.create();

  const pageCount = pdfDoc.getPageCount();

  // 1. 最初のページはそのままコピー
  if (pageCount > 0) {
    const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
    newPdfDoc.addPage(firstPage);
  }

  // 2. 中間のページを見開き(spread)として合成
  for (let i = 1; i < pageCount - 1; i += 2) {
    if (i + 1 < pageCount - 1 || (i + 1 === pageCount - 1 && pageCount % 2 !== 0)) {
      // embedPages により、元ページの Rotation や CropBox の表示結果をそのまま保持したオブジェクトを作る
      const [emb1, emb2] = await newPdfDoc.embedPages([pdfDoc.getPage(i), pdfDoc.getPage(i + 1)]);
      
      const p1Dims = emb1.scale(1.0);
      const p2Dims = emb2.scale(1.0);

      const width = p1Dims.width + p2Dims.width;
      const height = Math.max(p1Dims.height, p2Dims.height);

      const newPage = newPdfDoc.addPage([width, height]);
      
      // pdf-lib の座標系は左下が原点 (0,0)。
      // 縦方向に中央揃えにするか、上揃えにするか。ここでは下揃え（y:0）で配置。
      newPage.drawPage(emb1, {
        x: 0,
        y: height - p1Dims.height, // 上揃え
      });
      newPage.drawPage(emb2, {
        x: p1Dims.width,
        y: height - p2Dims.height, // 上揃え
      });
    } else {
      const [remainingPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
      newPdfDoc.addPage(remainingPage);
    }
  }

  // 3. 最後のページはそのままコピー
  if (pageCount > 1) {
    const [lastPage] = await newPdfDoc.copyPages(pdfDoc, [pageCount - 1]);
    newPdfDoc.addPage(lastPage);
  }

  console.log(`Saving to ${outputPath}...`);
  const pdfBytesOut = await newPdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytesOut);
  console.log('Done.');
}

createSpread().catch(console.error);

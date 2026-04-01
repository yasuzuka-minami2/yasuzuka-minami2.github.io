const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

async function fixSpread() {
  const baseDir = path.join(__dirname, 'app/koho/ドラフト');
  const inputPath = path.join(baseDir, '5.鈴鹿市内公共交通時刻表2026年度版_split並び替え.pdf');
  const outputPath = path.join(baseDir, '5.鈴鹿市内公共交通時刻表2026年度版_完成版.pdf');

  console.log(`Loading ${inputPath}...`);
  const pdfBytes = fs.readFileSync(inputPath);
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const newPdfDoc = await PDFDocument.create();

  const pageCount = pdfDoc.getPageCount();

  if (pageCount > 0) {
    const [firstPage] = await newPdfDoc.copyPages(pdfDoc, [0]);
    newPdfDoc.addPage(firstPage);
  }

  // 1番目から最後から2番目までを2つずつ見開きに
  for (let i = 1; i < pageCount - 1; i += 2) {
    if (i + 1 < pageCount - 1 || (i + 1 === pageCount - 1 && pageCount % 2 !== 0)) {
      const [emb1, emb2] = await newPdfDoc.embedPages([pdfDoc.getPage(i), pdfDoc.getPage(i + 1)]);
      
      const p1Dims = emb1.scale(1.0);
      const p2Dims = emb2.scale(1.0);

      const width = p1Dims.width + p2Dims.width;
      const height = Math.max(p1Dims.height, p2Dims.height);

      const newPage = newPdfDoc.addPage([width, height]);
      
      // pdf-libは左下原点(0,0)。余計なY軸計算をせず左下に詰めて描画。
      // 元ページが回転・クロップされていても、embedPageが見た目状態(BoundingBox)のサイズを返すため、
      // ユーザーのAcrobat上の見た目のまま、回転させずにそのまま左右に貼り付く。
      newPage.drawPage(emb1, {
        x: 0,
        y: 0,
      });
      newPage.drawPage(emb2, {
        x: p1Dims.width,
        y: 0,
      });
    } else {
      const [remainingPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
      newPdfDoc.addPage(remainingPage);
    }
  }

  // 最後のページ
  if (pageCount > 1) {
    const [lastPage] = await newPdfDoc.copyPages(pdfDoc, [pageCount - 1]);
    newPdfDoc.addPage(lastPage);
  }

  console.log(`Saving to ${outputPath}...`);
  const pdfBytesOut = await newPdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytesOut);
  console.log('Done.');
}

fixSpread().catch(console.error);

import fitz

def create_image_spread(input_path, output_path):
    doc_in = fitz.open(input_path)
    doc_out = fitz.open()

    n = len(doc_in)
    
    # ページを表示サイズ（ユーザーが見ている画面そのまま・回転やクロップ適用済み）で高画質画像として取得する
    def get_page_pixmap(idx):
        p = doc_in[idx]
        # 3倍スケールでレンダリング（約216dpi相当、高画質なスキャン画像と同等）
        return p.get_pixmap(matrix=fitz.Matrix(3, 3))
    
    # 1. 最初のページはそのまま
    if n > 0:
        pix = get_page_pixmap(0)
        p = doc_out.new_page(-1, width=pix.width, height=pix.height)
        p.insert_image(p.rect, pixmap=pix)

    # 2. 中間を見開きに
    for i in range(1, n - 1, 2):
        if i + 1 < n - 1 or (i + 1 == n - 1 and n % 2 != 0):
            pix1 = get_page_pixmap(i)
            pix2 = get_page_pixmap(i + 1)
            
            w = pix1.width + pix2.width
            h = max(pix1.height, pix2.height)
            
            p = doc_out.new_page(-1, width=w, height=h)
            
            r1 = fitz.Rect(0, 0, pix1.width, pix1.height)
            p.insert_image(r1, pixmap=pix1)
            
            r2 = fitz.Rect(pix1.width, 0, w, pix2.height)
            p.insert_image(r2, pixmap=pix2)
        else:
            pix = get_page_pixmap(i)
            p = doc_out.new_page(-1, width=pix.width, height=pix.height)
            p.insert_image(p.rect, pixmap=pix)

    # 3. 最後のページはそのまま
    if n > 1:
        pix = get_page_pixmap(n - 1)
        p = doc_out.new_page(-1, width=pix.width, height=pix.height)
        p.insert_image(p.rect, pixmap=pix)
        
    doc_out.save(output_path)
    doc_out.close()
    doc_in.close()

if __name__ == "__main__":
    import os
    base_dir = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト"
    input_file = os.path.join(base_dir, "5.鈴鹿市内公共交通時刻表2026年度版_split並び替え.pdf")
    output_file = os.path.join(base_dir, "5.鈴鹿市内公共交通時刻表2026年度版_完成版.pdf")
    
    print(f"Creating exact visual spread from {input_file} ...")
    create_image_spread(input_file, output_file)
    print(f"Saved to {output_file}")

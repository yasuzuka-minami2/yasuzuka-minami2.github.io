import fitz

def split_pdf_in_half(input_path, output_path):
    doc = fitz.open(input_path)
    out_doc = fitz.open()

    for i in range(len(doc)):
        page = doc[i]
        mbox = page.mediabox
        rot = page.rotation
        
        # 横幅と高さを比較
        if mbox.width > mbox.height:
            # 元データが横長のときはX軸(横方向)で分割
            mid_x = (mbox.x0 + mbox.x1) / 2
            r_left = fitz.Rect(mbox.x0, mbox.y0, mid_x, mbox.y1)
            r_right = fitz.Rect(mid_x, mbox.y0, mbox.x1, mbox.y1)
        else:
            # 元データが縦長のときはY軸(縦方向)で分割
            mid_y = (mbox.y0 + mbox.y1) / 2
            r_top = fitz.Rect(mbox.x0, mbox.y0, mbox.x1, mid_y)
            r_bottom = fitz.Rect(mbox.x0, mid_y, mbox.x1, mbox.y1)
            
            # 回転角に応じて、どちらが「見た目上の左」になるかを判定
            if rot == 90:
                # 90度回転（右倒し）の場合、元の「下」が「左」になる
                r_left = r_bottom
                r_right = r_top
            elif rot == 270 or rot == -90:
                # 270度回転（左倒し）の場合、元の「上」が「左」になる
                r_left = r_top
                r_right = r_bottom
            else:
                # それ以外はとりあえず上を左とする
                r_left = r_top
                r_right = r_bottom

        # 新しいPDFにページを挿入し、左半分をクロップ
        out_doc.insert_pdf(doc, from_page=i, to_page=i)
        p1 = out_doc[-1]
        p1.set_cropbox(r_left)

        # 新しいPDFにページを挿入し、右半分をクロップ
        out_doc.insert_pdf(doc, from_page=i, to_page=i)
        p2 = out_doc[-1]
        p2.set_cropbox(r_right)

    out_doc.save(output_path)
    out_doc.close()
    doc.close()

if __name__ == "__main__":
    input_file = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版.pdf"
    output_file = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版_split.pdf"
    print(f"Splitting {input_file} ...")
    split_pdf_in_half(input_file, output_file)
    print(f"Saved to {output_file}")

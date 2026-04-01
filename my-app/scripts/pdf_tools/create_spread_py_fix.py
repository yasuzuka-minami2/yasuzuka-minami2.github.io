import fitz

def create_spread_pdf(input_path, output_path):
    doc_in = fitz.open(input_path)
    doc_out = fitz.open()

    n = len(doc_in)

    # 1. 最初のページはそのまま
    if n > 0:
        p0 = doc_in[0]
        if p0.rect.width > p0.rect.height:
            p0.set_rotation(90)
        doc_out.insert_pdf(doc_in, from_page=0, to_page=0)
    
    # 2. 中間のページを見開き(spread)にする
    for i in range(1, n - 1, 2):
        if i + 1 < n - 1 or (i + 1 == n - 1 and n % 2 != 0):
            p1 = doc_in[i]
            p2 = doc_in[i + 1]
            
            # 幅が高さより大きい＝横長(寝ている)場合は回転させて縦長に直す
            if p1.rect.width > p1.rect.height:
                p1.set_rotation(p1.rotation + 90)
            if p2.rect.width > p2.rect.height:
                p2.set_rotation(p2.rotation + 90)
            
            rect1 = p1.rect
            rect2 = p2.rect
            
            w = rect1.width + rect2.width
            h = max(rect1.height, rect2.height)
            
            new_page = doc_out.new_page(-1, width=w, height=h)
            
            r1 = fitz.Rect(0, 0, rect1.width, rect1.height)
            r2 = fitz.Rect(rect1.width, 0, w, rect2.height)
            
            # clipとrotationを指定しないで素直に配置
            new_page.show_pdf_page(r1, doc_in, i)
            new_page.show_pdf_page(r2, doc_in, i + 1)
        else:
            p = doc_in[i]
            if p.rect.width > p.rect.height:
                p.set_rotation(p.rotation + 90)
            doc_out.insert_pdf(doc_in, from_page=i, to_page=i)

    # 3. 最後のページはそのまま
    if n > 1:
        plast = doc_in[n - 1]
        if plast.rect.width > plast.rect.height:
            plast.set_rotation(plast.rotation + 90)
        doc_out.insert_pdf(doc_in, from_page=n - 1, to_page=n - 1)
        
    doc_out.save(output_path)
    doc_out.close()
    doc_in.close()

if __name__ == "__main__":
    import os
    base_dir = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト"
    input_file = os.path.join(base_dir, "5.鈴鹿市内公共交通時刻表2026年度版_split並び替え.pdf")
    output_file = os.path.join(base_dir, "5.鈴鹿市内公共交通時刻表2026年度版_完成版.pdf")
    
    print(f"Creating spread from {input_file} ...")
    create_spread_pdf(input_file, output_file)
    print(f"Saved to {output_file}")

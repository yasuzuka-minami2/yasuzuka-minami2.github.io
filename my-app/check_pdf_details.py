import fitz

def check_details():
    input_file = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版_split並び替え.pdf"
    doc = fitz.open(input_file)
    print(f"Total Pages: {len(doc)}")
    
    anomalies = []
    
    for i in range(len(doc)):
        p = doc[i]
        rot = p.rotation
        w = p.rect.width
        h = p.rect.height
        mw = p.mediabox.width
        mh = p.mediabox.height
        cw = p.cropbox.width
        ch = p.cropbox.height
        
        # もし回転があるか、幅が高さより大きい（横長）ページがあればリストアップ
        if rot != 0 or w > h:
            anomalies.append(f"Page {i+1}: rect=({w:.1f}x{h:.1f}), bbox=({mw:.1f}x{mh:.1f}), crop=({cw:.1f}x{ch:.1f}), rotation={rot}")
            
    if not anomalies:
        print("All pages are Portrait (width <= height) and rotation is 0.")
    else:
        print("Found pages with rotation != 0 or Landscape orientation:")
        for a in anomalies:
            print(a)
    
    doc.close()

if __name__ == "__main__":
    check_details()

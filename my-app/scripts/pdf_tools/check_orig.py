import fitz

def check_orig():
    input_file = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版.pdf"
    doc = fitz.open(input_file)
    
    for i in range(len(doc)):
        p = doc[i]
        rot = p.rotation
        w = p.rect.width
        h = p.rect.height
        
        flag = "NORMAL (Landscape)" if w > h else f"VERTICAL (w: {w}, h: {h}, rot: {rot})"
        if "VERTICAL" in flag or rot != 0:
            print(f"Scan P{i+1}: {flag}")
            
    doc.close()

if __name__ == "__main__":
    check_orig()

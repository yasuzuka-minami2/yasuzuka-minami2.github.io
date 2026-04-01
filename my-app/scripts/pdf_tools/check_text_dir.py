import fitz
import sys

def check_text_dir():
    input_file = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版.pdf"
    doc = fitz.open(input_file)
    
    # 調べるページ: 13, 14, 15, 16, 17 (Scan 14 ~ 18)
    for i in [13, 14, 15, 16, 17]:
        p = doc[i]
        blocks = p.get_text("dict").get("blocks", [])
        text_blocks = [b for b in blocks if b["type"] == 0] # text blocks
        if not text_blocks:
            print(f"Scan P{i+1}: No text. Maybe image only.")
            continue
            
        print(f"Scan P{i+1}: Text blocks found. Analyzing direction...")
        # 調べるのはブロックの方向 bbox と線の情報
        # 最初の数ブロックの dir (cos, sin) を見る
        dirs = []
        for b in text_blocks[:5]:
            for l in b.get("lines", []):
                dirs.append(l["dir"])
                
        print(f"  Lines dir (first few): {dirs}")

if __name__ == "__main__":
    check_text_dir()

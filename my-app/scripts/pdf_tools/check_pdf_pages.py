import fitz
import json

def main():
    path = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版.pdf"
    doc = fitz.open(path)
    
    results = []
    
    for i in range(len(doc)):
        page = doc[i]
        rect = page.rect
        width = rect.width
        height = rect.height
        
        words = page.get_text("words")
        bottom_words = [w for w in words if w[1] > height * 0.8 or w[3] > height * 0.8]
        
        left_words = [w[4] for w in bottom_words if w[0] < width / 2]
        right_words = [w[4] for w in bottom_words if w[0] >= width / 2]
        
        results.append({
            "page": i + 1,
            "left": left_words[-5:] if left_words else [],
            "right": right_words[-5:] if right_words else []
        })

    with open("pdf_pages_info.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()

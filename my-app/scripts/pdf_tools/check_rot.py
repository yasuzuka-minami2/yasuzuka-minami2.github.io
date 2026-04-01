import fitz

def check_pages(input_path):
    doc = fitz.open(input_path)
    for i in range(len(doc)):
        p = doc[i]
        print(f"Page {i}: rect={p.rect}, rot={p.rotation}")
    doc.close()

if __name__ == "__main__":
    input_file = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト\5.鈴鹿市内公共交通時刻表2026年度版_split並び替え.pdf"
    check_pages(input_file)

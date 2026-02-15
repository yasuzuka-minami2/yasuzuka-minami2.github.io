
import os
from pypdf import PdfWriter

base_dir = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\public\kairanban\2"
output_file = os.path.join(base_dir, "all.pdf")

files = [
    "1.安塚自治会より ご挨拶.pdf",
    "2.令和8年 安塚町役員リスト.pdf",
    "3.令和8年 南2組初集会の報告.pdf",
    "4.自治会への要望事項MAP.pdf",
    "5.Wanted!!探しています！組規約.pdf",
    "6.講演会 How to 自治会チラシ.pdf",
    "7.飯野地区地域づくり協議会 環境部だより_2026.1.20_No.2.pdf",
    "8.【配布】令和8年 安塚町 行事計画・町会計予算.pdf",
]

merger = PdfWriter()

print("Merging PDFs...")
for filename in files:
    path = os.path.join(base_dir, filename)
    if os.path.exists(path):
        print(f"Adding {filename}")
        merger.append(path)
    else:
        print(f"Error: File not found: {filename}")
        exit(1)

print(f"Writing to {output_file}")
merger.write(output_file)
merger.close()
print("Done.")

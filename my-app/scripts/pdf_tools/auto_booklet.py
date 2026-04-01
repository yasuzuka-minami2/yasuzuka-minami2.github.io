import fitz
import sys

def auto_booklet():
    base_dir = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\app\koho\ドラフト"
    input_file = base_dir + r"\5.鈴鹿市内公共交通時刻表2026年度版.pdf"
    output_file = base_dir + r"\5.鈴鹿市内公共交通時刻表2026年度版_完成版.pdf"
    
    doc_in = fitz.open(input_file)
    doc_out = fitz.open()
    
    total_scans = len(doc_in)
    # k番目のスキャンページ (k=1..24) についてのルール
    # k が奇数なら: R = k, L = 49 - k
    # k が偶数なら: L = k, R = 49 - k
    
    page_sources = {}
    for k in range(1, total_scans + 1):
        scan_idx = k - 1
        if k % 2 != 0:
            page_sources[k] = (scan_idx, 'R')
            page_sources[49 - k] = (scan_idx, 'L')
        else:
            page_sources[k] = (scan_idx, 'L')
            page_sources[49 - k] = (scan_idx, 'R')
            
    def get_source_clip(lp):
        """指定された論理ページ(lp)の(元のページオブジェクト, 描画用の幅, 描画用の高さ, clip用矩形)を返す"""
        scan_idx, side = page_sources[lp]
        p = doc_in[scan_idx]
        
        rect = p.rect # 見た目上の矩形
        rot = p.rotation
        
        # 見た目上での左半分・右半分の矩形を求める
        if rect.width > rect.height:
            w2 = (rect.x0 + rect.x1) / 2
            r_left = fitz.Rect(rect.x0, rect.y0, w2, rect.y1)
            r_right = fitz.Rect(w2, rect.y0, rect.x1, rect.y1)
        else:
            h2 = (rect.y0 + rect.y1) / 2
            r_top = fitz.Rect(rect.x0, rect.y0, rect.x1, h2)
            r_bottom = fitz.Rect(rect.x0, h2, rect.x1, rect.y1)
            
            if rot == 90:
                r_left = r_bottom
                r_right = r_top
            elif rot in (270, -90):
                r_left = r_top
                r_right = r_bottom
            else:
                r_left = r_top
                r_right = r_bottom
                
        view_rect = r_left if side == 'L' else r_right
        
        # draw_rect は描画先での大きさを決めるため、見た目上の幅と高さが必要
        draw_w = view_rect.width
        draw_h = view_rect.height
        
        # clipは元の内部座標系（非回転状態）で指定する必要がある
        inv = ~p.rotation_matrix
        orig_clip = view_rect * inv
        
        return scan_idx, draw_w, draw_h, orig_clip

    # 1. P1 (単体)
    scan_idx, dw, dh, clip = get_source_clip(1)
    page_out = doc_out.new_page(-1, width=dw, height=dh)
    page_out.show_pdf_page(fitz.Rect(0, 0, dw, dh), doc_in, scan_idx, clip=clip)
    
    # 2. 中間 (P2&P3, P4&P5 ... P46&P47)
    for i in range(2, 48, 2):
        lp_left = i
        lp_right = i + 1
        
        s_left, wl, hl, clip_l = get_source_clip(lp_left)
        s_right, wr, hr, clip_r = get_source_clip(lp_right)
        
        total_w = wl + wr
        max_h = max(hl, hr)
        
        page_out = doc_out.new_page(-1, width=total_w, height=max_h)
        
        # 左側の描画
        page_out.show_pdf_page(fitz.Rect(0, 0, wl, hl), doc_in, s_left, clip=clip_l)
        # 右側の描画
        page_out.show_pdf_page(fitz.Rect(wl, 0, total_w, hr), doc_in, s_right, clip=clip_r)

    # 3. P48 (単体)
    scan_idx_last, dw_last, dh_last, clip_last = get_source_clip(48)
    page_out_last = doc_out.new_page(-1, width=dw_last, height=dh_last)
    page_out_last.show_pdf_page(fitz.Rect(0, 0, dw_last, dh_last), doc_in, scan_idx_last, clip=clip_last)
    
    doc_out.save(output_file)
    doc_out.close()
    doc_in.close()

if __name__ == "__main__":
    auto_booklet()
    print("Done.")

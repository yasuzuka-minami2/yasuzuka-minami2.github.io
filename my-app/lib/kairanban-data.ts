// 回覧板データの共有定義

export interface KairanbanItem {
    title: string
    pdfUrl: string
    description: string
    isPrivate: boolean
}

export interface KairanbanIssue {
    issueNumber: string
    date: string
    items: KairanbanItem[]
    formUrl: string
}

export const kairanbanData: Record<string, KairanbanIssue> = {
    "1": {
        issueNumber: "第一号",
        date: "2026年1月11日",
        items: [
            {
                title: "1. 令和8年度 初集会開催のお知らせ",
                pdfUrl: "/kairanban/1/1.令和8年度初集会開催のお知らせ.pdf",
                description: "初集会のお知らせ：1/17（土）19時より開催。町費徴収や役員決め等。",
                isPrivate: false,
            },
            {
                title: "2. 令和8年 安塚町 行事計画（案）",
                pdfUrl: "/kairanban/1/2.令和8 安塚町 行事計画（案）.pdf",
                description: "行事計画（案）：令和8年度の安塚町行事予定案（祭礼・清掃等）。",
                isPrivate: false,
            },
            {
                title: "3. 名簿・緊急連絡網 訂正届",
                pdfUrl: "/kairanban/1/3.名簿・緊急連絡網 訂正届.pdf",
                description: "訂正届：名簿・緊急連絡網の訂正がある場合の提出用紙。",
                isPrivate: false,
            },
            {
                title: "4. 新田南2組 住宅地図",
                pdfUrl: "",
                description: "住宅地図：個人情報のため非公開（組長へお問い合わせください）。",
                isPrivate: true,
            },
            {
                title: "5. 飯野公民館だより 2026.1.5 No.378",
                pdfUrl: "/kairanban/1/5.飯野公民館だより_2026.1.5_No.378.pdf",
                description: "飯野公民館だより：新年のご挨拶とサークル募集、公民館祭の案内。",
                isPrivate: false,
            },
            {
                title: "6. 飯野民児協だより 2026.1.5 No.47",
                pdfUrl: "/kairanban/1/6.飯野民児協だより_2026.1.5_No.47.pdf",
                description: "飯野民児協だより：新体制紹介と消費者トラブル対策等の情報。",
                isPrivate: false,
            },
            {
                title: "7.【配布】新田南2組 名簿",
                pdfUrl: "",
                description: "名簿：個人情報のため非公開（組長へお問い合わせください）。",
                isPrivate: true,
            },
            {
                title: "8.【配布】新田南2組 緊急連絡網",
                pdfUrl: "",
                description: "緊急連絡網：個人情報のため非公開（組長へお問い合わせください）。",
                isPrivate: true,
            },
        ],
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe3lDuZ4CT8Qnh7lavkuuvMNdFFWW5mluuDR4xofWJX-Vun-w/viewform?usp=dialog",
    },
    "2": {
        issueNumber: "第二号",
        date: "2026年1月25日",
        items: [
            {
                title: "1. 安塚自治会より ご挨拶",
                pdfUrl: "/kairanban/2/1.安塚自治会より ご挨拶.pdf",
                description: "安塚自治会ご挨拶：役員挨拶と御鍬祭（2/11）のご案内。",
                isPrivate: false,
            },
            {
                title: "2. 令和8年 安塚町役員リスト",
                pdfUrl: "/kairanban/2/2.令和8年 安塚町役員リスト.pdf",
                description: "役員リスト：令和8年度の自治会役員および行事担当一覧。",
                isPrivate: false,
            },
            {
                title: "3. 令和8年 南2組初集会の報告",
                pdfUrl: "/kairanban/2/3.令和8年 南2組初集会の報告.pdf",
                description: "初集会報告：1/17開催。要望事項（安全対策等）と相談事項の記録。",
                isPrivate: false,
            },
            {
                title: "4. 自治会への要望事項MAP",
                pdfUrl: "/kairanban/2/4.自治会への要望事項MAP.pdf",
                description: "要望事項MAP：自治会への要望箇所（危険箇所等）を地図で図示。",
                isPrivate: false,
            },
            {
                title: "5. Wanted!! 探しています！組規約",
                pdfUrl: "/kairanban/2/5.Wanted!!探しています！組規約.pdf",
                description: "組規約探索：組の規約を探しています。心当たりの方はご連絡を。",
                isPrivate: false,
            },
            {
                title: "6. 講演会「How to 自治会」チラシ",
                pdfUrl: "/kairanban/2/6.講演会 How to 自治会チラシ.pdf",
                description: "How to 自治会：自治会の課題解決に関する講演会の案内（入場無料）。",
                isPrivate: false,
            },
            {
                title: "7. 飯野地区地域づくり協議会 環境部だより 2026.1.20 No.2",
                pdfUrl: "/kairanban/2/7.飯野地区地域づくり協議会 環境部だより_2026.1.20_No.2.pdf",
                description: "環境部だより：啓発クリアファイル作成とごみ処理施設視察報告。",
                isPrivate: false,
            },
            {
                title: "8.（配布）令和8年 安塚町 行事計画・町会計予算",
                pdfUrl: "/kairanban/2/8.（配布）令和8年 安塚町 行事計画・町会計予算.pdf",
                description: "行事計画・予算：令和8年度の行事予定と会計予算の配布資料。",
                isPrivate: false,
            },
            {
                title: "9.（配布）新田南2組 宮当番割当表",
                pdfUrl: "/kairanban/2/9.（配布）新田南2組 宮当番割当表.pdf",
                description: "宮当番割当表：令和8年度の神社行事当番スケジュールの配布資料。",
                isPrivate: false,
            },
        ],
        formUrl: "https://forms.gle/wr5K3m47Ccp2G2Y17",
    },
    "3": {
        issueNumber: "第三号",
        date: "2026年2月8日",
        items: [
            {
                title: "1. 新田南2組 組からのお知らせ",
                pdfUrl: "/kairanban/3/1.新田南2組 組からのお知らせ.pdf",
                description: "組からのお知らせ：決議事項（宮当番・組長選出・PC導入等）の報告。",
                isPrivate: false,
            },
            {
                title: "2. 安塚自治会回覧No.2 お知らせ",
                pdfUrl: "/kairanban/3/2.安塚自治会回覧No.2 お知らせ.pdf",
                description: "自治会回覧：厄年の方々より鈴緒・本坪鈴が奉納されました。",
                isPrivate: false,
            },
            {
                title: "3. 飯野公民館だより 2026.2.5 No.379",
                pdfUrl: "/kairanban/3/3.飯野公民館だより_2026.2.5_No.379.pdf",
                description: "飯野公民館だより：3/1春の公民館祭（舞台発表・記念品）のご案内。",
                isPrivate: false,
            },
            {
                title: "4. 65歳以上の皆さんへ 結核レントゲン検診のお知らせ",
                pdfUrl: "/kairanban/3/4.65歳以上の皆さんへ 結核レントゲン検診のお知らせ.pdf",
                description: "結核レントゲン検診：3/11保健センターにて65歳以上対象（無料）。",
                isPrivate: false,
            },
            {
                title: "5. チラシ：犯罪被害を考える県民の集い",
                pdfUrl: "/kairanban/3/5.チラシ 犯罪被害を考える県民の集い.pdf",
                description: "犯罪被害を考える集い：3/8文化会館にて講演とトークショー（要申込）。",
                isPrivate: false,
            },
            {
                title: "6. チラシ：第5回すずかロゲイニング",
                pdfUrl: "/kairanban/3/6.チラシ 第5回すずかロゲイニング.pdf",
                description: "すずかロゲイニング：チェックポイントを回るスポーツイベントの案内。",
                isPrivate: false,
            },
            {
                title: "7. SUZUCHU NOW 2026.1.1 No.83",
                pdfUrl: "/kairanban/3/7.SUZUCHU NOW_2026.1.1_No.83.pdf",
                description: "SUZUCHU NOW：診療体制強化（MRI更新等）や院内情報の掲載。",
                isPrivate: false,
            },
            {
                title: "8. ケーブルテレビ工事実施について（お願い）",
                pdfUrl: "/kairanban/3/8.ケーブルテレビ工事実施について（お願い）.pdf",
                description: "ケーブルテレビ工事：2/25-3/3の間、山の花公園付近で撤去作業実施。",
                isPrivate: false,
            },
            {
                title: "9.【配布】新田南2組 緊急連絡網（修正版）",
                pdfUrl: "",
                description: "緊急連絡網：個人情報のため非公開（組長へお問い合わせください）。",
                isPrivate: true,
            },
        ],
        formUrl: "https://forms.gle/F6V9ZEudw1FT4kQLA",
    },
}

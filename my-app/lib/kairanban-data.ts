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
    "7": {
        issueNumber: "第七号",
        date: "2026年4月1日",
        items: [
            {
                title: "1. 自治会からのお知らせ_2026.3.27_No.6",
                pdfUrl: "/kairanban/7/1.自治会からのお知らせ_2026.3.27_No.6.pdf",
                description: "自治会からのお知らせ：安塚町自治会からの定例連絡。",
                isPrivate: false,
            },
            {
                title: "2. 農業委員会だよりすずか_2026.4_No.50",
                pdfUrl: "/kairanban/7/2.農業委員会だよりすずか_2026.4_No.50.pdf",
                description: "農業委員会だよりすずか：鈴鹿市農業委員会からのお知らせや活動報告。",
                isPrivate: false,
            },
            {
                title: "3. 飯野公民館だより 2026.4.5 No.382",
                pdfUrl: "/kairanban/7/3.飯野公民館だより_2026.4.5_No.382.pdf",
                description: "飯野公民館だより：各種講座やイベント、公民館の活動報告など。",
                isPrivate: false,
            },
            {
                title: "4. チラシ 鈴鹿川日々の暮らし市（4月18日・19日）",
                pdfUrl: "/kairanban/7/4.チラシ 鈴鹿川日々の暮らし市（4月18日・19日）.pdf",
                description: "鈴鹿川日々の暮らし市：4月18日・19日に鈴鹿川で開催されるイベントのご案内。",
                isPrivate: false,
            },
        ],
        formUrl: "",
    },
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
                title: "8.【配布】令和8年 安塚町 行事計画・町会計予算",
                pdfUrl: "/kairanban/2/8.【配布】令和8年 安塚町 行事計画・町会計予算.pdf",
                description: "行事計画・予算：令和8年度の行事予定と会計予算の配布資料。",
                isPrivate: false,
            },
            {
                title: "9.【配布】新田南2組 宮当番割当表",
                pdfUrl: "", // 非公開
                description: "宮当番割当表：個人情報を含むためWeb非公開（組長へお問い合わせください）。",
                isPrivate: true,
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
    "4": {
        issueNumber: "第四号",
        date: "2026年2月15日",
        items: [
            {
                title: "1. 組からのお知らせ_No.4",
                pdfUrl: "/kairanban/4/1.組からのお知らせ_2026.2.15_No.4.pdf",
                description: "組からのお知らせ：定例の連絡事項等について。",
                isPrivate: false,
            },
            {
                title: "2.【再掲】宮当番割当表",
                pdfUrl: "", // 非公開
                description: "宮当番割当表：個人情報を含むためWeb非公開（組長へお問い合わせください）。",
                isPrivate: true,
            },
            {
                title: "3. 新田南2組 ホームページ開設のお知らせ",
                pdfUrl: "/kairanban/4/3.新田南2組 ホームページ開設のお知らせ.pdf",
                description: "ホームページ開設：安塚町新田南2組のデジタル回覧板（本サイト）開設のお知らせ。",
                isPrivate: false,
            },
            {
                title: "4. 自治会からのお知らせ_No.3",
                pdfUrl: "/kairanban/4/4.自治会からのお知らせ_2026.2.13_No.3.pdf",
                description: "自治会からのお知らせ：安塚町自治会からの定例連絡。",
                isPrivate: false,
            },
            {
                title: "5. 令和8年度安塚町 要望一覧表",
                pdfUrl: "/kairanban/4/5.令和8年度安塚町 要望一覧表.pdf",
                description: "要望一覧表：今年度の安塚町への要望事項まとめ。",
                isPrivate: false,
            },
            {
                title: "6. チラシ：英語遊び＆英語でヨガ",
                pdfUrl: "/kairanban/4/6.チラシ：英語遊び＆英語でヨガ.pdf",
                description: "英語教室チラシ：英語遊びと英語ヨガ教室のご案内。",
                isPrivate: false,
            },
            {
                title: "7. 鈴鹿市身体障がい者福祉事業 回覧板カタログ2026年新春号",
                pdfUrl: "/kairanban/4/7.鈴鹿市身体障がい者福祉事業_回覧板カタログ2026新春号_No.89.pdf",
                description: "福祉事業カタログ：鈴鹿市身体障がい者福祉事業のカタログ新春号（※一部のみ公開）。",
                isPrivate: false,
            },
        ],
        formUrl: "", // 後ほど設定
    },
    "6": {
        issueNumber: "第六号",
        date: "2026年3月15日",
        items: [
            {
                title: "1. 組からのお知らせ_No.6",
                pdfUrl: "/kairanban/6/1.組からのお知らせ_2026.3.15_No.6.pdf",
                description: "組からのお知らせ：第1回家庭排水溝清掃（4/5）・地蔵堂祭（3/24）・春の祭礼（4/12）について。",
                isPrivate: false,
            },
            {
                title: "2. 自治会からのお知らせ_No.5",
                pdfUrl: "/kairanban/6/2.自治会からのお知らせ_2026.3.14_No.5.pdf",
                description: "自治会からのお知らせ：安塚町自治会からの定例連絡。",
                isPrivate: false,
            },
            {
                title: "3. 通行止め区間のお知らせ（3月23日～3月30日）",
                pdfUrl: "/kairanban/6/3.通行止め区間のお知らせ（3月23日～3月30日）.pdf",
                description: "3月23日〜30日の通行止め区間についてのお知らせ。",
                isPrivate: false,
            },
            {
                title: "4. 市民相談をご利用ください",
                pdfUrl: "/kairanban/6/4.市民相談をご利用ください.pdf",
                description: "鈴鹿市の市民相談窓口のご案内。",
                isPrivate: false,
            },
            {
                title: "5. 介護予防を目的にサロン活動に参加しよう！飯野つゆくさサロン",
                pdfUrl: "/kairanban/6/5.介護予防を目的にサロン活動に参加しよう！飯野つゆくさサロン.pdf",
                description: "飯野つゆくさサロンへの参加案内。介護予防を目的とした地域サロン活動のご紹介。",
                isPrivate: false,
            },
            {
                title: "6. 防犯みえ 2026春号 No.82",
                pdfUrl: "/kairanban/6/6.防犯みえ_2026春号_No.82.pdf",
                description: "三重県防犯協会からの防犯情報誌・春号。",
                isPrivate: false,
            },
            {
                title: "7. 鈴鹿市青少年育成市民会議だより 2026.3.20 No.88",
                pdfUrl: "/kairanban/6/7.鈴鹿市青少年育成 市民会議だより_2026.3.20_No.88.pdf",
                description: "鈴鹿市青少年育成市民会議からの活動報告・お知らせ。",
                isPrivate: false,
            },
            {
                title: "8. しょうぼう 中央消防署だより 2026.3.20",
                pdfUrl: "/kairanban/6/8.しょうぼう 中央消防署だより_2026.3.20.pdf",
                description: "中央消防署からの消防・防火に関するお知らせ。",
                isPrivate: false,
            },
        ],
        formUrl: "",
    },
    "5": {
        issueNumber: "第五号",
        date: "2026年2月28日",
        items: [
            {
                title: "1. 組からのお知らせ_No.5",
                pdfUrl: "/kairanban/5/1.組からのお知らせ_2026.2.28_No.5.pdf",
                description: "組からのお知らせ：定例の連絡事項等について。",
                isPrivate: false,
            },
            {
                title: "2. 自治会からのお知らせ_No.4",
                pdfUrl: "/kairanban/5/2.自治会のお知らせ_2026.2.26_No.4.pdf",
                description: "自治会からのお知らせ：安塚町自治会からの定例連絡。",
                isPrivate: false,
            },
            {
                title: "3. 林野災害注意報・警報",
                pdfUrl: "/kairanban/5/3.林野災害注意報・警報.pdf",
                description: "林野災害に関する注意報・警報のお知らせ。",
                isPrivate: false,
            },
            {
                title: "4. スポーツ推進すずか 2026.3 No.48",
                pdfUrl: "/kairanban/5/4.スポーツ推進すずか_2026.3_No.48.pdf",
                description: "スポーツ推進委員の活動報告やスポーツイベントの案内。",
                isPrivate: false,
            },
            {
                title: "5. 飯野公民館だより 2026.3.5 No.381",
                pdfUrl: "/kairanban/5/5.飯野公民会だより_2026.3.5_No.381.pdf",
                description: "飯野公民館だより：各種講座やイベント、公民館の活動報告など。",
                isPrivate: false,
            },
            {
                title: "6. チラシ：合同企業説明会inすずか",
                pdfUrl: "/kairanban/5/6.チラシ：合同企業説明会inすずか.pdf",
                description: "合同企業説明会inすずかの開催案内と参加企業についての情報。",
                isPrivate: false,
            },
        ],
        formUrl: "",
    },
}

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
                description: "1月17日（土）19時より阿自賀神社参集会館にて初集会を開催。町費徴収（持家9,600円・借家4,800円）、神社当番決め、要望事項の協議などを実施。",
                isPrivate: false,
            },
            {
                title: "2. 令和8年 安塚町 行事計画（案）",
                pdfUrl: "/kairanban/1/2.令和8 安塚町 行事計画（案）.pdf",
                description: "2026年度の安塚町行事計画案。御鍬祭（2/11）、家庭排水溝清掃（4/5）、春の祭礼（4/12）、町民運動会（5/24）、秋の大祭（10/11）など年間行事一覧。",
                isPrivate: false,
            },
            {
                title: "3. 名簿・緊急連絡網 訂正届",
                pdfUrl: "/kairanban/1/3.名簿・緊急連絡網 訂正届.pdf",
                description: "組名簿および緊急連絡網の訂正届用紙。内容に訂正がある場合はこちらに記入して組長へ提出してください。",
                isPrivate: false,
            },
            {
                title: "4. 新田南2組 住宅地図",
                pdfUrl: "",
                description: "個人情報が含まれるため非公開となります。組長へお問い合わせください。",
                isPrivate: true,
            },
            {
                title: "5. 飯野公民館だより 2026.1.5 No.378",
                pdfUrl: "/kairanban/1/5.飯野公民館だより_2026.1.5_No.378.pdf",
                description: "新年のご挨拶、春の公民館祭（舞台発表：カラオケ、大正琴、尺八、三味線、民謡、ダンススポーツ等）のご案内、サークル生募集のお知らせ。",
                isPrivate: false,
            },
            {
                title: "6. 飯野民児協だより 2026.1.5 No.47",
                pdfUrl: "/kairanban/1/6.飯野民児協だより_2026.1.5_No.47.pdf",
                description: "飯野地区民生委員・児童委員協議会だより。新任委員15名を含む総勢24名の体制紹介、消費者ホットライン（188）や詐欺電話対策の案内、秋の活動報告。",
                isPrivate: false,
            },
            {
                title: "7.【配布】新田南2組 名簿",
                pdfUrl: "",
                description: "個人情報が含まれるため非公開となります。組長へお問い合わせください。",
                isPrivate: true,
            },
            {
                title: "8.【配布】新田南2組 緊急連絡網",
                pdfUrl: "",
                description: "個人情報が含まれるため非公開となります。組長へお問い合わせください。",
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
                description: "安塚町自治会会長・役員一同からの新年のご挨拶。御鍬祭（2/11）の案内（奉納受付10:00〜12:00、式典14:30〜）、本厄年齢一覧あり。",
                isPrivate: false,
            },
            {
                title: "2. 令和8年 安塚町役員リスト",
                pdfUrl: "/kairanban/2/2.令和8年 安塚町役員リスト.pdf",
                description: "令和8年度の安塚町役員一覧（会長、副会長、各組組長）と各役員の担当会計・行事の一覧表。",
                isPrivate: false,
            },
            {
                title: "3. 令和8年 南2組初集会の報告",
                pdfUrl: "/kairanban/2/3.令和8年 南2組初集会の報告.pdf",
                description: "1/17初集会の報告（出席12名）。要望事項：交差点の安全対策、用水路転落防止柵の設置、雑草除去。相談事項：ごみ出しマナー、事業者対応、会議用機器の共同利用。",
                isPrivate: false,
            },
            {
                title: "4. 自治会への要望事項MAP",
                pdfUrl: "/kairanban/2/4.自治会への要望事項MAP.pdf",
                description: "新田南2組から自治会への要望箇所を地図と写真で示した資料。アパート横交差点、中勢バイパス下トンネル交差点、用水路危険箇所などを掲載。",
                isPrivate: false,
            },
            {
                title: "5. Wanted!! 探しています！組規約",
                pdfUrl: "/kairanban/2/5.Wanted!!探しています！組規約.pdf",
                description: "組の取り決め事項や業務の免除基準等が定められた組規約を探しています。以前は組長引継ぎUSBメモリに保存されていた情報あり。お心当たりの方はご連絡を。",
                isPrivate: false,
            },
            {
                title: "6. 講演会「How to 自治会」チラシ",
                pdfUrl: "/kairanban/2/6.講演会 How to 自治会チラシ.pdf",
                description: "鈴鹿市自治会連合会主催の講演会。テーマ：自治会が抱える課題と解決に向けて。2月開催、文化会館けやきホールにて。講師：水津陽子氏（地域活性化コンサルタント）。入場無料・申込不要。",
                isPrivate: false,
            },
            {
                title: "7. 飯野地区地域づくり協議会 環境部だより 2026.1.20 No.2",
                pdfUrl: "/kairanban/2/7.飯野地区地域づくり協議会 環境部だより_2026.1.20_No.2.pdf",
                description: "地域づくり研修生がクリアファイルを作成。ポイ捨て防止・ごみ分別・ペットのフン対策の啓発デザイン。2/20号の広報と一緒に配布予定。ごみ処理施設視察レポートも掲載。",
                isPrivate: false,
            },
            {
                title: "8.（配布）令和8年 安塚町 行事計画・町会計予算",
                pdfUrl: "/kairanban/2/8.（配布）令和8年 安塚町 行事計画・町会計予算.pdf",
                description: "2026年度の安塚町行事計画（正式版）と町会計予算。御鍬祭、地蔵堂祭、春秋の祭礼、排水溝清掃、町民運動会、防災訓練など年間スケジュール一覧。",
                isPrivate: false,
            },
            {
                title: "9.（配布）新田南2組 宮当番割当表",
                pdfUrl: "/kairanban/2/9.（配布）新田南2組 宮当番割当表.pdf",
                description: "令和8年度の各神社行事（御鍬祭、春秋の祭礼、地蔵堂祭、新嘗祭、年越し篝火など）における当番割当表。時間帯ごとの担当者を一覧で確認できます。",
                isPrivate: false,
            },
        ],
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe3lDuZ4CT8Qnh7lavkuuvMNdFFWW5mluuDR4xofWJX-Vun-w/viewform?usp=dialog",
    },
    "3": {
        issueNumber: "第三号",
        date: "2026年2月8日",
        items: [
            {
                title: "1. 新田南2組 組からのお知らせ",
                pdfUrl: "/kairanban/3/1.新田南2組 組からのお知らせ.pdf",
                description: "組の取り決め事項の正式可決報告。宮当番、組長の女性登用、組費運用ルール（残高50万円で町費半額充当）、組長業務用PC導入、アパートへの広報配布、組業務の免除基準、ごみ集積所管理、出不足金の集金方法など8項目。",
                isPrivate: false,
            },
            {
                title: "2. 安塚自治会回覧No.2 お知らせ",
                pdfUrl: "/kairanban/3/2.安塚自治会回覧No.2 お知らせ.pdf",
                description: "神社奉納の報告。本年厄年の方々より拝殿前鈴緒・本坪鈴が奉納されました。",
                isPrivate: false,
            },
            {
                title: "3. 飯野公民館だより 2026.2.5 No.379",
                pdfUrl: "/kairanban/3/3.飯野公民館だより_2026.2.5_No.379.pdf",
                description: "3月1日（日）春の公民館祭のご案内。舞台発表（大正琴、カラオケ、3B体操、太極拳、民謡・三味線、尺八など）、ふるまい・記念品あり。お子様にはお菓子プレゼント（先着30名）。",
                isPrivate: false,
            },
            {
                title: "4. 65歳以上の皆さんへ 結核レントゲン検診のお知らせ",
                pdfUrl: "/kairanban/3/4.65歳以上の皆さんへ 結核レントゲン検診のお知らせ.pdf",
                description: "3月11日（水）13時〜15時、保健センターにて。対象：65歳以上の鈴鹿市住民登録者。費用無料。電話で地域医療推進課へ申込み。",
                isPrivate: false,
            },
            {
                title: "5. チラシ：犯罪被害を考える県民の集い",
                pdfUrl: "/kairanban/3/5.チラシ 犯罪被害を考える県民の集い.pdf",
                description: "3月8日（日）ハヤシユナイテッド文化ホール鈴鹿にて。午前：池袋暴走事故遺族・松永拓也氏の講演。午後：三重県性暴力根絶条例キックオフイベント、シェリー氏トークショー。入場無料・定員350名。",
                isPrivate: false,
            },
            {
                title: "6. チラシ：第5回すずかロゲイニング",
                pdfUrl: "/kairanban/3/6.チラシ 第5回すずかロゲイニング.pdf",
                description: "地図上のチェックポイントを制限時間2.5時間内に回るナビゲーションスポーツ。集合場所：ホンダアクティブランド体育館。ファミリーの部100チーム・一般の部40チーム。参加費：高校生以上600円。",
                isPrivate: false,
            },
            {
                title: "7. SUZUCHU NOW 2026.1.1 No.83",
                pdfUrl: "/kairanban/3/7.SUZUCHU NOW_2026.1.1_No.83.pdf",
                description: "鈴鹿中央総合病院の季刊誌。診療体制の強化（MRI装置更新、リウマチ・膠原病内科新設、フルスペックのトモセラピー導入によるがん診療能力向上）、院内知っ得辞典、クッキングコーナーなど。",
                isPrivate: false,
            },
            {
                title: "8. ケーブルテレビ工事実施について（お願い）",
                pdfUrl: "/kairanban/3/8.ケーブルテレビ工事実施について（お願い）.pdf",
                description: "2月25日〜3月3日の期間中1日間、山の花公園付近でケーブルテレビ用電柱の撤去作業を実施。作業時間9:00〜17:00（1時間程度）。",
                isPrivate: false,
            },
            {
                title: "9.【配布】新田南2組 緊急連絡網（修正版）",
                pdfUrl: "",
                description: "個人情報が含まれるため非公開となります。組長へお問い合わせください。",
                isPrivate: true,
            },
        ],
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe3lDuZ4CT8Qnh7lavkuuvMNdFFWW5mluuDR4xofWJX-Vun-w/viewform?usp=dialog",
    },
}

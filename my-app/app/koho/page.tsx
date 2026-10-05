import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Megaphone, ChevronRight } from "lucide-react"

export default function KohoPage() {
    const kohoIssues = [
        {
            id: 13,
            issueNumber: "第十三回",
            date: "2026年10月5日",
            itemCount: 7,
            summary: "広報すずか No.1703、社協すずか No.489、民児協すずか No.76、エスプラス No.10、三重県植木まつり、山田邦子と考える人生会議、認知症相談窓口のご案内 など",
        },
        {
            id: 12,
            issueNumber: "第十二回",
            date: "2026年9月6日",
            itemCount: 7,
            summary: "広報すずか No.1702、市議会だより No.245、社協すずか No.488、消費生活センターだより、文化情報けやき、スポーツフェスタ、ふれあい広場案内 など",
        },
        {
            id: 11,
            issueNumber: "第十一回",
            date: "2026年8月8日",
            itemCount: 10,
            summary: "広報すずか No.1701、広報すずかかめやま No.76、社協すずか No.487、プレミアム付商品券、鈴鹿げんき花火大会・シティマラソン案内 など",
        },
        {
            id: 10,
            issueNumber: "第十回",
            date: "2026年7月5日",
            itemCount: 7,
            summary: "広報すずか No.1700、社協すずか No.486、エスプラス No.9、市議会だより No.244 など",
        },
        {
            id: 9,
            issueNumber: "第九回",
            date: "2026年5月31日",
            itemCount: 7,
            summary: "広報すずか No.1699、がん検診・健康診断のご案内、市議会だより No.243、社協すずか No.485、文化情報けやき など",
        },
        {
            id: 8,
            issueNumber: "第八回",
            date: "2026年5月5日",
            itemCount: 4,
            summary: "広報すずか No.1698、社協すずか No.484、歯と口の健康診断、安塚町民運動会プログラム など",
        },
        {
            id: 7,
            issueNumber: "第七回",
            date: "2026年4月1日",
            itemCount: 5,
            summary: "広報すずか No.1697、S+「エスプラス」No.8、予防接種のお知らせ、社協すずか No.483、公共交通時刻表 など",
        },
        {
            id: 6,
            issueNumber: "第六回",
            date: "2026年3月20日",
            itemCount: 6,
            summary: "広報すずか No.1696、民児協スズカ No.75、鈴鹿さくら祭り・植木まつり、社協すずか No.482、赤い羽根共同募金 など",
        },
        {
            id: 5,
            issueNumber: "第五回",
            date: "2026年2月28日",
            itemCount: 6,
            summary: "令和8年度ごみ収集カレンダー、2026 F1日本グランプリ交通規制、広報すずか No.1695、広報すずかかめやま No.75 など",
        },
        {
            id: 4,
            issueNumber: "第四回",
            date: "2026年2月20日",
            itemCount: 4,
            summary: "広報すずか No.1694、市議会だより No.242、社協すずか No.481、飯野公民館だより No.380",
        },
        {
            id: 3,
            issueNumber: "第三回",
            date: "2026年2月5日",
            itemCount: 1,
            summary: "広報すずか No.1693",
        },
        {
            id: 2,
            issueNumber: "第二回",
            date: "2026年1月20日",
            itemCount: 1,
            summary: "広報すずか No.1692",
        },
        {
            id: 1,
            issueNumber: "第一回",
            date: "2026年1月5日",
            itemCount: 1,
            summary: "広報すずか No.1691",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-6 md:py-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/">
                            <Button variant="ghost" size="lg" className="text-base">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                トップページへ
                            </Button>
                        </Link>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-foreground">広報</h1>
                        <p className="text-base md:text-lg text-muted-foreground mt-2">新田南2組 デジタル回覧板</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 md:py-12">
                {/* Instructions */}
                <Card className="p-6 mb-8 bg-primary/10 border-primary/30">
                    <div className="flex items-start gap-4">
                        <Megaphone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h2 className="text-lg font-bold text-foreground mb-2">広報の確認方法</h2>
                            <p className="text-base text-foreground leading-relaxed">
                                各回をクリックすると、その回に発行された広報紙等をご覧いただけます。
                                <br />
                                市や地区からの情報をご確認ください。
                            </p>
                        </div>
                    </div>
                </Card>

                <div className="grid gap-6 md:gap-8">
                    {kohoIssues.map((issue) => (
                        <Link key={issue.id} href={`/koho/${issue.id}`}>
                            <Card className="p-6 md:p-8 hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{issue.issueNumber}</h3>
                                            <span className="text-sm text-muted-foreground">発行日: {issue.date}</span>
                                        </div>
                                        <p className="text-base text-muted-foreground mb-2">掲載項目数: {issue.itemCount}件</p>
                                        <p className="text-base text-foreground">{issue.summary}</p>
                                    </div>
                                    <ChevronRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {kohoIssues.length === 0 && (
                    <Card className="p-12 text-center">
                        <Megaphone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">現在、広報はありません</h3>
                        <p className="text-base text-muted-foreground">新しい広報が発行されると、こちらに表示されます。</p>
                    </Card>
                )}

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button size="lg" className="text-base px-8">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            トップページに戻る
                        </Button>
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-card mt-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">安塚町自治会 新田南2組</p>
                        <p className="text-xs text-muted-foreground mt-4">令和8年度（2026年）| デジタル回覧板</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

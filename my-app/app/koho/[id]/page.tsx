import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, Megaphone } from "lucide-react"

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}

export default async function KohoDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const kohoData: Record<string, any> = {
        "5": {
            issueNumber: "第五回",
            date: "2026年2月28日",
            items: [
                {
                    title: "1. 令和8年度ごみ収集カレンダー",
                    pdfUrl: "/koho/5/1.令和8年度ごみ収集カレンダー.pdf",
                    description: "令和8年度のごみ収集日程カレンダーです。",
                },
                {
                    title: "2. 2026 F1日本グランプリレースに伴う交通規制",
                    pdfUrl: "/koho/5/2.2026 F1日本グランプリレースに伴う交通規制.pdf",
                    description: "F1日本グランプリ開催時の周辺交通規制についてのお知らせ。",
                },
                {
                    title: "3. 広報すずか 2026.3.5 No.1695",
                    pdfUrl: "/koho/5/3.広報すずか_2026.3.5_No.1695.pdf",
                    description: "広報すずか最新号：市政の各種情報やイベント案内等。",
                },
                {
                    title: "4. 広報すずかかめやま地区広域連合 2026.3 No.75",
                    pdfUrl: "/koho/5/4.広報すずかかめやま地区広域連合_2026.3_No.75.pdf",
                    description: "すずかかめやま地区広域連合の広報紙。",
                },
                {
                    title: "5. 自治会すずか 2026.3 No.16",
                    pdfUrl: "/koho/5/5.自治会すずか_2026.3_No.16.pdf",
                    description: "鈴鹿市自治会連合会からのお知らせ。",
                },
                {
                    title: "6. チラシ：すずかアートスクール受講案内",
                    pdfUrl: "/koho/5/6.チラシ：すずかアートスクール受講案内.pdf",
                    description: "すずかアートスクールの講座受講案内チラシ。",
                },
            ],
        },
        "4": {
            issueNumber: "第四回",
            date: "2026年2月20日",
            items: [
                {
                    title: "広報すずか 2026.2.20 No.1694",
                    pdfUrl: "/koho/4/広報すずか_2026.2.20_No.1694.pdf",
                    description: "合同企業説明会inすずか、鈴鹿シティマラソン参加賞デザイン募集、高齢者施策推進協議会委員募集、障害者施策推進協議会委員募集、介護予防教室の受託事業者募集 など。",
                },
                {
                    title: "市議会だより 2026.2.20 No.242",
                    pdfUrl: "/koho/4/市議会だより_2026.2.20_No.242.pdf",
                    description: "12月定例議会の概要（物価高騰による学校給食食材費増額の補正予算など17議案可決）、一般質問、市政への提言、火災予防条例改正・学校施設使用条例改正の審査状況 など。",
                },
                {
                    title: "社協すずか 2026.2.20 No.481",
                    pdfUrl: "/koho/4/社協すずか_2026.2.20_No.481.pdf",
                    description: "後見サポートセンター「みらい」のご案内、エンディングノート『わたしの人生ノート』、市民向け成年後見講座（3月開催）、アート展Part2の案内 など。",
                },
                {
                    title: "＜保存版＞飯野公民館だより 2026.2.20 No.380",
                    pdfUrl: "/koho/4/＜保存版＞飯野公民館だより_2026.2.20_No.380.pdf",
                    description: "令和8年4月からのサークル生募集（カラオケ、手編み、ダンススポーツ、大人のぬりえ、スクエアステップ、健康体操、水墨画 など）。申込期間: 2月24日〜3月9日。",
                },
            ],
        },
        "3": {
            issueNumber: "第三回",
            date: "2026年2月5日",
            items: [
                {
                    title: "広報すずか 2026.2.5 No.1693",
                    pdfUrl: "/koho/3/広報すずか_2026.2.5_No.1693.pdf",
                    description: "特集: 天栄小学校を開校します ～3つの学びがひとつの未来に～。自転車「青切符」制度、F1ドライバー交流・イベント情報 など。",
                },
            ],
        },
        "2": {
            issueNumber: "第二回",
            date: "2026年1月20日",
            items: [
                {
                    title: "広報すずか 2026.1.20 No.1692",
                    pdfUrl: "/koho/2/広報すずか_2026.1.20_No.1692.pdf",
                    description: "総合教育会議・交通安全対策会議の傍聴案内、水道管凍結注意、物価高対応子育て応援手当（児童1人2万円）、火災予防条例改正 など。",
                },
            ],
        },
        "1": {
            issueNumber: "第一回",
            date: "2026年1月5日",
            items: [
                {
                    title: "広報すずか 2026.1.5 No.1691",
                    pdfUrl: "/koho/1/広報すずか_2026.1.5_No.1691.pdf",
                    description: "特集: 鈴鹿市消防団 ～地域のHERO～。人事行政運営状況、確定申告、お知らせ・催し物 など。",
                },
            ],
        },
    }

    const issue = kohoData[id]

    if (!issue) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Card className="p-8 text-center max-w-md">
                    <h2 className="text-xl font-bold text-foreground mb-4">広報が見つかりません</h2>
                    <Link href="/koho">
                        <Button>広報一覧へ戻る</Button>
                    </Link>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-6 md:py-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/koho">
                            <Button variant="ghost" size="lg" className="text-base">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                広報一覧へ
                            </Button>
                        </Link>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-foreground">{issue.issueNumber}</h1>
                        <p className="text-base md:text-lg text-muted-foreground mt-2">発行日: {issue.date}</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                {/* PDF Items */}
                <div className="space-y-6 mb-12">
                    {issue.items.map((item: any, index: number) => (
                        <Card key={index} className="p-6 md:p-8">
                            <div className="flex items-start gap-4 mb-4">
                                <Megaphone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                            <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="w-full text-base py-6 bg-transparent">
                                    <Download className="h-5 w-5 mr-2" />
                                    閲覧する
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </Button>
                            </a>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/koho">
                        <Button size="lg" className="text-base px-8">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            広報一覧に戻る
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

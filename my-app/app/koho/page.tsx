import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Megaphone, ChevronRight } from "lucide-react"

export default function KohoPage() {
    const kohoIssues = [
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

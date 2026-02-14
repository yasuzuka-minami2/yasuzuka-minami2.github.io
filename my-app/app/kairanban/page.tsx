import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, ChevronRight } from "lucide-react"

export default function KairanbanPage() {
  const kairanbanIssues = [
    {
      id: 3,
      issueNumber: "第三号",
      date: "2026年2月8日",
      itemCount: 9,
      summary: "組からのお知らせ（取り決め事項可決）、自治会回覧No.2、飯野公民館だより、など",
    },
    {
      id: 2,
      issueNumber: "第二号",
      date: "2026年1月25日",
      itemCount: 9,
      summary: "安塚自治会ご挨拶、役員リスト、初集会の報告、など",
    },
    {
      id: 1,
      issueNumber: "第一号",
      date: "2026年1月11日",
      itemCount: 8,
      summary: "初集会開催のお知らせ、行事計画（案）、名簿・緊急連絡網訂正届、など",
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
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">回覧板</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-2">新田南2組 デジタル回覧板</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Archive Link Button */}
        <div className="mb-8 text-center md:text-left">
          <Link href="/kairanban/archive">
            <Button size="lg" variant="outline" className="w-full md:w-auto font-bold border-2 hover:bg-slate-50">
              <FileText className="h-5 w-5 mr-2" />
              回覧板配布一覧表を見る
            </Button>
          </Link>
        </div>

        {/* Instructions */}
        <Card className="p-6 mb-8 bg-accent/10 border-accent/30">
          <div className="flex items-start gap-4">
            <FileText className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">回覧板の確認方法</h2>
              <p className="text-base text-foreground leading-relaxed">
                各号をクリックすると、その回に配布されたすべてのPDF資料をご覧いただけます。 内容確認後、ページ上部の
                <strong>「確認済みの連絡をする」ボタン</strong>よりご連絡をお願いします。
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:gap-8">
          {kairanbanIssues.map((issue) => (
            <Link key={issue.id} href={`/kairanban/${issue.id}`}>
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
        {kairanbanIssues.length === 0 && (
          <Card className="p-12 text-center">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">現在、回覧板はありません</h3>
            <p className="text-base text-muted-foreground">新しい回覧板が掲載されると、こちらに表示されます。</p>
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

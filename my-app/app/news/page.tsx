import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NewsPage() {
  // 実際のお知らせ情報はここに追加してください
  const newsItems = [
    {
      id: 1,
      title: "デジタル回覧板の公開について",
      date: "2026年2月14日",
      content:
        "本日より、新田南2組「デジタル回覧板」の運用を開始いたしました。\n\nご家族との情報共有や、備忘録として手元に情報を残しておきたいというお声にお応えし、いつでも・すぐに・どこでも回覧板を確認できるホームページを開設しました。\n\nホームページに関するご不明点やご要望がございましたら、組長までお気軽にお問い合わせください。\n今後ともよろしくお願いいたします。",
      important: true,
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">お知らせ</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <div className="space-y-8">
          {newsItems.map((item) => (
            <div key={item.id} className="border-b border-border/50 pb-8 last:border-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-muted-foreground mr-2">{item.date}</span>
                {item.important && (
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                    重要
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {newsItems.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            <p>現在、お知らせはありません。</p>
          </div>
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

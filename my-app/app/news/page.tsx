import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NewsPage() {
  // 実際のお知らせ情報はここに追加してください
  const newsItems = [
    {
      id: 3,
      title: "自治会費納入のお願い",
      date: "2026年1月15日",
      content:
        "令和8年度の自治会費納入をお願いいたします。納入期限は2月末日となっております。詳細は回覧板ページをご確認ください。",
      important: false,
    },
    {
      id: 1,
      title: "新年のご挨拶",
      date: "2026年1月1日",
      content:
        "新年明けましておめでとうございます。令和8年度も新田南2組の組長として、皆様のお役に立てるよう努めてまいります。本年もどうぞよろしくお願いいたします。",
      important: true,
    },
    {
      id: 2,
      title: "デジタル回覧板の運用開始",
      date: "2026年1月1日",
      content:
        "本日より、デジタル回覧板の運用を開始いたしました。従来の紙の回覧板と併用しながら、徐々にデジタル化を進めてまいります。ご不明な点がございましたら、組長までお気軽にお問い合わせください。",
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

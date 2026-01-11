import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bell } from "lucide-react"

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
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">お知らせ</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-2">新田南2組からのお知らせ</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                {item.important && <Bell className="h-6 w-6 text-accent mt-1 flex-shrink-0" />}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                    {item.important && (
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        重要
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                  <p className="text-base md:text-lg text-foreground leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {newsItems.length === 0 && (
          <Card className="p-12 text-center">
            <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">現在、お知らせはありません</h3>
            <p className="text-base text-muted-foreground">新しいお知らせが掲載されると、こちらに表示されます。</p>
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

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { FileText, Calendar, ChevronRight, CalendarDays, Megaphone, BookOpen, Book, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  // 更新履歴データ（新しいものが上）
  const updateHistory = [
    { date: "2026年2月14日", text: "デジタル回覧板を公開しました" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="space-y-3 w-full">
              <h1
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-zen-kaku)" }}
              >
                安塚町自治会 新田南2組
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">デジタル回覧板</p>
              <p className="text-xs text-muted-foreground">三重県鈴鹿市安塚町 | 令和8年度</p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative w-full h-48 md:h-96 overflow-hidden">
        <Image
          src="/shrine.png"
          alt="安塚神社"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Welcome Message */}
        <section className="mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ようこそ</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            新田南2組のデジタル回覧板へようこそ。
            <br className="hidden md:block" />
            こちらでは、従来の紙の回覧板に合わせ、お知らせや回覧情報、
            <br className="hidden md:block" />
            活動報告などをいつでもご確認いただけます。
          </p>
        </section>

        {/* 更新履歴 */}
        <section className="mb-10 text-left max-w-2xl mx-auto">
          <h3 className="text-base md:text-lg font-bold text-foreground mb-3 px-2">📢 お知らせ</h3>
          <ul className="space-y-2 px-2">
            {updateHistory.map((item, index) => (
              <li key={index} className="text-sm md:text-base text-foreground border-b border-border/50 pb-2">
                <span className="text-muted-foreground mr-3 text-xs md:text-sm">{item.date}</span>
                {item.text}
              </li>
            ))}
          </ul>
          <div className="mt-2 text-right px-2">
            <Link href="/news" className="text-sm text-primary hover:underline">
              過去の更新履歴を見る →
            </Link>
          </div>
        </section>

        {/* Main Navigation Cards - 4つのみ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 回覧板 */}
          <Link href="/kairanban">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors self-start">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    回覧板
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    回覧情報をご確認の上、
                    <br className="hidden md:block" />
                    確認フォームへご記入ください
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* 広報 */}
          <Link href="/koho">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors self-start">
                  <Megaphone className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    広報
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    市や地区の広報紙や
                    <br className="hidden md:block" />
                    便りをご覧いただけます
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* 活動報告 */}
          <Link href="/reports">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors self-start">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    活動報告
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    自治会の活動内容や
                    <br className="hidden md:block" />
                    イベントの報告をご覧いただけます
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* 年間スケジュール */}
          <Link href="/schedule">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors self-start">
                  <CalendarDays className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    年間スケジュール
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    年間の行事予定や
                    <br className="hidden md:block" />
                    スケジュールをご確認いただけます
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </section>

        {/* 規約リンク */}
        <section className="mb-8 text-center">
          <Link href="/rules-list" className="inline-flex items-center gap-2 text-base md:text-lg text-primary hover:underline font-medium">
            <BookOpen className="h-5 w-5" />
            規約を見る
          </Link>
        </section>

        {/* 組長情報 */}
        <section className="text-center py-6">
          <a
            href="https://forms.gle/pVLRgAcHxWyCa7gs6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-md mb-4"
          >
            <MessageSquare className="h-6 w-6" />
            組長への連絡はこちらから
          </a>
          <div className="text-sm text-muted-foreground">
            <p>令和8年度 組長　河野 良太</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">安塚町自治会 新田南2組</p>
            <p className="text-sm text-muted-foreground">〒513-0818 三重県鈴鹿市安塚町</p>
            <p className="text-xs text-muted-foreground mt-4">令和8年度（2026年）組長 | デジタル回覧板</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Bell, FileText, Calendar, Users, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-8">
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

      <div className="relative w-full h-64 md:h-96 overflow-hidden">
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
        <section className="mb-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">ようこそ</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            新田南2組のデジタル回覧板へようこそ。
            <br />
            こちらでは、従来の紙の回覧板に合わせ、お知らせや回覧情報、
            <br className="hidden md:block" />
            活動報告などをいつでもご確認いただけます。
          </p>
        </section>

        {/* Main Navigation Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* お知らせ */}
          <Link href="/news">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Bell className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    お知らせ
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    自治会からの重要なお知らせや
                    <br />
                    連絡事項をご確認いただけます
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      最新情報
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* 回覧板 */}
          <Link href="/kairanban">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    回覧板
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    回覧情報をご確認の上、
                    <br />
                    確認フォームへご記入ください
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-destructive/10 text-destructive text-sm font-medium rounded-full">
                      要確認
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* 活動報告 */}
          <Link href="/reports">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    活動報告
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    自治会の活動内容や
                    <br />
                    イベントの報告をご覧いただけます
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* 組員情報 */}
          <Link href="/members">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    組員情報
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    組長の連絡先や
                    <br />
                    緊急連絡網をご確認いただけます
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </section>

        {/* Info Section */}
        <section className="bg-muted/50 rounded-lg p-8 border border-border">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 text-center">デジタル回覧板の使い方</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <p className="text-base text-foreground font-medium">カードをタップ</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                見たい情報のカードを
                <br />
                タップしてください
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <p className="text-base text-foreground font-medium">内容を確認</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                お知らせや回覧情報を
                <br />
                ゆっくりご確認ください
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <p className="text-base text-foreground font-medium">確認フォーム入力</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                回覧板は確認フォームへの
                <br />
                ご記入をお願いします
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">安塚町自治会 新田南2組</p>
            <p className="text-sm text-muted-foreground">〒513-0012 三重県鈴鹿市安塚町</p>
            <p className="text-xs text-muted-foreground mt-4">令和8年度（2026年）組長 | デジタル回覧板</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

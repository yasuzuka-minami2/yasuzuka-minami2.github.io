import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Phone, Mail } from "lucide-react"

export default function MembersPage() {
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
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">組員情報</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-2">令和8年度 組長・連絡先</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        {/* 組長情報 */}
        <Card className="p-6 md:p-8 mb-8 border-2 border-primary">
          <div className="flex items-start gap-4 mb-6">
            <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">令和8年度 組長</h2>
              <p className="text-sm text-muted-foreground">2026年1月 〜 2026年12月</p>
            </div>
          </div>

          <div className="space-y-4 pl-0 md:pl-12">
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-lg font-bold text-foreground mb-4">[組長のお名前]</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">電話番号</p>
                    <p className="text-base font-medium text-foreground">[電話番号]</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">メールアドレス</p>
                    <p className="text-base font-medium text-foreground break-all">[メールアドレス]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm text-foreground leading-relaxed">
                ご不明な点やご質問がございましたら、お気軽にご連絡ください。
              </p>
            </div>
          </div>
        </Card>

        {/* 緊急連絡網 */}
        <Card className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">緊急連絡網</h2>

          <div className="space-y-4">
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
              <p className="text-base text-foreground leading-relaxed">
                年始に配布した緊急連絡網をご確認ください。お持ちでない方は、組長までご連絡ください。
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-3">公共の緊急連絡先</h3>
              <div className="space-y-2 text-base text-foreground">
                <p>警察: 110</p>
                <p>消防・救急: 119</p>
                <p>鈴鹿市役所: 059-382-1100</p>
              </div>
            </div>
          </div>
        </Card>

        {/* 注意書き */}
        <Card className="p-6 mt-6 bg-muted/30">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            個人情報の取り扱いには十分ご注意ください。
            <br />
            この情報は組内の連絡用としてのみご使用ください。
          </p>
        </Card>

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

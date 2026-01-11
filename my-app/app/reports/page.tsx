import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ReportsPage() {
  // 実際の活動報告はここに追加してください
  const reports = [
    {
      id: "cleaning-2024",
      title: "年末大掃除の実施報告",
      date: "2025年12月28日",
      excerpt: "12月28日に実施した年末大掃除には、20世帯からご参加いただきました。",
      imageUrl: "/japanese-community-members-cleaning-neighborhood-s.jpg",
    },
    {
      id: "disaster-prep-2024",
      title: "防災備蓄品の確認",
      date: "2025年11月15日",
      excerpt: "組で管理している防災備蓄品の確認を行いました。",
      imageUrl: "/emergency-supplies-and-disaster-preparedness-kit.jpg",
    },
    {
      id: "autumn-festival-2024",
      title: "秋祭りの開催",
      date: "2025年10月20日",
      excerpt: "秋晴れの下、恒例の秋祭りを開催しました。",
      imageUrl: "/japanese-autumn-festival-with-children-and-familie.jpg",
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
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">活動報告</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-2">新田南2組の活動記録</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Link key={report.id} href={`/reports/${report.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary h-full">
                <div className="relative w-full h-48">
                  <Image src={report.imageUrl || "/placeholder.svg"} alt={report.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{report.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {report.title}
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{report.excerpt}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {reports.length === 0 && (
          <Card className="p-12 text-center">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">現在、活動報告はありません</h3>
            <p className="text-base text-muted-foreground">活動が実施されると、こちらに報告が掲載されます。</p>
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

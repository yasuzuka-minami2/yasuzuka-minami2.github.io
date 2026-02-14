import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, FileText, Lock, Eye } from "lucide-react"
import { kairanbanData } from "@/lib/kairanban-data"

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function KairanbanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const issue = kairanbanData[id]

  if (!issue) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-xl font-bold text-foreground mb-4">回覧板が見つかりません</h2>
          <Link href="/kairanban">
            <Button>回覧板一覧へ戻る</Button>
          </Link>
        </Card>
      </div>
    )
  }

  const publicItemCount = issue.items.filter((item) => !item.isPrivate).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/kairanban">
              <Button variant="ghost" size="lg" className="text-base">
                <ArrowLeft className="h-5 w-5 mr-2" />
                回覧板一覧へ
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
        {/* Confirmation Form */}
        <Card className="p-6 md:p-8 bg-primary/5 border-primary/30 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">確認フォーム</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              回覧板の内容をご確認いただきましたら、必ず下記のフォームからご連絡をお願いします。
            </p>
          </div>
          <a href={issue.formUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full text-base md:text-lg py-6">
              <FileText className="h-5 w-5 mr-2" />
              確認フォームを開く
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </Card>

        {/* 全資料一括表示リンク */}
        <a href={`/kairanban/${id}/all.pdf`} target="_blank" rel="noopener noreferrer">
          <Card className="p-5 mb-8 bg-primary/5 border-primary/30 hover:bg-primary/10 hover:shadow-md transition-all cursor-pointer">
            <div className="flex items-center justify-center gap-3">
              <Eye className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">{issue.issueNumber}の全資料をまとめて見る（結合PDF）</span>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              公開{publicItemCount}件のPDFを1つに結合したファイルが開きます
            </p>
          </Card>
        </a>

        {/* PDF Items */}
        <div className="space-y-6 mb-12">
          {issue.items.map((item: any, index: number) => (
            <Card key={index} className={`p-6 md:p-8 ${item.isPrivate ? 'bg-muted/30' : ''}`}>
              <div className="flex items-start gap-4 mb-4">
                {item.isPrivate ? (
                  <Lock className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                ) : (
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className={`text-base leading-relaxed ${item.isPrivate ? 'text-muted-foreground italic' : 'text-muted-foreground'}`}>{item.description}</p>
                </div>
              </div>
              {!item.isPrivate && (
                <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full text-base py-6 bg-transparent">
                    <Download className="h-5 w-5 mr-2" />
                    PDFを開く
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              )}
            </Card>
          ))}
        </div>



        <div className="mt-12 text-center">
          <Link href="/kairanban">
            <Button size="lg" className="text-base px-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              回覧板一覧に戻る
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

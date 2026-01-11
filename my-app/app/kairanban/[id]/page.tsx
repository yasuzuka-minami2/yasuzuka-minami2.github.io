import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react"

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function KairanbanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  // 実際のデータはここに追加してください
  const kairanbanData: Record<string, any> = {
    "1": {
      issueNumber: "第一号",
      date: "2026年1月11日",
      items: [
        {
          title: "新年初集会のお知らせ",
          pdfUrl: "/documents/kairanban-1-1.pdf", // 実際のPDFパスに置き換え
          description: "1月20日（月）19:00より公民館にて新年初集会を開催します。",
        },
        {
          title: "組名簿配布",
          pdfUrl: "/documents/kairanban-1-2.pdf",
          description: "令和8年度の組名簿を配布いたします。内容をご確認ください。",
        },
        {
          title: "新年の要望事項",
          pdfUrl: "/documents/kairanban-1-3.pdf",
          description: "自治会への要望事項がございましたら、フォームにご記入ください。",
        },
      ],
      formUrl: "https://forms.gle/example-kairanban-1", // 実際のGoogle FormsのURLに置き換え
    },
    "2": {
      issueNumber: "第二号",
      date: "2026年1月25日",
      items: [
        {
          title: "資源ゴミ収集日変更のお知らせ",
          pdfUrl: "/documents/kairanban-2-1.pdf",
          description: "2月からの資源ゴミ収集日が第2・第4水曜日に変更になります。",
        },
        {
          title: "令和8年度 自治会費のお知らせ",
          pdfUrl: "/documents/kairanban-2-2.pdf",
          description: "自治会費の金額と納入方法についてご確認ください。",
        },
      ],
      formUrl: "https://forms.gle/example-kairanban-2",
    },
    "3": {
      issueNumber: "第三号",
      date: "2026年2月8日",
      items: [
        {
          title: "防災訓練実施のご案内",
          pdfUrl: "/documents/kairanban-3-1.pdf",
          description: "3月15日（土）に防災訓練を実施します。参加可否をご回答ください。",
        },
      ],
      formUrl: "https://forms.gle/example-kairanban-3",
    },
  }

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
        {/* PDF Items */}
        <div className="space-y-6 mb-12">
          {issue.items.map((item: any, index: number) => (
            <Card key={index} className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
              <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full text-base py-6 bg-transparent">
                  <Download className="h-5 w-5 mr-2" />
                  PDFを開く
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Confirmation Form */}
        <Card className="p-6 md:p-8 bg-primary/5 border-primary/30">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">確認フォーム</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              すべての内容をご確認いただきましたら、下記のフォームからご連絡をお願いします。
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

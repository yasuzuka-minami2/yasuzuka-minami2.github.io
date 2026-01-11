import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

const reportsData = {
  "cleaning-2024": {
    title: "年末大掃除の実施報告",
    date: "2025年12月28日",
    participants: 20,
    content: `12月28日（土）午前9時より、年末大掃除を実施いたしました。
    
今年も多くの方にご参加いただき、20世帯のご協力のもと、地域の清掃活動を行うことができました。

当日は天候にも恵まれ、組内の道路や側溝、公園周辺を中心に清掃を行いました。落ち葉の回収や側溝の泥上げなど、日頃手の届かない箇所まで丁寧に作業を進めることができました。

作業後は、参加者の皆さまで温かいお茶とお菓子を囲みながら、今年一年を振り返る良い機会となりました。

ご参加いただいた皆さま、誠にありがとうございました。来年もどうぞよろしくお願いいたします。`,
    images: [
      "/japanese-community-members-cleaning-neighborhood-s.jpg",
      "/japanese-neighbors-cleaning-street-together.jpg",
      "/clean-japanese-neighborhood-after-community-cleanu.jpg",
    ],
  },
  "disaster-prep-2024": {
    title: "防災備蓄品の確認",
    date: "2025年11月15日",
    participants: null,
    content: `11月15日に、組で管理している防災備蓄品の定期確認を行いました。

今回の点検では、以下の項目を確認いたしました：
• 飲料水の賞味期限チェック
• 非常食（アルファ米、缶詰等）の在庫確認
• 救急用品の補充状況
• 懐中電灯、電池の動作確認
• 毛布、ブルーシートの状態確認

確認の結果、飲料水の一部が賞味期限間近となっていたため、新しいものと交換いたしました。また、救急用品の消毒液を補充し、電池も新しいものに交換しております。

災害はいつ起こるかわかりません。引き続き、定期的な点検を行い、万が一に備えてまいります。`,
    images: [
      "/emergency-supplies-and-disaster-preparedness-kit.jpg",
      "/emergency-water-bottles-and-food-supplies.jpg",
      "/first-aid-kit-and-emergency-blankets.jpg",
    ],
  },
  "autumn-festival-2024": {
    title: "秋祭りの開催",
    date: "2025年10月20日",
    participants: 35,
    content: `10月20日（日）、秋晴れの素晴らしい天気のもと、恒例の秋祭りを開催いたしました。

今年は35世帯、約100名の方にご参加いただき、大変賑やかなお祭りとなりました。

子どもたちには、輪投げやヨーヨー釣りなどの縁日コーナーが大人気。笑顔があふれる一日となりました。また、焼きそばや焼き鳥、綿あめなどの出店も多くの方にお楽しみいただきました。

午後からは、地域の方々による和太鼓の演奏や、子どもたちによる踊りの披露もあり、会場は大いに盛り上がりました。

最後に、ビンゴ大会で盛り上がり、豪華景品に歓声が上がりました。

ご協力いただいた役員の皆さま、ご参加いただいた皆さま、本当にありがとうございました。来年もぜひご参加ください。`,
    images: [
      "/japanese-autumn-festival-with-children-and-familie.jpg",
      "/japanese-festival-games-with-children-playing.jpg",
      "/japanese-community-festival-food-stalls.jpg",
      "/japanese-taiko-drum-performance-at-community-festi.jpg",
    ],
  },
}

export function generateStaticParams() {
  return [
    { id: 'cleaning-2024' },
    { id: 'disaster-prep-2024' },
    { id: 'autumn-festival-2024' },
  ]
}

export default async function ReportDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const report = reportsData[id as keyof typeof reportsData]

  if (!report) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/reports">
              <Button variant="ghost" size="lg" className="text-base">
                <ArrowLeft className="h-5 w-5 mr-2" />
                活動報告一覧へ
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{report.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8 text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{report.date}</span>
            </div>
            {report.participants && (
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>参加: {report.participants}世帯</span>
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image src={report.images[0] || "/placeholder.svg"} alt={report.title} fill className="object-cover" />
          </div>

          {/* Content */}
          <Card className="p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {report.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-foreground leading-relaxed mb-4 last:mb-0">
                  {paragraph.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < paragraph.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </Card>

          {/* Additional Images */}
          {report.images.length > 1 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">写真ギャラリー</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.images.slice(1).map((image, index) => (
                  <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${report.title} - 写真${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link href="/reports">
            <Button size="lg" className="text-base px-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              活動報告一覧に戻る
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

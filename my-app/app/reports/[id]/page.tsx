import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReportContent from "./ReportContent"

const reportsData = {
  "20260211": {
    title: "御鍬祭（おくわさい）の開催",
    date: "2026年2月11日（水・祝）",
    participants: null,
    content: `![御鍬祭](1.jpg)

立春を過ぎ、暦の上では春とはいえ、まだ寒さの残るなか、本年度の「御鍬祭」が滞りなく執り行われました。

開催日：2026年2月11日（水・祝）場所：阿自賀神社

## 皆様のご協力に感謝申し上げます

当日は朝早くから会場の準備にご協力いただいた皆様、また、当日まで細やかな手配を担ってくださった宮当番の皆様、本当にお疲れ様でした。

皆様の献身的な支えがあったからこそ、無事にこの日を迎えることができました。また、お忙しいなか奉納や式典にご参加いただいた住民の皆様にも、厚く御礼申し上げます。

![会場設営や受付準備に励む皆様の様子](3.jpg)

## 式典の様子

14:30より執り行われた式典では、神主様をお招きし、厳かな雰囲気の中で執り行われました。

厄除けの祈願とともに、今年一年の五穀豊穣と地域の安泰を願って、祝詞（のりと）を奏上していただきました。祭壇に供えられた供物や、静まり返った拝殿に響く祝詞の音に、参加者一同、身の引き締まる思いで手を合わせました。

![厳かに整えられた祭壇と御神燈](2.jpg)

## 組長より一言

本日は誠にありがとうございました。

皆様とともにこうして伝統ある行事を守り、祈りを捧げることができ、大変嬉しく思います。

今年一年が、皆様にとって健康で、笑顔の絶えないご多幸な年となりますよう、心よりお祈り申し上げます。今後とも自治会活動へのご理解とご協力を、どうぞよろしくお願いいたします。

### 【次回の活動予定】

次回の行事予定については、改めて掲示板およびホームページにてお知らせいたします。

> **注記：** この報告書に使用している写真は、当日撮影したものです。プライバシー等に配慮しておりますが、掲載に差し障りがある場合は組長までご連絡ください。`,
    images: [
      "/reports/20260211/1.jpg",
      "/reports/20260211/3.jpg",
      "/reports/20260211/2.jpg",
    ],
  },
}

export function generateStaticParams() {
  return [
    { id: '20260211' },
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

          {/* Main Content */}
          <ReportContent content={report.content} baseImagePath={`/reports/${id}/`} />
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

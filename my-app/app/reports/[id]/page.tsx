import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReportContent from "./ReportContent"

const reportsData = {
  "20260211": {
    title: "御鍬祭の開催",
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
  "20260117": {
    title: "令和8年度 初集会の開催",
    date: "2026年1月17日（土）",
    participants: "13",
    content: `新年を迎え、寒さの厳しい夜ではございましたが、令和8年度の「新田南2組 初集会」を開催いたしました。多くの組員の皆様にお集まりいただき、新年度の活動方針や役員決めなど、重要な事項について話し合いました。

開催日：2026年1月17日（土）場所：阿自賀神社 参集会館ホール

## 新体制でのスタート

当日は14名（13世帯）の方にご出席いただきました。
お忙しい時間帯にもかかわらず、足をお運びいただき誠にありがとうございました。

本年度も組員の皆様と協力しながら、より住みよい地域づくりを目指して活動してまいりますのでよろしくお願いします。

## 協議・報告事項について

新組長の河野からの挨拶に始まり、和やかながらも活発な意見交換が行われました。主な議題は以下の通りです。

*   **自治会からの報告**：会館運営の状況や、ゴミ出しマナーについての報告がありました。当組のゴミ出し状況は「優秀である」との評価をいただいております。日頃の皆様のご協力に感謝いたします。
*   **宮当番（神社当番）の決定**：くじ引きにより、本年度の各祭礼・行事の担当者が決定いたしました。
*   **組の運営について**：ゴミ集積所の管理体制（代行ルール）や、将来的な組の備品（PC等）のあり方について話し合いました。
*   **地域への要望事項**：通学路の交通安全対策（一時停止や白線）や、用水路の安全対策など、自治会や市へ提出する要望事項を取りまとめました。

特にゴミ集積所の管理については、日頃より担当者様による細やかな清掃や対応が行われていることが報告され、改めて組全体で感謝を共有する場となりました。

## 組長より一言

本日はお集まりいただき、誠にありがとうございました。

私自身、この地に居を構えて数年であり、至らぬ点も多々あるかと存じますが、皆様のお力添えをいただきながら、1年間精一杯務めさせていただきます。

本日の集会では皆様から活発なご意見をいただき、大変有意義な時間となりました。今年一年、皆様が健康で安心して暮らせる組となりますよう努めてまいりますので、ご協力のほどよろしくお願いいたします。

### 【次回の活動予定】

次回の行事予定や決定した当番表については、改めて回覧板にてお知らせいたします。`,
    images: [],
  },
}

export function generateStaticParams() {
  return [
    { id: '20260211' },
    { id: '20260117' },
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

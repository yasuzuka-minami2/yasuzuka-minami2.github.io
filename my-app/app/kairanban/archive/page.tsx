"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { kairanbanData } from "@/lib/kairanban-data"

export default function KairanbanArchivePage() {
    // データを新しい順（IDの降順）にソート
    const sortedIssues = Object.keys(kairanbanData)
        .sort((a, b) => Number(b) - Number(a))
        .map((key) => ({ id: key, ...kairanbanData[key] }))

    // 丸数字の変換関数
    const getCircleNumber = (num: number) => {
        const map = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮"]
        return map[num - 1] || num.toString()
    }

    // 配布かどうかを判定する関数
    const isDistribution = (title: string) => {
        return title.includes("配布") || title.includes("（配布）") || title.includes("【配布】")
    }

    // タイトルから「1. 」などのプレフィックスや「【配布】」などを取り除く（表示用）
    const cleanTitle = (title: string) => {
        // "1. " や "10. " などのパターンを取り除く
        return title.replace(/^\d+\.\s*/, '').replace(/^【配布】/, '').replace(/^（配布）/, '')
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="max-w-5xl mx-auto p-4 md:p-8">
                {/* ヘッダー部分 */}
                <header className="mb-8 text-center md:text-left bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
                    <div className="absolute top-6 right-6 hidden md:block">
                        <Link href="/kairanban">
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                回覧板トップへ戻る
                            </Button>
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">令和8年度 安塚町新田南2組 回覧板配布一覧</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500">
                        <span>作成日: 令和8年1月11日</span>
                        <span>最終更新日: {sortedIssues[0]?.date}</span>
                        <span className="font-medium text-slate-700">組長: 河野 良太</span>
                    </div>
                    <div className="mt-4 md:hidden">
                        <Link href="/kairanban">
                            <Button variant="outline" size="sm" className="w-full">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                回覧板トップへ戻る
                            </Button>
                        </Link>
                    </div>
                </header>

                {/* メインテーブル */}
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm md:text-base min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-800 text-white">
                                <th className="py-4 px-4 font-bold border-b border-slate-700 text-center w-24">No</th>
                                <th className="py-4 px-4 font-bold border-b border-slate-700 text-center w-32">発行日</th>
                                <th className="py-4 px-4 font-bold border-b border-slate-700 text-center w-16">No</th>
                                <th className="py-4 px-4 font-bold border-b border-slate-700 w-24">種類</th>
                                <th className="py-4 px-4 font-bold border-b border-slate-700">配布・回覧物 題目 (クリックで資料を表示)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {sortedIssues.map((issue) => (
                                issue.items.map((item, index) => {
                                    const isDist = isDistribution(item.title)
                                    const rowClass = isDist ? "bg-red-50/30 hover:bg-red-50/50" : "hover:bg-slate-50"

                                    return (
                                        <tr key={`${issue.id}-${index}`} className={rowClass}>
                                            {/* 最初のアイテムの場合のみ結合セルを表示 */}
                                            {index === 0 && (
                                                <>
                                                    <td rowSpan={issue.items.length} className="bg-slate-50 text-center font-bold border-r border-slate-200 text-slate-700 align-top pt-4">
                                                        <Link href={`/kairanban/${issue.id}`} className="text-blue-600 hover:underline block">
                                                            {issue.issueNumber}
                                                        </Link>
                                                    </td>
                                                    <td rowSpan={issue.items.length} className="bg-slate-50 font-bold border-r border-slate-200 text-slate-700 align-top pt-4 text-center">
                                                        {issue.date}
                                                    </td>
                                                </>
                                            )}

                                            <td className={`px-4 py-3 text-center text-slate-500 border-l border-slate-100 ${isDist ? 'font-bold italic text-slate-600' : ''}`}>
                                                {getCircleNumber(index + 1)}
                                            </td>

                                            <td className="px-4 py-3">
                                                {isDist ? (
                                                    <span className="bg-red-100 text-red-800 border border-red-200 text-xs px-2 py-1 rounded-full font-bold">
                                                        配布
                                                    </span>
                                                ) : (
                                                    <span className="bg-green-100 text-green-800 border border-green-200 text-xs px-2 py-1 rounded-full font-bold">
                                                        回覧
                                                    </span>
                                                )}
                                            </td>

                                            <td className="px-4 py-3 font-medium">
                                                {item.isPrivate || !item.pdfUrl ? (
                                                    <span className="text-slate-400 cursor-not-allowed" title="個人情報等のためWeb非公開">
                                                        {cleanTitle(item.title)}
                                                    </span>
                                                ) : (
                                                    <a
                                                        href={item.pdfUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={isDist ? "text-red-700 hover:underline" : "text-blue-600 hover:underline hover:text-blue-800"}
                                                    >
                                                        {cleanTitle(item.title)}
                                                    </a>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground bg-slate-100 inline-block px-4 py-2 rounded-full">
                        ※個人情報保護のため、公開していない資料もあります。詳細は組長へお問い合わせください。
                    </p>
                </div>

                <div className="mt-6 text-center text-slate-400 text-xs">
                    © 令和8年度 安塚町新田南2組 自治会管理システム
                </div>
            </div>
        </div>
    )
}

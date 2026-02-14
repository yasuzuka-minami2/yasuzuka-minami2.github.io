"use client"

import { Card } from "@/components/ui/card"
import { Book, ArrowLeft, ZoomIn, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog"

export default function LocalRulesPage() {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-8">
                    <Link href="/rules-list">
                        <Button variant="ghost" className="mb-4">
                            ← 規約一覧に戻る
                        </Button>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Book className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">新田南２組規約</h1>
                    </div>
                </div>

                <div className="space-y-8">
                    <Card className="p-6 md:p-8 text-center bg-yellow-50 border-yellow-200">
                        <p className="text-lg text-yellow-900 mb-4 font-bold">
                            令和8年度中に整備予定
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-yellow-800 mb-2">
                            探しています！組規約！
                        </h2>
                        <p className="text-yellow-700">
                            現在、過去の組規約や関連資料を探しています。<br />
                            お持ちの方がいらっしゃいましたら、組長までご連絡ください。
                        </p>
                    </Card>

                    <div className="flex justify-center">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <div className="relative cursor-pointer group hover:opacity-90 transition-opacity">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                    </div>
                                    <Image
                                        src="/rules/local-rules/Wanted!!探しています！組規約.webp"
                                        alt="Wanted!! 探しています！組規約"
                                        width={600}
                                        height={850}
                                        className="rounded-lg shadow-lg max-w-full h-auto border-4 border-yellow-100"
                                    />
                                    <p className="text-center text-sm text-muted-foreground mt-2">
                                        ※タップして拡大
                                    </p>
                                </div>
                            </DialogTrigger>
                            <DialogContent
                                className="max-w-[95vw] h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none"
                                onClick={() => setOpen(false)}
                            >
                                <DialogTitle className="sr-only">組規約募集ポスター拡大</DialogTitle>
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <Image
                                        src="/rules/local-rules/Wanted!!探しています！組規約.webp"
                                        alt="Wanted!! 探しています！組規約"
                                        fill
                                        className="object-contain"
                                        sizes="95vw"
                                        priority
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <button
                                        className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg transition-colors z-50"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setOpen(false)
                                        }}
                                    >
                                        <X className="w-8 h-8" />
                                        <span className="sr-only">閉じる</span>
                                    </button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/rules-list">
                        <Button size="lg" className="text-base px-8">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            規約一覧に戻る
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

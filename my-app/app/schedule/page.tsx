import { Card } from "@/components/ui/card"
import { CalendarDays, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="mb-4">
                            ← トップページへ戻る
                        </Button>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <CalendarDays className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">年間スケジュール</h1>
                    </div>
                </div>

                <Card className="p-4 md:p-8 overflow-hidden">
                    <div className="relative w-full h-auto aspect-[3508/2480]">
                        <a href="/schedule/2026_schedule.webp" target="_blank" rel="noopener noreferrer" className="cursor-zoom-in">
                            <Image
                                src="/schedule/2026_schedule.webp"
                                alt="令和8年度 年間スケジュール"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                            />
                        </a>
                    </div>
                </Card>
                <p className="text-center text-sm text-muted-foreground mt-2">
                    ※画像をタップすると拡大表示できます
                </p>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button size="lg" className="text-base px-8">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            トップページに戻る
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

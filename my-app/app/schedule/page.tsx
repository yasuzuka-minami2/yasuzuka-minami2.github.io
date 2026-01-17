import { Card } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

                <Card className="p-6 md:p-8 text-center min-h-[300px] flex flex-col justify-center items-center">
                    <p className="text-muted-foreground text-lg mb-4">
                        年間スケジュールの詳細は準備中です
                    </p>
                    <p className="text-sm text-muted-foreground">
                        今後の更新をお待ちください
                    </p>
                </Card>
            </div>
        </div>
    )
}

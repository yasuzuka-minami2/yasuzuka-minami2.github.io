import { Card } from "@/components/ui/card"
import { BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RulesPage() {
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
                            <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">安塚自治会規約</h1>
                    </div>
                </div>

                <Card className="p-6 md:p-8 text-center min-h-[300px] flex flex-col justify-center items-center">
                    <p className="text-muted-foreground text-lg mb-4">
                        自治会規約の詳細は準備中です
                    </p>
                    <p className="text-sm text-muted-foreground">
                        今後の更新をお待ちください
                    </p>
                </Card>

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

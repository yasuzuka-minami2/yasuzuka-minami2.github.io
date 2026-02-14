import { Card } from "@/components/ui/card"
import { Book, ArrowLeft, ZoomIn } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog"

export default function LocalRulesPage() {
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
                            <Book className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">新田南２組規約</h1>
                    </div>
                </div>

                <div className="space-y-8">
                    <Card className="p-6 md:p-8 text-center bg-yellow-50 border-yellow-200">
                        <h2 className="text-xl md:text-2xl font-bold text-yellow-800 mb-4">
                            探しています！組規約！
                        </h2>
                        <p className="text-lg text-yellow-900 mb-2 font-bold">
                            令和8年度中に整備予定。
                        </p>
                        <p className="text-yellow-700">
                            現在、過去の組規約や関連資料を探しています。<br />
                            お持ちの方がいらっしゃいましたら、組長までご連絡ください。
                        </p>
                    </Card>

                    <div className="flex justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative cursor-pointer group hover:opacity-90 transition-opacity">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                    </div>
                                    <Image
                                        src="/images/wanted_rules.png"
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
                            <DialogContent className="max-w-[95vw] h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
                                <DialogTitle className="sr-only">組規約募集ポスター拡大</DialogTitle>
                                <div className="w-full h-full flex items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
                                    <Image
                                        src="/images/wanted_rules.png"
                                        alt="Wanted!! 探しています！組規約"
                                        fill
                                        className="object-contain"
                                        sizes="95vw"
                                        priority
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

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

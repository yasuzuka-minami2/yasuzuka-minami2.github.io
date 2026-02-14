import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BookOpen, Book, ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RulesListPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-6 md:py-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/">
                            <Button variant="ghost" size="lg" className="text-base">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                トップページへ
                            </Button>
                        </Link>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">規約一覧</h1>
                        <p className="text-base md:text-lg text-muted-foreground mt-2">ご確認したい規約をお選びください</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <div className="grid grid-cols-1 gap-6">
                    {/* 安塚自治会規約 */}
                    <Link href="/rules">
                        <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <BookOpen className="h-10 w-10 text-primary" />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center justify-center sm:justify-start gap-2">
                                        安塚自治会規約
                                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        安塚町自治会全体の規約やルールです
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* 新田南２組規約 */}
                    <Link href="/local-rules">
                        <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary">
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Book className="h-10 w-10 text-primary" />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center justify-center sm:justify-start gap-2">
                                        新田南２組規約
                                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        新田南2組独自の取り決めやルールです
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button size="lg" className="text-base px-8">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            トップページに戻る
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

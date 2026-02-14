"use client"

import React, { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReportContentProps {
    content: string
    baseImagePath: string
}

export default function ReportContent({ content, baseImagePath }: ReportContentProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // マークダウンの行を解析してレンダリングする関数
    const renderContent = () => {
        const lines = content.split("\n")
        const elements: React.ReactNode[] = []
        let key = 0

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim()

            if (!line) {
                // 空行はスペーサーとして扱うか、無視する
                continue
            }

            // 見出し (##, ###)
            if (line.startsWith("### ")) {
                elements.push(
                    <h3 key={key++} className="text-xl font-bold text-foreground mt-8 mb-4">
                        {line.replace("### ", "")}
                    </h3>
                )
                continue
            }

            if (line.startsWith("## ")) {
                elements.push(
                    <h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-6 border-b pb-2">
                        {line.replace("## ", "")}
                    </h2>
                )
                continue
            }

            // 画像 (![alt](src))
            const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/)
            if (imageMatch) {
                const alt = imageMatch[1]
                const src = imageMatch[2]
                const fullSrc = src.startsWith("http") ? src : `${baseImagePath}${src}`

                elements.push(
                    <figure key={key++} className="my-8">
                        <div
                            className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage(fullSrc)}
                        >
                            <Image
                                src={fullSrc}
                                alt={alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* キャプション: (説明) の形式 */}
                        <figcaption className="text-center text-sm text-muted-foreground mt-2">
                            （{alt}）
                        </figcaption>
                    </figure>
                )
                continue
            }

            // 引用 (>)
            if (line.startsWith("> ")) {
                // 現在の行だけでなく、連続する引用行をまとめる処理が必要かもしれないが、
                // 今回の要件では単純に1行ずつ処理、または単純なpタグのスタイルで対応
                elements.push(
                    <blockquote key={key++} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                        {line.replace(/^> \*\*注記：\*\*/, "注記：").replace(/^> /, "")}
                    </blockquote>
                )
                continue
            }

            // 通常の段落
            // 次の行も通常のテキストなら改行 (<br>) を入れて繋げるなどの処理も考えられるが、
            // ここではシンプルに1行1パラグラフ、または連続するテキストをまとめる

            // 直前の要素が p タグなら結合したいところだが、今回は簡易的に
            // 行ごとに p タグで囲む（空行で区切られている前提）
            // ただし、完全に連続している行は br でつなぐ方が自然

            // 連続行処理
            let paragraphContent = [line];
            while (i + 1 < lines.length) {
                const nextLine = lines[i + 1].trim();
                // 次の行が空行、見出し、画像、引用なら終了
                if (!nextLine || nextLine.startsWith("#") || nextLine.match(/!\[(.*?)\]\((.*?)\)/) || nextLine.startsWith("> ")) {
                    break;
                }
                paragraphContent.push(nextLine);
                i++;
            }

            elements.push(
                <p key={key++} className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                    {paragraphContent.map((text, idx) => (
                        <span key={idx}>
                            {text}
                            {idx < paragraphContent.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            )
        }

        return elements
    }

    return (
        <>
            <div className="prose prose-lg max-w-none">
                {renderContent()}
            </div>

            {/* Lightbox / Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-5xl max-h-[90vh] h-full flex items-center justify-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white hover:bg-white/20 z-50 rounded-full"
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImage(null)
                            }}
                        >
                            <X className="h-8 w-8" />
                            <span className="sr-only">閉じる</span>
                        </Button>

                        <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

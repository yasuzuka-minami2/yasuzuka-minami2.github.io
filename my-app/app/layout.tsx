import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  Zen_Maru_Gothic,
  M_PLUS_Rounded_1c,
  Zen_Kaku_Gothic_New,
  Kiwi_Maru,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zen-maru",
})

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mplus-rounded",
})

const zenKakuGothic = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zen-kaku",
})

const kiwiMaru = Kiwi_Maru({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kiwi",
})

export const metadata: Metadata = {
  title: "安塚町自治会 新田南2組 | デジタル回覧板",
  description:
    "三重県鈴鹿市安塚町自治会 新田南2組のデジタル回覧板です。お知らせ、回覧板、活動報告などをご覧いただけます。",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = "G-3VWPWX7FKK"

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {gaId && (
          <>
            <Script strategy="beforeInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <Script id="google-analytics" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} ${zenMaruGothic.variable} ${mPlusRounded.variable} ${zenKakuGothic.variable} ${kiwiMaru.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

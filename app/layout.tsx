import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArsPaper - Knowledge Sharing Platform",
  description:
    "The platform where research becomes accessible. Discover, discuss, and improve PhD papers and scientific research.",
  generator: "R Firm",
  icons: {
    icon: [
      {
        url: "/ArsPaper.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ArsPaper.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/ArsPaper.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/ArsPaper.svg",
  },
}

import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

import "./globals.css";
import { Noto_Serif_JP } from "next/font/google";
import type { Metadata } from "next";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "株式会社ZEN | 名刺代わりのホームページ制作",
  description:
    "個人経営の飲食店向けに、信頼性と来店率を高める“名刺代わり”のホームページを制作します。初期費用5万円・月額1万円から。2年契約・LINE更新サポート付き。",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // public配下に用意する場合
  },
  metadataBase: new URL("https://zen-hp-puce.vercel.app/"), // 実際のURLに変更
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSerif.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" /> {/* ダークネイビーカラー */}
        <link rel="canonical" href="https://zen-hp-puce.vercel.app/" />
      </head>
      <body>{children}</body>
    </html>
  );
}

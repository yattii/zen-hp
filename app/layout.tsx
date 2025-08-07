import "./globals.css";
import { Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "700"],
});

export const metadata = {
  title: "名刺代わりのホームページ制作",
  description: "中小飲食店向けの格安Webサイト制作",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSerif.variable}>
      <body>{children}</body>
    </html>
  );
}

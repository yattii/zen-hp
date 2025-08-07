import "./globals.css";
import { Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "700"],
});

export const metadata = {
  title: "株式会社ZEN",
  description: "名刺代わりのホームページ制作",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSerif.variable}>
      <body>{children}</body>
    </html>
  );
}

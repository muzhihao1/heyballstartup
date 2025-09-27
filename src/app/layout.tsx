import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "耶氏台球赛事品牌官网",
  description:
    "耶氏台球赛事运营中心——面向赞助商与球房的专业赛事品牌服务平台，了解赛事亮点、历届战报与合作方案。",
  openGraph: {
    title: "耶氏台球赛事品牌官网",
    description:
      "耶氏台球赛事运营中心，展示赛事亮点、战报与合作价值，助力赞助商与球房共赢。",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    title: "耶氏台球赛事品牌官网",
    description:
      "耶氏台球赛事运营中心，展示赛事亮点、战报与合作价值，助力赞助商与球房共赢。",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Letpang Studio — 인디 게임 스튜디오",
    template: "%s | Letpang Studio",
  },
  description: "렛팡 스튜디오는 즐거운 한자탐험, 파스텔 오셀로 등 재미있고 감성적인 모바일 게임을 만드는 인디 게임 스튜디오입니다.",
  keywords: ["렛팡", "Letpang", "인디 게임", "게임 스튜디오", "즐거운 한자탐험", "파스텔 오셀로", "색감 능력 테스트", "모바일 게임"],
  metadataBase: new URL("https://www.letpang.com"),
  openGraph: {
    title: "Letpang Studio — 인디 게임 스튜디오",
    description: "렛팡 스튜디오는 즐거운 한자탐험, 파스텔 오셀로 등 재미있고 감성적인 모바일 게임을 만드는 인디 게임 스튜디오입니다.",
    url: "https://www.letpang.com",
    siteName: "Letpang Studio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Letpang Studio — 인디 게임 스튜디오",
    description: "렛팡 스튜디오는 즐거운 한자탐험, 파스텔 오셀로 등 재미있고 감성적인 모바일 게임을 만드는 인디 게임 스튜디오입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.letpang.com",
  },
  verification: {
    other: {
      "naver-site-verification": ["b72b48c691a43c63b14581fe4da34b1f871e6a8f"],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="header">
          <div className="container">
            <SiteHeader />
          </div>
        </div>

        <main className="container main">{children}</main>

        <div className="footer">
          <div className="container">
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

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
  description: "렛팡 스튜디오는 한자팝, 왁뿌팝 등 감성적인 캐주얼 모바일 게임을 만드는 인디 게임 스튜디오입니다. iOS·Android 무료 게임 다운로드.",
  keywords: ["렛팡", "Letpang", "인디 게임", "게임 스튜디오", "한자팝", "한자", "한자 학습 게임", "어린이 한자", "왁뿌팝", "Color Sense: 고양이 색 찾기", "캐주얼 게임", "모바일 게임", "무료 게임"],
  metadataBase: new URL("https://www.letpang.com"),
  openGraph: {
    title: "Letpang Studio — 인디 게임 스튜디오",
    description: "렛팡 스튜디오는 한자팝, 왁뿌팝 등 감성적인 캐주얼 모바일 게임을 만드는 인디 게임 스튜디오입니다.",
    url: "https://www.letpang.com",
    siteName: "Letpang Studio",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: SITE.games.hanja.iconUrl,
        width: 512,
        height: 512,
        alt: "한자팝 아이콘",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letpang Studio — 인디 게임 스튜디오",
    description: "렛팡 스튜디오는 한자팝, 왁뿌팝 등 감성적인 캐주얼 모바일 게임을 만드는 인디 게임 스튜디오입니다.",
    images: [SITE.games.hanja.iconUrl],
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8731380411071344"
          crossOrigin="anonymous"
        />
      </head>
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

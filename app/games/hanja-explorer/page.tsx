// app/games/hanja-explorer/page.tsx
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const game = SITE.games.hanja;
const title = `${game.titleKr} — 한자 학습 게임`;
const description = `${game.descriptionKr}. iOS·Android에서 만나보세요.`;

export const metadata = {
  title,
  description,
  keywords: [game.titleKr, game.title, "한자 학습 게임", "어린이 한자", "한자 앱", "한자 공부", "한자 게임"],
  openGraph: {
    title,
    description,
    images: [{ url: game.iconUrl, width: 512, height: 512, alt: `${game.titleKr} 아이콘` }],
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function HanjaExplorerPage() {
  const game = SITE.games.hanja;

  const features = [
    {
      titleKr: "하루 5분 학습 루틴",
      descKr: "오늘의 한자를 배우고 단어 퀴즈와 미니게임으로 복습해요.",
      icon: "🎯",
    },
    {
      titleKr: "급수별 시험 대비",
      descKr: "8급부터 6급까지, 급수별 학습과 모의고사로 차근차근 준비해요.",
      icon: "🎮",
    },
    {
      titleKr: "쓰고 복습하는 한자",
      descKr: "획순 쓰기와 오답 단어장으로 헷갈리는 한자를 다시 익혀요.",
      icon: "📱",
    },
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <Image src={game.iconUrl} alt={`${game.titleKr} 아이콘`} width={96} height={96} className="game-icon-img" />
        <h1 className="page-title">{game.titleKr}</h1>
        <p className="page-subtitle">{game.descriptionKr}</p>
      </header>

      {/* Game Intro */}
      <section className="content-card">
        <h2>About the Game</h2>
        <div style={{ marginBottom: 20 }}>
          <span className="lang-tag">EN</span>
          <p>{game.description}</p>
        </div>
        <div>
          <span className="lang-tag">KR</span>
          <p>
            {game.titleKr}은 매일 짧은 학습으로 한자를 익히는 급수별 한자 학습 앱입니다.
            한자 카드와 획순 쓰기, 단어 퀴즈와 미니게임으로 복습하고 8급부터 6급까지 시험을 준비해 보세요.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <div className="features" style={{ marginBottom: 40 }}>
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.titleKr}</h3>
            <p className="feature-desc">{f.descKr}</p>
          </div>
        ))}
      </div>

      {/* Download Section */}
      <section className="contact-section" style={{ marginBottom: 40 }}>
        <div className="contact-card">
          <h2>Download Now</h2>
          <p>iOS와 Android에서 한자팝을 만나보세요.</p>
          <div className="hero-buttons">
            <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>🍎</span> App Store
            </a>
            <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>🤖</span> Play Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 40 }}>
        <Link href={game.privacyPath} className="back-link" style={{ margin: 0 }}>
          <span>🔒</span> Privacy Policy
        </Link>
        <Link href="/" className="back-link" style={{ margin: 0 }}>
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}

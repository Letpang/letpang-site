// app/games/hanja-explorer/page.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `${SITE.games.hanja.title} - ${SITE.name}`,
  description: SITE.games.hanja.description,
};

export default function HanjaExplorerPage() {
  const game = SITE.games.hanja;

  const features = [
    {
      title: "Space Exploration",
      titleKr: "우주 탐험 테마",
      desc: "Travel through planets while learning new Hanja characters.",
      descKr: "행성을 여행하며 새로운 한자를 재미있게 학습합니다.",
      icon: "🚀",
    },
    {
      title: "Interactive Cards",
      titleKr: "인터랙티브 카드",
      desc: "Flashcards with clear audio and visual associations.",
      descKr: "선명한 오디오와 시각 자료를 통한 효과적인 암기.",
      icon: "🎴",
    },
    {
      title: "Gamified Learning",
      titleKr: "게임화된 학습",
      desc: "Unlock new stages and collect stickers as you progress.",
      descKr: "학습 진행에 따라 새로운 스테이지와 스티커를 획득하세요.",
      icon: "✨",
    },
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">🛸</div>
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
            &quot;즐거운 한자탐험&quot;은 어린이들이 한자를 더 쉽고 재미있게 배울 수 있도록 설계된 교육용 게임입니다. 
            우주 탐험이라는 테마를 통해 아이들이 호기심을 유지하며 자연스럽게 한자와 친숙해질 수 있습니다.
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

      {/* Download Section (Placeholder) */}
      <section className="contact-section" style={{ marginBottom: 40 }}>
        <div className="contact-card">
          <h2>Download Now</h2>
          <p>Coming soon to iOS and Android</p>
          <div className="hero-buttons">
            <div className="btn btn-secondary" style={{ cursor: "default", opacity: 0.7 }}>
              <span>🍎</span> App Store
            </div>
            <div className="btn btn-secondary" style={{ cursor: "default", opacity: 0.7 }}>
              <span>🤖</span> Play Store
            </div>
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

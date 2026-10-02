// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="home-container">

      {/* ── Hero: split layout ── */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-badge">🎮 Indie Game Studio</div>
          <h1 className="hero-title">
            Small Studio,<br />
            <span className="hero-title-accent">Big Hearts</span>
          </h1>
          <p className="hero-subtitle">
            렛팡 스튜디오는 일상에 배움과 즐거움을 더하는 모바일 게임과 앱을 만듭니다.
            감성적인 디자인과 따뜻한 경험을 게임에 담아, 일상 속 작은 즐거움을 선물합니다.
          </p>
          <div className="hero-buttons">
            <Link href={SITE.games.hanja.path} className="btn btn-primary">
              <span>한자팝 만나보기</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/about" className="btn btn-outline">
              <span>스튜디오 소개</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-game-grid" aria-label="Letpang Studio 출시 게임">
            {[SITE.games.hanja, SITE.games.wakppop, SITE.games.colorSense, SITE.games.hangulStreet].map(game => (
              <div className="hero-game-tile" key={game.id}>
                <Image src={game.iconUrl} alt={`${game.titleKr} 아이콘`} width={180} height={180} priority />
                <span>{game.titleKr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Games ── */}
      <section className="games-section">
        <div className="section-header">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Our Games</h2>
        </div>

        <div className="featured-row released-games">
          {[SITE.games.hanja, SITE.games.wakppop, SITE.games.colorSense, SITE.games.hangulStreet].map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="section-header" style={{ marginTop: 40 }}>
          <p className="section-eyebrow">Coming Soon</p>
          <h2 className="section-title">출시 예정</h2>
        </div>
        <div className="featured-row">
          <div className="game-featured-card game-featured-card--hangulpop">
            <span className="badge badge-soon">출시 예정</span>
            <div className="game-featured-header">
              <div className="game-featured-icon game-featured-icon--hangulpop" aria-hidden="true">ㅎ</div>
              <h3 className="game-featured-title">{SITE.games.hangulPop.titleKr}</h3>
            </div>
            <p className="game-featured-desc">{SITE.games.hangulPop.descriptionKr}</p>
            <div className="games-buttons"><span className="btn-store btn-coming-soon">출시 준비 중</span></div>
          </div>
        </div>
      </section>

      {/* ── Studio Values ── */}
      <section className="values-section">
        <div className="section-header">
          <p className="section-eyebrow">What We Believe</p>
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="values-grid">
          <div className="value-card value-card--pink">
            <div className="value-card-header">
              <Image src="/icons/casual-games.png" alt="Casual Games" width={48} height={48} className="value-icon-img" />
              <h3>Casual Games</h3>
            </div>
            <p>복잡한 조작 없이도 누구나 바로 즐길 수 있는 게임을 추구합니다. 5살 아이부터 70대 어르신까지, 모두를 위한 즐거움을 만듭니다.</p>
          </div>
          <div className="value-card value-card--purple">
            <div className="value-card-header">
              <Image src="/icons/mobile-first.png" alt="Mobile First" width={48} height={48} className="value-icon-img" />
              <h3>Mobile First</h3>
            </div>
            <p>언제 어디서나 꺼내 즐길 수 있도록 모바일에 최적화합니다. iOS와 Android 모두에서 매끄러운 경험을 제공합니다.</p>
          </div>
          <div className="value-card value-card--yellow">
            <div className="value-card-header">
              <Image src="/icons/indie-spirit.png" alt="Indie Spirit" width={48} height={48} className="value-icon-img" />
              <h3>Indie Spirit</h3>
            </div>
            <p>대형 스튜디오가 만들지 않는, 작지만 특별한 게임을 만듭니다. 하나하나에 정성과 개성을 담아 플레이어에게 따뜻한 경험을 전합니다.</p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Let&apos;s Create<br /><span>Something Special</span></h2>
            <p className="cta-banner-desc">제안, 피드백, 협업 문의 등 어떤 이야기든 환영합니다.</p>
            <a href={`mailto:${SITE.email}`} className="btn btn-primary btn-lg">
              <span>📧</span>
              <span>Get in Touch</span>
            </a>
          </div>
          <div className="cta-banner-deco" aria-hidden="true">
            <Image src={SITE.games.hanja.iconUrl} alt={`${SITE.games.hanja.titleKr} 아이콘`} width={360} height={360} className="cta-mockup-img" />
          </div>
        </div>
      </section>

    </div>
  );
}

// app/page.tsx
import Image from "next/image";
import Link from "next/link";
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
            렛팡 스튜디오는 누구나 쉽게 즐길 수 있는 캐주얼 모바일 게임을 만들고 있습니다.
            감성적인 디자인과 따뜻한 경험을 게임에 담아, 일상 속 작은 즐거움을 선물합니다.
          </p>
          <div className="hero-buttons">
            <Link href={SITE.games.hanja.path} className="btn btn-primary">
              <span>신작 보러 가기</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/about" className="btn btn-outline">
              <span>스튜디오 소개</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/hero-illustration.png"
            alt="렛팡 스튜디오 게임 일러스트레이션"
            width={520}
            height={520}
            className="hero-img"
            priority
          />
        </div>
      </section>

      {/* ── Our Games ── */}
      <section className="games-section">
        <div className="section-header">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Our Games</h2>
        </div>

        {/* 한자탐험 — Featured big card */}
        <Link href={SITE.games.hanja.path} className="game-featured-card">
          <div className="game-featured-icon">
            <Image
              src="/icons/hanja-explorer.png"
              alt={SITE.games.hanja.titleKr}
              width={100}
              height={100}
              className="game-icon-img"
            />
          </div>
          <div className="game-featured-body">
            <span className="badge badge-new">✨ New Release</span>
            <h3 className="game-featured-title">{SITE.games.hanja.titleKr}</h3>
            <p className="game-featured-desc">{SITE.games.hanja.descriptionKr}</p>
            <div className="game-cta">
              <span>자세히 보기</span>
              <span className="cta-arrow">→</span>
            </div>
          </div>
        </Link>

        {/* 기존 게임 2종 */}
        <div className="games-row">
          <a
            href={SITE.games.pastelOthello.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card"
          >
            <div className="game-card-icon">
              <Image
                src="/icons/pastel-othello.png"
                alt={SITE.games.pastelOthello.titleKr}
                width={72}
                height={72}
                className="game-icon-img"
              />
            </div>
            <div className="game-card-body">
              <span className="badge badge-store">Google Play</span>
              <h3 className="game-card-title">{SITE.games.pastelOthello.titleKr}</h3>
              <p className="game-card-desc">{SITE.games.pastelOthello.descriptionKr}</p>
              <div className="game-cta">
                <span>다운로드 하기</span>
                <span className="cta-arrow">→</span>
              </div>
            </div>
          </a>

          <a
            href={SITE.games.colorSense.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card"
          >
            <div className="game-card-icon">
              <Image
                src="/icons/color-sense.png"
                alt={SITE.games.colorSense.titleKr}
                width={72}
                height={72}
                className="game-icon-img"
              />
            </div>
            <div className="game-card-body">
              <span className="badge badge-store">Google Play</span>
              <h3 className="game-card-title">{SITE.games.colorSense.titleKr}</h3>
              <p className="game-card-desc">{SITE.games.colorSense.descriptionKr}</p>
              <div className="game-cta">
                <span>다운로드 하기</span>
                <span className="cta-arrow">→</span>
              </div>
            </div>
          </a>
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
            <Image src="/cta-mockup.png" alt="한자탐험 게임 목업" width={360} height={360} className="cta-mockup-img" />
          </div>
        </div>
      </section>

    </div>
  );
}
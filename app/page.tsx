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

        {/* 한자탐험 + 한글초성 — Featured 2종 */}
        <div className="featured-row">
          <div className="game-featured-card">
            <Link href={SITE.games.hanja.path} className="game-featured-icon">
              <Image
                src="/icons/hanja-explorer.png"
                alt={SITE.games.hanja.titleKr}
                width={100}
                height={100}
                className="game-icon-img"
              />
            </Link>
            <div className="game-featured-body">
              <div className="flex items-center gap-2">
                <span className="badge badge-new">✨ New Release</span>
              </div>
              <h3 className="game-featured-title">{SITE.games.hanja.titleKr}</h3>
              <p className="game-featured-desc">{SITE.games.hanja.descriptionKr}</p>
              <div className="games-buttons mt-4">
                {SITE.games.hanja.playStoreUrl && (
                  <a href={SITE.games.hanja.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-google">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5C4.22,2.5 4.44,2.58 4.61,2.72L19.22,11.22C19.67,11.48 19.82,12.06 19.56,12.51C19.49,12.64 19.37,12.75 19.22,12.83L4.61,21.33C4.14,21.6 3.53,21.43 3.26,20.96C3.12,20.73 3.03,20.46 3.03,20.19V20.5H3Z"/></svg>
                    Google Play
                  </a>
                )}
                {SITE.games.hanja.appStoreUrl && (
                  <a href={SITE.games.hanja.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-apple">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.23 1.72-1.15 0-1.52-.71-2.88-.71-1.35 0-1.78.71-2.85.71-1.11 0-2.32-1.02-3.29-1.99C2.81 18.02 1.41 14.54 1.41 11.23c0-3.41 2.1-5.18 4.19-5.18 1.11 0 2.16.43 2.76.43.6 0 1.95-.53 3.32-.53 1.43 0 2.7.53 3.53 1.58-2.6 1.5-2.18 5 1.13 6.1-.73 1.83-1.68 3.65-3.29 6.65zM11.83 5.48c0-2.3 1.88-4.23 4.23-4.23.18 0 .36.01.53.05-.18 2.54-2.22 4.67-4.76 4.67-.18 0-.36-.01-.53-.05.18-.18.35-.33.53-.44z"/></svg>
                    App Store
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="game-featured-card">
            <a href={SITE.games.hangulStreet.playStoreUrl} target="_blank" rel="noopener noreferrer" className="game-featured-icon">
              <Image
                src={SITE.games.hangulStreet.iconUrl}
                alt={SITE.games.hangulStreet.titleKr}
                width={100}
                height={100}
                className="game-icon-img"
              />
            </a>
            <div className="game-featured-body">
              <div className="flex items-center gap-2">
                <span className="badge badge-new">✨ New Release</span>
              </div>
              <h3 className="game-featured-title">{SITE.games.hangulStreet.titleKr}</h3>
              <p className="game-featured-desc">{SITE.games.hangulStreet.descriptionKr}</p>
              <div className="games-buttons mt-4">
                {SITE.games.hangulStreet.playStoreUrl && (
                  <a href={SITE.games.hangulStreet.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-google">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5C4.22,2.5 4.44,2.58 4.61,2.72L19.22,11.22C19.67,11.48 19.82,12.06 19.56,12.51C19.49,12.64 19.37,12.75 19.22,12.83L4.61,21.33C4.14,21.6 3.53,21.43 3.26,20.96C3.12,20.73 3.03,20.46 3.03,20.19V20.5H3Z"/></svg>
                    Google Play
                  </a>
                )}
                {SITE.games.hangulStreet.appStoreUrl && (
                  <a href={SITE.games.hangulStreet.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-apple">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.23 1.72-1.15 0-1.52-.71-2.88-.71-1.35 0-1.78.71-2.85.71-1.11 0-2.32-1.02-3.29-1.99C2.81 18.02 1.41 14.54 1.41 11.23c0-3.41 2.1-5.18 4.19-5.18 1.11 0 2.16.43 2.76.43.6 0 1.95-.53 3.32-.53 1.43 0 2.7.53 3.53 1.58-2.6 1.5-2.18 5 1.13 6.1-.73 1.83-1.68 3.65-3.29 6.65zM11.83 5.48c0-2.3 1.88-4.23 4.23-4.23.18 0 .36.01.53.05-.18 2.54-2.22 4.67-4.76 4.67-.18 0-.36-.01-.53-.05.18-.18.35-.33.53-.44z"/></svg>
                    App Store
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="game-featured-card">
            <a href={SITE.games.hangulChosung.playUrl} target="_blank" rel="noopener noreferrer" className="game-featured-icon">
              <Image
                src="/icons/hangul-chosung.png"
                alt={SITE.games.hangulChosung.titleKr}
                width={100}
                height={100}
                className="game-icon-img"
              />
            </a>
            <div className="game-featured-body">
              <div className="flex items-center gap-2">
                <span className="badge badge-new">✨ New Release</span>
              </div>
              <h3 className="game-featured-title">{SITE.games.hangulChosung.titleKr}</h3>
              <p className="game-featured-desc">{SITE.games.hangulChosung.descriptionKr}</p>
              <div className="games-buttons mt-4">
                {SITE.games.hangulChosung.playStoreUrl && (
                  <a href={SITE.games.hangulChosung.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-google">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5C4.22,2.5 4.44,2.58 4.61,2.72L19.22,11.22C19.67,11.48 19.82,12.06 19.56,12.51C19.49,12.64 19.37,12.75 19.22,12.83L4.61,21.33C4.14,21.6 3.53,21.43 3.26,20.96C3.12,20.73 3.03,20.46 3.03,20.19V20.5H3Z"/></svg>
                    Google Play
                  </a>
                )}
                {SITE.games.hangulChosung.appStoreUrl && (
                  <a href={SITE.games.hangulChosung.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-apple">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.23 1.72-1.15 0-1.52-.71-2.88-.71-1.35 0-1.78.71-2.85.71-1.11 0-2.32-1.02-3.29-1.99C2.81 18.02 1.41 14.54 1.41 11.23c0-3.41 2.1-5.18 4.19-5.18 1.11 0 2.16.43 2.76.43.6 0 1.95-.53 3.32-.53 1.43 0 2.7.53 3.53 1.58-2.6 1.5-2.18 5 1.13 6.1-.73 1.83-1.68 3.65-3.29 6.65zM11.83 5.48c0-2.3 1.88-4.23 4.23-4.23.18 0 .36.01.53.05-.18 2.54-2.22 4.67-4.76 4.67-.18 0-.36-.01-.53-.05.18-.18.35-.33.53-.44z"/></svg>
                    App Store
                  </a>
                )}
                {SITE.games.hangulChosung.playUrl && (
                  <a href={SITE.games.hangulChosung.playUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-web">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.05a15.6 15.6 0 00-1.31-5.61A8.03 8.03 0 0119.93 11zM12 4.06c.86 1.16 1.94 3.16 2.31 6.94H9.69c.37-3.78 1.45-5.78 2.31-6.94zM9.69 13h4.62c-.37 3.78-1.45 5.78-2.31 6.94-.86-1.16-1.94-3.16-2.31-6.94zM8.43 5.39A15.6 15.6 0 007.12 11H4.07a8.03 8.03 0 014.36-5.61zM4.07 13h3.05a15.6 15.6 0 001.31 5.61A8.03 8.03 0 014.07 13zm11.5 5.61A15.6 15.6 0 0016.88 13h3.05a8.03 8.03 0 01-4.36 5.61z"/></svg>
                    웹에서 플레이
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 기존 게임 2종 */}
        <div className="games-row">
          <div className="game-card">
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
              <h3 className="game-card-title">{SITE.games.pastelOthello.titleKr}</h3>
              <p className="game-card-desc">{SITE.games.pastelOthello.descriptionKr}</p>
              <div className="games-buttons">
                <a href={SITE.games.pastelOthello.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-google">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5C4.22,2.5 4.44,2.58 4.61,2.72L19.22,11.22C19.67,11.48 19.82,12.06 19.56,12.51C19.49,12.64 19.37,12.75 19.22,12.83L4.61,21.33C4.14,21.6 3.53,21.43 3.26,20.96C3.12,20.73 3.03,20.46 3.03,20.19V20.5H3Z"/></svg>
                  Google Play
                </a>
                {SITE.games.pastelOthello.appStoreUrl && (
                  <a href={SITE.games.pastelOthello.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-apple">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.23 1.72-1.15 0-1.52-.71-2.88-.71-1.35 0-1.78.71-2.85.71-1.11 0-2.32-1.02-3.29-1.99C2.81 18.02 1.41 14.54 1.41 11.23c0-3.41 2.1-5.18 4.19-5.18 1.11 0 2.16.43 2.76.43.6 0 1.95-.53 3.32-.53 1.43 0 2.7.53 3.53 1.58-2.6 1.5-2.18 5 1.13 6.1-.73 1.83-1.68 3.65-3.29 6.65zM11.83 5.48c0-2.3 1.88-4.23 4.23-4.23.18 0 .36.01.53.05-.18 2.54-2.22 4.67-4.76 4.67-.18 0-.36-.01-.53-.05.18-.18.35-.33.53-.44z"/></svg>
                    App Store
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="game-card">
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
              <h3 className="game-card-title">{SITE.games.colorSense.titleKr}</h3>
              <p className="game-card-desc">{SITE.games.colorSense.descriptionKr}</p>
              <div className="games-buttons">
                <a href={SITE.games.colorSense.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-google">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5C4.22,2.5 4.44,2.58 4.61,2.72L19.22,11.22C19.67,11.48 19.82,12.06 19.56,12.51C19.49,12.64 19.37,12.75 19.22,12.83L4.61,21.33C4.14,21.6 3.53,21.43 3.26,20.96C3.12,20.73 3.03,20.46 3.03,20.19V20.5H3Z"/></svg>
                  Google Play
                </a>
                {SITE.games.colorSense.appStoreUrl && (
                  <a href={SITE.games.colorSense.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-apple">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.23 1.72-1.15 0-1.52-.71-2.88-.71-1.35 0-1.78.71-2.85.71-1.11 0-2.32-1.02-3.29-1.99C2.81 18.02 1.41 14.54 1.41 11.23c0-3.41 2.1-5.18 4.19-5.18 1.11 0 2.16.43 2.76.43.6 0 1.95-.53 3.32-.53 1.43 0 2.7.53 3.53 1.58-2.6 1.5-2.18 5 1.13 6.1-.73 1.83-1.68 3.65-3.29 6.65zM11.83 5.48c0-2.3 1.88-4.23 4.23-4.23.18 0 .36.01.53.05-.18 2.54-2.22 4.67-4.76 4.67-.18 0-.36-.01-.53-.05.18-.18.35-.33.53-.44z"/></svg>
                    App Store
                  </a>
                )}
              </div>
            </div>
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
            <Image src="/cta-mockup.png" alt="한자탐험 게임 목업" width={360} height={360} className="cta-mockup-img" />
          </div>
        </div>
      </section>

    </div>
  );
}
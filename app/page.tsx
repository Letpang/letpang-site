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
            Fun Games,<br />
            <span className="hero-title-accent">Big Smiles</span>
          </h1>
          <p className="hero-subtitle">
            We build and publish delightful indie games for iOS and Android.
            Creating fun experiences, one game at a time.
          </p>
          <div className="hero-buttons">
            <Link href={SITE.games.hanja.path} className="btn btn-primary">
              <span>신작 보기</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/about" className="btn btn-outline">
              <span>About Us</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/hero-illustration.png"
            alt="Letpang Studio Games Illustration"
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
          <p className="section-eyebrow">Our Portfolio</p>
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
                <span>Play Store에서 보기</span>
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
                <span>Play Store에서 보기</span>
                <span className="cta-arrow">→</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── Studio Values ── */}
      <section className="values-section">
        <div className="section-header">
          <p className="section-eyebrow">What we do</p>
          <h2 className="section-title">Our Studio</h2>
        </div>
        <div className="values-grid">
          <div className="value-card value-card--pink">
            <span className="value-icon">🎯</span>
            <h3>Casual Games</h3>
            <p>Fun and accessible games for everyone</p>
          </div>
          <div className="value-card value-card--purple">
            <span className="value-icon">📱</span>
            <h3>Mobile First</h3>
            <p>Optimized for iOS and Android</p>
          </div>
          <div className="value-card value-card--yellow">
            <span className="value-icon">✨</span>
            <h3>Indie Spirit</h3>
            <p>Crafted with passion and creativity</p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Let&apos;s make something<br /><span>amazing together</span></h2>
            <a href={`mailto:${SITE.email}`} className="btn btn-primary btn-lg">
              <span>📧</span>
              <span>Get in Touch</span>
            </a>
          </div>
          <div className="cta-banner-deco" aria-hidden="true">🚀</div>
        </div>
      </section>

    </div>
  );
}
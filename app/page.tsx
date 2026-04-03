// app/page.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const features = [
    {
      icon: "🎯",
      title: "Casual Games",
      desc: "Fun and accessible games for everyone",
    },
    {
      icon: "📱",
      title: "Mobile First",
      desc: "Optimized for iOS and Android",
    },
    {
      icon: "✨",
      title: "Indie Spirit",
      desc: "Crafted with passion and creativity",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">🎮 Indie Game Studio</div>
        <h1 className="hero-title">{SITE.name}</h1>
        <p className="hero-subtitle">
          We build and publish delightful indie games for iOS and Android.
          <br />
          Creating fun experiences, one game at a time.
        </p>
        <div className="hero-buttons">
          <Link href={SITE.games.hanja.path} className="btn btn-primary">
            <span>{SITE.games.hanja.titleKr} 보기</span>
            <span>→</span>
          </Link>
          <a href="/explore/" className="btn btn-secondary">
            <span>Explore (3D 갤러리)</span>
          </a>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-games-section">
        <h2 className="section-title">Featured Games</h2>
        <div className="games-grid">
          <Link href={SITE.games.hanja.path} className="game-promo-card">
            <div className="game-promo-icon">🛸</div>
            <div className="game-promo-content">
              <span className="game-badge">New Release</span>
              <h3>{SITE.games.hanja.titleKr}</h3>
              <p>{SITE.games.hanja.descriptionKr}</p>
              <div className="game-promo-footer">
                <span>Learn More</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h2 className="section-title">Quick Links</h2>
        <div className="quick-links-grid">
          <a href="/explore/" className="quick-link-card">
            <span className="quick-link-icon">🖼️</span>
            <div>
              <h3>Explore</h3>
              <p>View the 3D Image Collage</p>
            </div>
            <span className="arrow">→</span>
          </a>
          <Link href="/about" className="quick-link-card">
            <span className="quick-link-icon">👋</span>
            <div>
              <h3>About</h3>
              <p>Learn more about our studio</p>
            </div>
            <span className="arrow">→</span>
          </Link>
          <Link href="/support" className="quick-link-card">
            <span className="quick-link-icon">💬</span>
            <div>
              <h3>Support</h3>
              <p>Get help with our apps</p>
            </div>
            <span className="arrow">→</span>
          </Link>
          <Link href="/privacy" className="quick-link-card">
            <span className="quick-link-icon">🔒</span>
            <div>
              <h3>Privacy Policy</h3>
              <p>How we handle your data</p>
            </div>
            <span className="arrow">→</span>
          </Link>
          <Link href="/terms" className="quick-link-card">
            <span className="quick-link-icon">📜</span>
            <div>
              <h3>Terms of Use</h3>
              <p>Service usage guidelines</p>
            </div>
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p>Have questions? We&apos;d love to hear from you.</p>
          <a href={`mailto:${SITE.email}`} className="btn btn-primary">
            <span>📧</span>
            <span>{SITE.email}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
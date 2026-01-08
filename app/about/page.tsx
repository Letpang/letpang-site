import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">👋</div>
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">렛팡 스튜디오 소개</p>
      </header>

      <div className="content-card">
        <h2>Who We Are</h2>
        <p>
          <span className="lang-tag">EN</span>
          Letpang Studio is an independent game studio focused on building delightful mobile games for iOS and Android.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          렛팡 스튜디오는 iOS/Android용 모바일 게임을 개발하는 인디 게임 스튜디오입니다.
        </p>
      </div>

      <div className="content-card">
        <h2>What We Do</h2>
        <p>
          <span className="lang-tag">EN</span>
          We design and develop casual games and interactive experiences that bring joy to players around the world.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          캐주얼 게임 및 인터랙티브 콘텐츠를 기획·개발하여 전 세계 플레이어들에게 즐거움을 선사합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>Our Mission</h2>
        <p>
          <span className="lang-tag">EN</span>
          To create fun, accessible games that anyone can enjoy, crafted with passion and indie spirit.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          누구나 즐길 수 있는 재미있고 접근하기 쉬운 게임을 열정과 인디 정신으로 만들어갑니다.
        </p>
      </div>

      <div className="content-card">
        <h2>Contact Us</h2>
        <p>
          <span className="lang-tag">EN</span>
          For help with our apps or games, contact us at{" "}
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          앱/게임 관련 문의는{" "}
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>으로 연락 주세요.
        </p>
      </div>

      <Link href="/" className="back-link">
        <span>←</span>
        <span>Back to Home</span>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">💬</div>
        <h1 className="page-title">Support</h1>
        <p className="page-subtitle">고객 지원</p>
      </header>

      <div className="content-card">
        <h2>Contact Us</h2>
        <p>
          <span className="lang-tag">EN</span>
          <strong>Support Email:</strong>{" "}
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>
        </p>
        <p>
          <span className="lang-tag">EN</span>
          <strong>Business Inquiries:</strong>{" "}
          <a href="mailto:biz@letpang.com">biz@letpang.com</a>
        </p>
      </div>

      <div className="content-card">
        <h2>Response Time</h2>
        <p>
          <span className="lang-tag">EN</span>
          We usually respond within 2–3 business days.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          보통 영업일 기준 2–3일 내 답변드립니다.
        </p>
      </div>

      <div className="content-card">
        <h2>What to Include</h2>
        <p>
          <span className="lang-tag">EN</span>
          When contacting us, please include:
        </p>
        <ul>
          <li>App/Game name</li>
          <li>Device model (e.g., iPhone 15, Galaxy S24)</li>
          <li>OS version (e.g., iOS 17.2, Android 14)</li>
          <li>Short description of the issue</li>
          <li>Screenshots if possible</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          <span className="lang-tag">KR</span>
          문의 시 함께 알려주시면 좋아요:
        </p>
        <ul>
          <li>앱/게임명</li>
          <li>기기 모델</li>
          <li>OS 버전</li>
          <li>문제 상황 설명 (가능하면 스크린샷)</li>
        </ul>
      </div>

      <Link href="/" className="back-link">
        <span>←</span>
        <span>Back to Home</span>
      </Link>
    </div>
  );
}

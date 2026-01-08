import Link from "next/link";

export default function PrivacyPage() {
  const effectiveDate = "2026-01-07";

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">🔒</div>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-subtitle">개인정보 처리방침 · Effective: {effectiveDate}</p>
      </header>

      <div className="content-card">
        <h2>Overview</h2>
        <p>
          <span className="lang-tag">EN</span>
          Letpang Studio (&quot;we&quot;) respects your privacy. This policy explains how we handle information when you use our website and mobile games/apps.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          렛팡 스튜디오(&quot;회사&quot;)는 이용자의 개인정보를 소중히 보호합니다. 본 방침은 웹사이트 및 모바일 앱/게임 이용 시 정보 처리 방식을 설명합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>1. Information We Collect</h2>
        <p>
          <span className="lang-tag">EN</span>
          We may collect minimal technical information (e.g., basic logs) to keep services secure and reliable. If an app uses analytics or ads, that will be disclosed inside the app or its store listing.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          서비스 안정성과 보안을 위해 최소한의 기술 정보(예: 기본 로그)를 처리할 수 있습니다. 분석 도구/광고 SDK를 사용하는 앱의 경우, 앱 내부 또는 스토어 정보에 별도 고지합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>2. How We Use Information</h2>
        <p>
          <span className="lang-tag">EN</span>
          We use information to:
        </p>
        <ul>
          <li>Provide and maintain the service</li>
          <li>Prevent abuse and ensure security</li>
          <li>Respond to support requests</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          <span className="lang-tag">KR</span>
          정보 이용 목적:
        </p>
        <ul>
          <li>서비스 제공 및 유지</li>
          <li>오남용 방지</li>
          <li>고객 문의 대응</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>3. Sharing</h2>
        <p>
          <span className="lang-tag">EN</span>
          We do not sell personal information. We may share information only when required by law, or with service providers that help operate the service (e.g., hosting), under appropriate safeguards.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          회사는 개인정보를 판매하지 않습니다. 법령상 요구가 있거나, 호스팅 등 서비스 운영에 필요한 범위에서 수탁사와 공유할 수 있으며, 적절한 보호조치를 적용합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>4. Data Retention</h2>
        <p>
          <span className="lang-tag">EN</span>
          We retain information only as long as needed for the purposes described above.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          위 목적 달성에 필요한 기간 동안만 정보를 보관합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>5. Contact</h2>
        <p>
          <span className="lang-tag">EN</span>
          For privacy questions, contact{" "}
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          개인정보 관련 문의:{" "}
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>
        </p>
      </div>

      <Link href="/" className="back-link">
        <span>←</span>
        <span>Back to Home</span>
      </Link>
    </div>
  );
}

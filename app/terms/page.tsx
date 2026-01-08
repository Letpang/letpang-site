import Link from "next/link";

export default function TermsPage() {
  const effectiveDate = "2026-01-07";

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">📜</div>
        <h1 className="page-title">Terms of Use</h1>
        <p className="page-subtitle">이용약관 · Effective: {effectiveDate}</p>
      </header>

      <div className="content-card">
        <h2>Agreement</h2>
        <p>
          <span className="lang-tag">EN</span>
          By using our website and apps/games, you agree to these terms.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          본 웹사이트 및 앱/게임을 이용함으로써 본 약관에 동의하는 것으로 간주됩니다.
        </p>
      </div>

      <div className="content-card">
        <h2>1. Service</h2>
        <p>
          <span className="lang-tag">EN</span>
          We provide information and interactive services related to our games and products.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          회사는 게임 및 제품과 관련된 정보/콘텐츠 및 인터랙티브 서비스를 제공합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>2. Acceptable Use</h2>
        <p>
          <span className="lang-tag">EN</span>
          You agree to:
        </p>
        <ul>
          <li>Not misuse the service</li>
          <li>Not attempt to disrupt security</li>
          <li>Use the service in compliance with applicable laws</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          <span className="lang-tag">KR</span>
          이용자 준수사항:
        </p>
        <ul>
          <li>서비스를 오남용하지 않습니다</li>
          <li>보안을 침해하는 행위를 금지합니다</li>
          <li>관련 법령을 준수하여 서비스를 이용합니다</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>3. Intellectual Property</h2>
        <p>
          <span className="lang-tag">EN</span>
          All content is owned by Letpang Studio or its licensors unless stated otherwise.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          별도 표시가 없는 한, 콘텐츠의 권리는 회사 또는 라이선스 제공자에게 있습니다.
        </p>
      </div>

      <div className="content-card">
        <h2>4. Disclaimer</h2>
        <p>
          <span className="lang-tag">EN</span>
          The service is provided &quot;as is&quot; without warranties to the extent permitted by law.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          법령이 허용하는 범위에서 서비스는 &quot;있는 그대로&quot; 제공되며, 특정 목적 적합성 등을 보장하지 않습니다.
        </p>
      </div>

      <div className="content-card">
        <h2>5. Contact</h2>
        <p>
          <span className="lang-tag">EN</span>
          Questions? Email us at{" "}
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          문의:{" "}
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

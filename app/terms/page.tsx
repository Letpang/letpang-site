export default function TermsPage() {
  const effectiveDate = "2026-01-07";

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1>Terms of Use / 이용약관</h1>
      <p><strong>Effective Date / 시행일</strong>: {effectiveDate}</p>

      <p>
        <strong>EN</strong> — By using our website and apps/games, you agree to these terms.<br />
        <strong>KR</strong> — 본 웹사이트 및 앱/게임을 이용함으로써 본 약관에 동의하는 것으로 간주됩니다.
      </p>

      <h2 style={{ marginTop: 22 }}>1. Service / 서비스</h2>
      <p>
        <strong>EN</strong>: We provide information and interactive services related to our games and products.<br />
        <strong>KR</strong>: 회사는 게임 및 제품과 관련된 정보/콘텐츠 및 인터랙티브 서비스를 제공합니다.
      </p>

      <h2 style={{ marginTop: 22 }}>2. Acceptable use / 이용자의 준수사항</h2>
      <ul>
        <li><strong>EN</strong>: Do not misuse the service or attempt to disrupt security.</li>
        <li><strong>KR</strong>: 서비스를 오남용하거나 보안을 침해하는 행위를 금지합니다.</li>
      </ul>

      <h2 style={{ marginTop: 22 }}>3. Intellectual property / 지식재산권</h2>
      <p>
        <strong>EN</strong>: All content is owned by Letpang Studio or its licensors unless stated otherwise.<br />
        <strong>KR</strong>: 별도 표시가 없는 한, 콘텐츠의 권리는 회사 또는 라이선스 제공자에게 있습니다.
      </p>

      <h2 style={{ marginTop: 22 }}>4. Disclaimer / 면책</h2>
      <p>
        <strong>EN</strong>: The service is provided “as is” without warranties to the extent permitted by law.<br />
        <strong>KR</strong>: 법령이 허용하는 범위에서 서비스는 “있는 그대로” 제공되며, 특정 목적 적합성 등을 보장하지 않습니다.
      </p>

      <h2 style={{ marginTop: 22 }}>5. Contact / 문의</h2>
      <p>
        <strong>EN</strong>: <a href="mailto:support@letpang.com">support@letpang.com</a><br />
        <strong>KR</strong>: <a href="mailto:support@letpang.com">support@letpang.com</a>
      </p>

      <p style={{ marginTop: 28 }}>
        <a href="/">← Home</a>
      </p>
    </main>
  );
}

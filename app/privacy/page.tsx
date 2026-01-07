export default function PrivacyPage() {
  const effectiveDate = "2026-01-07";

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1>Privacy Policy / 개인정보 처리방침</h1>
      <p><strong>Effective Date / 시행일</strong>: {effectiveDate}</p>

      <p>
        <strong>EN</strong> — Letpang Studio (“we”) respects your privacy. This policy explains how we handle
        information when you use our website and mobile games/apps.<br />
        <strong>KR</strong> — 렛팡 스튜디오(“회사”)는 이용자의 개인정보를 소중히 보호합니다. 본 방침은 웹사이트 및
        모바일 앱/게임 이용 시 정보 처리 방식을 설명합니다.
      </p>

      <h2 style={{ marginTop: 22 }}>1. Information we collect / 수집하는 정보</h2>
      <p>
        <strong>EN</strong>: We may collect minimal technical information (e.g., basic logs) to keep services secure
        and reliable. If an app uses analytics or ads, that will be disclosed inside the app or its store listing.<br />
        <strong>KR</strong>: 서비스 안정성과 보안을 위해 최소한의 기술 정보(예: 기본 로그)를 처리할 수 있습니다.
        분석 도구/광고 SDK를 사용하는 앱의 경우, 앱 내부 또는 스토어 정보에 별도 고지합니다.
      </p>

      <h2 style={{ marginTop: 22 }}>2. How we use information / 이용 목적</h2>
      <ul>
        <li><strong>EN</strong>: Provide and maintain the service, prevent abuse, and respond to support requests.</li>
        <li><strong>KR</strong>: 서비스 제공/유지, 오남용 방지, 고객 문의 대응.</li>
      </ul>

      <h2 style={{ marginTop: 22 }}>3. Sharing / 제공 및 위탁</h2>
      <p>
        <strong>EN</strong>: We do not sell personal information. We may share information only when required by law,
        or with service providers that help operate the service (e.g., hosting), under appropriate safeguards.<br />
        <strong>KR</strong>: 회사는 개인정보를 판매하지 않습니다. 법령상 요구가 있거나, 호스팅 등 서비스 운영에 필요한
        범위에서 수탁사와 공유할 수 있으며, 적절한 보호조치를 적용합니다.
      </p>

      <h2 style={{ marginTop: 22 }}>4. Data retention / 보관 기간</h2>
      <p>
        <strong>EN</strong>: We retain information only as long as needed for the purposes described above.<br />
        <strong>KR</strong>: 위 목적 달성에 필요한 기간 동안만 정보를 보관합니다.
      </p>

      <h2 style={{ marginTop: 22 }}>5. Contact / 문의처</h2>
      <p>
        <strong>EN</strong>: For privacy questions, contact{" "}
        <a href="mailto:support@letpang.com">support@letpang.com</a>.<br />
        <strong>KR</strong>: 개인정보 관련 문의:{" "}
        <a href="mailto:support@letpang.com">support@letpang.com</a>
      </p>

      <p style={{ marginTop: 28 }}>
        <a href="/">← Home</a>
      </p>
    </main>
  );
}

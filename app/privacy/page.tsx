import Link from "next/link";

export default function PrivacyPage() {
  const effectiveDate = "2026-10-23";

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

      <div className="content-card" id="wakppop-ios-analytics">
        <h2>5. Wakppop iOS · Analytics and Privacy Choices</h2>
        <p><span className="lang-tag">EN</span>
          Wakppop for iOS uses Google Analytics for Firebase to measure first app launches, sessions and usage, and installation advertising performance through the linked Google Ads account. Depending on SDK features and consent, data may include an app-instance identifier, device and app characteristics, approximate location derived from IP addresses, lifecycle, screen and session events, and in-app purchase or subscription metadata such as product and price. This integration does not send your in-game nickname or account ID to Firebase.
        </p>
        <p><span className="lang-tag">KR</span>
          iOS 왁뿌팝은 Google Analytics for Firebase로 최초 실행·세션·앱 이용과 연결된 Google Ads 계정의 설치 광고 성과를 측정합니다. SDK 기능과 동의 상태에 따라 앱 인스턴스 식별자, 기기·앱 정보, IP에서 추정한 대략적인 위치, 실행·화면·세션 정보 및 상품·가격 등 인앱 구매·구독 정보가 처리될 수 있습니다. 이번 연동 코드는 게임 닉네임이나 계정 ID를 Firebase에 전송하지 않습니다.
        </p>
        <p><span className="lang-tag">EN</span>
          Google AdMob provides advertising and may process advertising identifiers, ad interactions and technical diagnostics in accordance with applicable privacy choices. Where required, Google's consent form lets you choose advertising and analytics purposes. You can revisit it in the app under My → Settings → Ad privacy choices when that option is required for your region. Analytics remains disabled while its consent status is missing, unknown, unconfigured or denied. Withdrawing analytics consent stops subsequent Analytics collection; it does not automatically delete data already processed. Apple's tracking permission is separate, and declining it does not prevent playing the game.
        </p>
        <p><span className="lang-tag">KR</span>
          Google AdMob은 광고를 제공하며 해당 개인정보 선택에 따라 광고 식별자, 광고 이용 정보와 기술 진단 정보를 처리할 수 있습니다. 필요한 지역에서는 Google 동의 화면에서 광고·분석 목적을 선택합니다. 지역에 따라 제공되는 마이 → 설정 → 광고 개인정보 설정에서 다시 선택할 수 있습니다. 분석 동의 값이 없거나 미정·미설정·거부 상태이면 분석 수집을 끄며, 분석 동의를 철회하면 이후 분석 수집을 중단합니다. 철회가 이미 처리된 데이터의 자동 삭제를 의미하지는 않습니다. Apple 추적 권한은 별도이며 거부해도 게임을 이용할 수 있습니다.
        </p>
        <p><span className="lang-tag">EN</span>
          Google processes this information through its Analytics and advertising services. For details, see <a href="https://policies.google.com/privacy">Google's Privacy Policy</a> and <a href="https://firebase.google.com/support/privacy">Firebase privacy information</a>. Contact hello@letpang.com for access, deletion or other privacy requests; we will handle requests subject to applicable requirements and available service controls.
        </p>
        <p><span className="lang-tag">KR</span>
          Google의 분석·광고 서비스를 통해 위 정보가 처리됩니다. 자세한 내용은 <a href="https://policies.google.com/privacy?hl=ko">Google 개인정보처리방침</a>과 <a href="https://firebase.google.com/support/privacy?hl=ko">Firebase 개인정보 안내</a>에서 확인할 수 있습니다. 열람·삭제 등 개인정보 관련 요청은 hello@letpang.com으로 문의해 주세요. 관련 요건과 서비스에서 제공하는 제어 범위에 따라 처리합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>6. Contact</h2>
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

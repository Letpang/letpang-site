// app/games/hanja-explorer/privacy/page.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Privacy Policy - ${SITE.games.hanja.title}`,
  description: `Privacy Policy for ${SITE.games.hanja.title} mobile application.`,
};

export default function HanjaPrivacyPage() {
  const game = SITE.games.hanja;
  const effectiveDate = "2026-04-03";

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">🔒</div>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-subtitle">{game.titleKr} · Effective: {effectiveDate}</p>
      </header>

      <div className="content-card">
        <h2>Overview</h2>
        <p>
          <span className="lang-tag">EN</span>
          Letpang Studio (&quot;we&quot;) respects your privacy. This policy explains how information is handled in the &quot;{game.title}&quot; (the &quot;App&quot;) mobile application.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          본 방침은 &apos;{game.titleKr}&apos;(이하 &apos;앱&apos;)에서의 개인정보 처리 방식을 설명합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>1. Information We Collect</h2>
        <p>
          <span className="lang-tag">EN</span>
          The App does not directly collect or store sensitive personal information. However, during use, device identifiers (AD ID) may be collected by the advertising platform.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          본 앱은 사용자의 민감한 개인정보를 직접 수집하거나 저장하지 않습니다. 다만, 서비스 이용 과정에서 기기 식별자(AD ID)가 광고 플랫폼에 의해 수집될 수 있습니다.
        </p>
      </div>

      <div className="content-card">
        <h2>2. Advertising Platform (Google AdMob)</h2>
        <p>
          <span className="lang-tag">EN</span>
          The App displays advertisements through Google AdMob. Google may use your advertising ID to provide customized ads. This is subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          본 앱은 구글 애드몹(AdMob)을 통해 광고를 표시합니다. 구글은 맞춤형 광고 제공을 위해 사용자의 광고 ID를 활용할 수 있으며, 이에 대한 정책은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">구글 개인정보 보호정책</a>을 따릅니다.
        </p>
      </div>

      <div className="content-card">
        <h2>3. Children&apos;s Privacy Protective</h2>
        <p>
          <span className="lang-tag">EN</span>
          The App can be used by all ages, including children under 13. We do not intentionally collect or share children&apos;s personal information with others.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          본 앱은 어린이(만 13세 미만)를 포함한 모든 연령층이 이용할 수 있습니다. 당사는 어린이의 개인정보를 고의로 수집하거나 타인과 공유하지 않습니다.
        </p>
      </div>

      <div className="content-card">
        <h2>4. Contact Us</h2>
        <p>
          <span className="lang-tag">EN</span>
          If you have any questions, please contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <p>
          <span className="lang-tag">KR</span>
          문의사항이 있으시면 아래 이메일로 연락주시기 바랍니다.<br />
          이메일: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 40 }}>
        <Link href={game.path} className="back-link" style={{ margin: 0 }}>
          <span>←</span> Back to Game Page
        </Link>
        <Link href="/" className="back-link" style={{ margin: 0 }}>
          <span>🏠</span> Home
        </Link>
      </div>
    </div>
  );
}

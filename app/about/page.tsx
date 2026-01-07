export default function AboutPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1>About Letpang Studio / 렛팡 스튜디오 소개</h1>

      <p>
        <strong>EN</strong> — Letpang Studio is an independent game studio focused on building
        delightful mobile games for iOS and Android.
      </p>
      <p>
        <strong>KR</strong> — 렛팡 스튜디오는 iOS/Android용 모바일 게임을 개발하는 인디 게임 스튜디오입니다.
      </p>

      <h2 style={{ marginTop: 28 }}>What we do / 하는 일</h2>
      <ul>
        <li>
          <strong>EN</strong>: Design and develop casual games and interactive experiences.
        </li>
        <li>
          <strong>KR</strong>: 캐주얼 게임 및 인터랙티브 콘텐츠를 기획·개발합니다.
        </li>
      </ul>

      <h2 style={{ marginTop: 28 }}>Support / 지원</h2>
      <p>
        <strong>EN</strong>: For help with our apps or games, contact{" "}
        <a href="mailto:support@letpang.com">support@letpang.com</a>.
      </p>
      <p>
        <strong>KR</strong>: 앱/게임 관련 문의는{" "}
        <a href="mailto:support@letpang.com">support@letpang.com</a> 으로 연락 주세요.
      </p>

      <p style={{ marginTop: 28 }}>
        <a href="/">← Home</a>
      </p>
    </main>
  );
}

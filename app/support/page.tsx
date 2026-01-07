export default function SupportPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1>Support / 고객지원</h1>

      <h2 style={{ marginTop: 22 }}>Contact / 문의</h2>
      <p>
        <strong>Support Email</strong>: <a href="mailto:support@letpang.com">support@letpang.com</a><br />
        <strong>Business</strong>: <a href="mailto:biz@letpang.com">biz@letpang.com</a>
      </p>

      <h2 style={{ marginTop: 22 }}>Response time / 답변 시간</h2>
      <p>
        <strong>EN</strong>: We usually respond within 2–3 business days.<br />
        <strong>KR</strong>: 보통 영업일 기준 2–3일 내 답변드립니다.
      </p>

      <h2 style={{ marginTop: 22 }}>Information to include / 함께 적어주면 좋아요</h2>
      <ul>
        <li><strong>EN</strong>: App/Game name, device model, OS version, and a short description of the issue.</li>
        <li><strong>KR</strong>: 앱/게임명, 기기 모델, OS 버전, 문제 상황 설명(가능하면 스크린샷).</li>
      </ul>

      <p style={{ marginTop: 28 }}>
        <a href="/">← Home</a>
      </p>
    </main>
  );
}

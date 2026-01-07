export default function HomePage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1 style={{ marginBottom: 8 }}>Letpang Studio</h1>
      <p style={{ marginTop: 0, color: "#444" }}>
        We build delightful mobile games.<br />
        우리는 즐겁고 완성도 있는 모바일 게임을 만듭니다.
      </p>

      <hr style={{ margin: "28px 0" }} />

      <h2 style={{ marginBottom: 8 }}>Mission / 미션</h2>
      <p style={{ marginTop: 0 }}>
        Create accessible, charming games with thoughtful UX for everyone.<br />
        누구나 즐길 수 있는 매력적인 게임을, 좋은 사용자 경험과 함께 제공합니다.
      </p>

      <h2 style={{ marginTop: 28, marginBottom: 8 }}>Contact / 연락</h2>
      <p style={{ marginTop: 0 }}>
        Support: <a href="mailto:support@letpang.com">support@letpang.com</a><br />
        Business: <a href="mailto:biz@letpang.com">biz@letpang.com</a>
      </p>

      <h2 style={{ marginTop: 28, marginBottom: 8 }}>Links / 링크</h2>
      <ul>
        <li><a href="/about">About / 소개</a></li>
        <li><a href="/support">Support</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Use</a></li>
      </ul>

      <p style={{ marginTop: 36, fontSize: 12, color: "#666" }}>
        © {new Date().getFullYear()} Letpang Studio. All rights reserved.
      </p>
    </main>
  );
}

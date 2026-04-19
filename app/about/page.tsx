import Link from "next/link";

export const metadata = {
  title: "스튜디오 소개",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="page-icon">👋</div>
        <h1 className="page-title">스튜디오 소개</h1>
        <p className="page-subtitle">렛팡 스튜디오에 대해 알려드릴게요</p>
      </header>

      <div className="content-card">
        <h2>렛팡 스튜디오는요</h2>
        <p>
          렛팡 스튜디오는 iOS와 Android를 위한 모바일 게임을 만드는 소규모 인디 게임 스튜디오입니다.
          대형 스튜디오에서는 시도하기 어려운, 작지만 개성 있는 게임을 직접 기획하고 개발합니다.
        </p>
      </div>

      <div className="content-card">
        <h2>이런 일을 하고 있어요</h2>
        <p>
          남녀노소 누구나 쉽게 즐길 수 있는 캐주얼 게임을 디자인하고 개발합니다.
          감성적인 비주얼과 직관적인 조작을 통해 플레이어가 자연스럽게 몰입할 수 있는 경험을 만들어가고 있습니다.
        </p>
      </div>

      <div className="content-card">
        <h2>우리가 지키는 가치</h2>
        <p>
          &ldquo;누구나 즐길 수 있는 따뜻한 게임&rdquo;을 목표로 합니다.
          화려한 그래픽보다는 플레이어의 마음에 남는 경험을 중요하게 생각하며,
          하나의 게임이라도 정성을 다해 완성하는 것을 원칙으로 삼고 있습니다.
        </p>
      </div>

      <div className="content-card">
        <h2>문의하기</h2>
        <p>
          게임 관련 문의, 협업 제안, 버그 리포트 등 어떤 내용이든 환영합니다.<br />
          <a href="mailto:hello@letpang.com">hello@letpang.com</a>으로 편하게 연락해 주세요.
        </p>
      </div>

      <Link href="/" className="back-link">
        <span>←</span>
        <span>홈으로 돌아가기</span>
      </Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Clock3, Image as ImageIcon, Mail, MessageCircle, MonitorSmartphone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "고객지원",
  description: "렛팡 게임 이용 중 궁금한 점이나 불편한 점을 알려주세요. 게임별 문의와 협업 제안을 안내합니다.",
};
const games = [SITE.games.hanja, SITE.games.wakppop, SITE.games.colorSense, SITE.games.hangulStreet];
function supportLink(name: string) {
  const body = `게임 이름: ${name}\n기기 모델:\n운영체제 / 앱 버전:\n\n어떤 상황에서 문제가 생겼나요?\n\n`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(`[${name}] 문의`)}&body=${encodeURIComponent(body)}`;
}
export default function SupportPage() {
  return (
    <div className="studio-subpage support-page">
      <header className="subpage-hero">
        <div><p className="eyebrow">HERE TO HELP / 고객지원</p><h1>궁금한 점도,<br /><span>불편했던 순간도.</span></h1><p className="subpage-lead">게임을 즐기다 막히는 순간이 있다면 알려주세요.<br />어떤 일이 있었는지 함께 살펴보겠습니다.</p><a className="button button-dark" href={`mailto:${SITE.email}`}><Mail size={20} aria-hidden="true" />문의 메일 보내기<span className="button-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></a><p className="response-note"><Clock3 size={15} aria-hidden="true" />보통 영업일 기준 2–3일 내 답변드립니다.</p></div>
        <div className="support-hero-art" aria-hidden="true"><Image src="/art/studio-letter-v1.webp" alt="" width={960} height={640} sizes="(max-width: 760px) 80vw, 420px" priority /></div>
      </header>

      <section aria-labelledby="support-games-heading">
        <div className="subsection-heading"><p className="eyebrow">01 / CHOOSE YOUR GAME</p><h2 id="support-games-heading">어떤 게임에 관한 이야기인가요?</h2><p>게임을 선택하면 이름과 확인할 항목이 담긴 메일이 열립니다.</p></div>
        <div className="support-game-grid">{games.map(game => <a className="support-game" href={supportLink(game.titleKr)} key={game.id}><Image src={game.iconUrl} alt="" width={64} height={64} /><div><h3>{game.titleKr}</h3><span>이 게임 문의하기</span></div><ArrowUpRight size={18} aria-hidden="true" /></a>)}</div>
      </section>

      <section className="support-prep" aria-labelledby="support-prep-heading">
        <div><p className="eyebrow">02 / A FEW HELPFUL DETAILS</p><h2 id="support-prep-heading">이렇게 알려주시면<br />확인하기 좋아요.</h2><p>길게 쓰지 않아도 괜찮아요.<br />문제가 생긴 상황을 짧게 설명해 주세요.</p></div>
        <div className="support-checklist">
          <div><span className="prep-icon"><MonitorSmartphone aria-hidden="true" /></span><div><h3>사용 중인 환경</h3><p>기기 모델, iOS·Android 버전, 앱 버전</p></div></div>
          <div><span className="prep-icon"><MessageCircle aria-hidden="true" /></span><div><h3>문제가 생긴 순간</h3><p>어느 화면에서 무엇을 했는지, 어떤 문제가 나타났는지</p></div></div>
          <div><span className="prep-icon"><ImageIcon /></span><div><h3>가능하다면 화면도 함께</h3><p>스크린샷이나 짧은 영상이 있으면 상황을 파악하는 데 도움이 됩니다.</p></div></div>
        </div>
      </section>

      <section className="support-contact-grid" aria-label="문의 연락처">
        <a href={`mailto:${SITE.email}`} className="support-contact"><Mail aria-hidden="true" /><div><h2>게임 이용 문의</h2><p>오류 제보, 궁금한 점, 게임에 대한 의견</p><strong>{SITE.email}</strong></div><ArrowUpRight size={20} aria-hidden="true" /></a>
        <a href="mailto:biz@letpang.com" className="support-contact"><BriefcaseBusiness aria-hidden="true" /><div><h2>협업·비즈니스 제안</h2><p>렛팡과 함께 만들고 싶은 이야기가 있다면</p><strong>biz@letpang.com</strong></div><ArrowUpRight size={20} aria-hidden="true" /></a>
      </section>

      <section className="support-faq" aria-labelledby="faq-heading"><p className="eyebrow">03 / QUICK ANSWERS</p><h2 id="faq-heading">문의 전에 궁금할 수 있는 것들</h2>
        <details><summary>게임은 어디에서 내려받을 수 있나요?</summary><p><Link href="/#games">홈페이지의 게임 소개</Link>에서 App Store 또는 Google Play 버튼을 선택해 주세요.</p></details>
        <details><summary>언제 답변을 받을 수 있나요?</summary><p>보통 영업일 기준 2–3일 내 답변드립니다. 문제 상황과 사용 중인 기기 정보를 함께 보내주시면 확인에 도움이 됩니다.</p></details>
        <details><summary>오류가 아니라 의견을 보내도 되나요?</summary><p>물론이에요. 좋았던 점, 불편했던 점, 다음에 만나고 싶은 기능도 편하게 알려주세요.</p></details>
      </section>
      <p className="support-english">Need help in English? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with the game name, device, app version, and a short description. We usually reply within 2–3 business days.</p>
      <Link href="/" className="text-link"><ArrowLeft size={16} aria-hidden="true" />홈으로 돌아가기</Link>
    </div>
  );
}

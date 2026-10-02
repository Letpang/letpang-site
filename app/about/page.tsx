import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ClayIcon } from "@/components/StudioIcon";

export const metadata = {
  title: "스튜디오 소개",
  description: "한자팝, 왁뿌팝, Color Sense, Hangul Street를 만드는 렛팡 스튜디오. 배움과 놀이, 잠깐의 휴식을 게임에 담습니다.",
};
export default function AboutPage() {
  return (
    <div className="studio-subpage about-page">
      <header className="subpage-hero"><div><p className="eyebrow">A SMALL STUDIO / 렛팡 이야기</p><h1>배우고, 놀고,<br /><span>잠깐 쉬어 가는 곳.</span></h1><p className="subpage-lead">렛팡은 일상의 작은 순간을 위한<br />모바일 게임과 앱을 만드는 인디 스튜디오입니다.</p><Link className="button button-dark" href="/#games">렛팡 게임 만나보기<span className="button-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></Link></div><div className="about-hero-art"><Image src="/art/letpang-world-v1.webp" alt="렛팡의 게임 캐릭터와 소재로 만든 작은 놀이 세계" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 550px" priority /></div></header>

      <section className="about-intro" aria-labelledby="about-intro-heading"><p className="eyebrow">WHAT WE MAKE</p><h2 id="about-intro-heading">게임마다 다른 즐거움,<br />그 안에 담긴 같은 마음.</h2><div><p>한자팝에서는 한 글자씩 배우는 성취감을, 왁뿌팝에서는 손끝으로 즐기는 말랑한 휴식을 만날 수 있어요.</p><p>Color Sense는 고양이를 찾고 돌보는 컬러 퍼즐로, Hangul Street는 서울을 여행하며 한국어를 배우는 게임으로 이어집니다.</p><p>서로 다른 게임이지만, 쉽고 즐겁게 시작할 수 있는 경험을 만들고 싶다는 마음은 같습니다.</p></div></section>

      <section aria-labelledby="about-values-heading"><div className="subsection-heading"><p className="eyebrow">THE WAY WE MAKE</p><h2 id="about-values-heading">만들 때 소중하게 생각하는 것</h2></div><div className="about-values">
        <article><ClayIcon kind="play" /><h3>쉽게 시작하는 놀이</h3><p>처음 만나는 화면에서도 무엇을 할지 알 수 있도록, 조작과 흐름을 간결하게 다듬습니다.</p></article>
        <article><ClayIcon kind="book" /><h3>조금씩 쌓이는 배움</h3><p>한 글자, 한 단어를 알아가는 과정에 퀴즈와 놀이를 더해 작은 성취를 느끼게 합니다.</p></article>
        <article><ClayIcon kind="heart" /><h3>다시 찾고 싶은 순간</h3><p>색과 소리, 손끝의 반응까지 살피며 잠깐의 플레이가 기분 좋은 시간이 되도록 고민합니다.</p></article>
      </div></section>

      <section className="about-invitation"><div><p className="eyebrow">KEEP IN TOUCH</p><h2>다음 이야기도 함께해요.</h2><p>게임에 대한 의견은 고객지원으로,<br />함께 만들고 싶은 이야기는 협업 메일로 들려주세요.</p></div><div><Link className="button button-dark" href="/support">고객지원<span className="button-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></Link><a className="text-link" href="mailto:biz@letpang.com">협업 제안하기<ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
      <Link href="/" className="text-link"><ArrowLeft size={16} aria-hidden="true" />홈으로 돌아가기</Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import { ArrowIcon, ClayIcon } from "@/components/StudioIcon";
import { SITE } from "@/lib/site";

const games = [SITE.games.hanja, SITE.games.wakppop, SITE.games.colorSense, SITE.games.hangulStreet];
function Spark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 0C20 14 26 20 40 20C26 20 20 26 20 40C20 26 14 20 0 20C14 20 20 14 20 0Z" fill="currentColor" /></svg>;
}
export default function HomePage() {
  return (
    <div className="studio-home">
      <section className="studio-hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SMALL STUDIO. HAPPY LITTLE MOMENTS.</p>
          <h1 id="hero-heading">일상에 작은<br /><span className="hero-highlight">즐거움 한 스푼.<Spark /></span></h1>
          <p className="hero-description">조금씩 배우고, 마음껏 놀고, 잠깐 쉬어 가요.<br />렛팡은 당신의 하루에 오래 남을<br className="desktop-break" /> 작고 다정한 게임과 앱을 만듭니다.</p>
          <div className="hero-actions"><a className="button button-dark" href="#games"><ClayIcon kind="play" />우리 게임 만나보기 <span className="button-arrow"><ArrowIcon diagonal /></span></a><Link className="text-link story-link" href="/about">스튜디오 이야기 <span className="link-arrow"><ArrowIcon /></span></Link></div>
          <div className="hero-footnote"><span className="tiny-platform">iOS + Android</span><span>손안에서 만나는 작은 세계</span></div>
        </div>
        <figure className="hero-world">
          <Image src="/art/letpang-world-v1.webp" alt="한자팝 캐릭터와 고양이, 무지갯빛 왁뿌볼, 서울 풍경이 어우러진 렛팡의 작은 놀이 세계" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 60vw" priority />
          <figcaption><span className="status-dot" /> FOUR LITTLE WORLDS, ONE HAPPY PLACE.</figcaption>
        </figure>
      </section>
      <div className="studio-strip" aria-label="렛팡이 만드는 즐거움">
        <div className="strip-item"><ClayIcon kind="book" /><div><span>LEARN A LITTLE</span><p>조금씩 배우고</p></div></div>
        <div className="strip-item"><ClayIcon kind="play" /><div><span>PLAY A LOT</span><p>마음껏 놀고</p></div></div>
        <div className="strip-item"><ClayIcon kind="heart" /><div><span>FEEL GOOD</span><p>기분 좋게 쉬어요</p></div></div>
      </div>
      <section className="portfolio-section" id="games" aria-labelledby="games-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / OUR LITTLE WORLDS</p><h2 id="games-heading">취향대로 골라요.<br /><span>즐거움은 여러 가지니까.</span></h2></div><p className="section-note">매일의 배움부터 말랑한 휴식까지.<br />렛팡이 만든 네 개의 작은 세계를 만나보세요.</p></div>
        <div className="portfolio-grid">{games.map(game => <GameCard key={game.id} game={game} />)}</div>
      </section>
      <section className="next-world" aria-labelledby="next-heading">
        <div className="next-illustration" aria-hidden="true"><Image src="/art/hangul-world-v1.webp" alt="" width={1536} height={1024} sizes="(max-width: 760px) 70vw, 280px" /></div>
        <div className="next-copy"><p className="eyebrow">NEXT LITTLE WORLD / COMING SOON</p><h2 id="next-heading">다음 이야기는, 한글팝.</h2><p>{SITE.games.hangulPop.descriptionKr}.<br />실생활 속 한국어를 만나는 새로운 세계를 준비하고 있어요.</p></div>
        <span className="coming-label"><span className="status-dot" /> 출시 예정</span>
      </section>
      <section className="studio-story" aria-labelledby="story-heading">
        <div className="story-intro"><p className="eyebrow">02 / THE WAY WE MAKE</p><h2 id="story-heading">작지만,<br />마음은 가득.</h2><Link href="/about" className="text-link">렛팡 이야기 더 보기 <span>↗</span></Link></div>
        <div className="story-values">
          <div><span className="value-number">01</span><h3>시작은 가볍게</h3><p>복잡한 설명 없이도 바로 즐길 수 있도록.<br />쉽게 시작하고, 자연스럽게 빠져들어요.</p></div>
          <div><span className="value-number">02</span><h3>배움도 놀이처럼</h3><p>한 글자, 한 단어, 한 번의 도전.<br />작은 성취가 쌓이는 경험을 만들어요.</p></div>
          <div><span className="value-number">03</span><h3>작은 디테일까지 다정하게</h3><p>색 하나, 소리 하나, 손끝의 반응까지.<br />다시 찾고 싶은 즐거움을 고민해요.</p></div>
        </div>
      </section>
      <section className="hello-section" aria-labelledby="hello-heading">
        <div className="hello-copy"><p className="eyebrow">GOOD THINGS START WITH A HELLO.</p><h2 id="hello-heading">함께 만들면<br />더 즐거울 거예요.</h2><p>게임에 대한 이야기, 새로운 아이디어, 협업 제안.<br />어떤 이야기든 편하게 들려주세요.</p><a className="button button-cream" href={`mailto:${SITE.email}`}><svg className="mail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="1.7" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>hello@letpang.com <span className="button-arrow"><ArrowIcon diagonal /></span></a></div>
        <div className="hello-art" aria-hidden="true"><Image src="/art/studio-letter-v1.webp" alt="" width={1536} height={1024} sizes="(max-width: 760px) 80vw, 480px" /><span className="hello-note">A LITTLE HELLO.<br />A WHOLE LOT OF POSSIBILITIES.</span></div>
      </section>
    </div>
  );
}

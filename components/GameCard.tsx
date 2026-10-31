import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
type Game = { id: string; titleKr: string; descriptionKr: string; iconUrl: string; path?: string; appStoreUrl: string; playStoreUrl: string };
const presentation: Record<string, { theme: string; category: string; headline: string; screen: string; word: string }> = {
  "hanja-explorer": { theme: "mint", category: "LEARN / 한자 학습", headline: "하루 5분,\n한자가 쌓입니다.", screen: "/screens/hanja.jpg", word: "學" },
  wakppop: { theme: "pink", category: "RELAX / ASMR 놀이터", headline: "톡, 바삭, 말랑.\n손끝으로 쉬어 가요.", screen: "/screens/wakppop.jpg", word: "pop!" },
  "color-sense": { theme: "peach", category: "PLAY / 고양이 컬러 퍼즐", headline: "다른 색 한 마리,\n찾아볼 고양?", screen: "/screens/cats-puzzle-v2.webp", word: "meow" },
  hangulpop: { theme: "lavender", category: "SPEAK / 상황별 한국어", headline: "외운 한국어를,\n내 말로 만드는 시간.", screen: "/screens/hangul-pop-home-ko.jpg", word: "안녕" },
  gachapop: { theme: "lime", category: "COLLECT / 캡슐 뽑기 수집", headline: "두근두근 캡슐 속,\n오늘의 친구는?", screen: "/screens/gachapop.jpg", word: "gacha" },
};
function StoreIcon({ apple = false }: { apple?: boolean }) {
  return apple ? <FaApple className="store-brand-icon" aria-hidden="true" /> : <FaGooglePlay className="store-brand-icon" aria-hidden="true" />;
}
export default function GameCard({ game, locale = "ko" }: { game: Game; locale?: "ko" | "en" }) {
  const en = locale === "en";
  const englishPresentation: Record<string, { category: string; headline: string }> = {
    "hanja-explorer": { category: "LEARN / DAILY HANJA", headline: "Five minutes,\na little more Hanja." },
    wakppop: { category: "RELAX / ASMR PLAYGROUND", headline: "Tap. Crunch. Squish.\nTake a little break." },
    "color-sense": { category: "PLAY / CAT COLOR PUZZLE", headline: "One different cat.\nCan you spot it?" },
    hangulpop: { category: "SPEAK / EVERYDAY KOREAN", headline: "Real situations.\nYour next conversation." },
  };
  const design = { ...presentation[game.id], ...(en ? englishPresentation[game.id] : {}), ...(en && game.id === "hangulpop" ? { screen: "/screens/hangul-pop-home-en.jpg" } : {}) };
  return (
    <article className={`portfolio-card theme-${design.theme}`}>
      <div className="game-art">
        <span className="game-art-word" aria-hidden="true">{design.word}</span>
        <span className="game-category">{design.category}</span>
        <h3 className="game-art-headline">{design.headline.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h3>
        <div className="game-poster"><Image src={design.screen} alt={`${game.titleKr} ${en ? "app screenshot" : "실제 앱 화면"}`} width={320} height={480} sizes="(max-width: 600px) 140px, 190px" /></div>
        <div className="game-art-icon"><Image src={game.iconUrl} alt="" width={96} height={96} sizes="96px" /></div>
        <span className="art-circle" aria-hidden="true" />
      </div>
      <div className="game-info">
        <div className="game-name-row"><h4>{game.path ? <Link href={game.path}>{game.titleKr}</Link> : game.titleKr}</h4>{game.path && <Link href={game.path} className="game-detail-link" aria-label={en ? `More about ${game.titleKr}` : `${game.titleKr} 자세히 보기`}><ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" /></Link>}</div>
        <p>{game.descriptionKr}</p>
        {!en && game.id === "hangulpop" && <>
          <ul className="game-tags">{["상황별 대화", "활용형 연습", "말하기·단어 복습"].map(item => <li key={item}>{item}</li>)}</ul>
          <p className="game-note">말하기 일치율은 원어민 발음 점수가 아닌, 음성으로 인식된 문장과 목표 문장의 비교 결과입니다. 무료·유료 기능을 제공합니다.</p>
        </>}
        {!game.appStoreUrl && !game.playStoreUrl ? <div className="store-links"><span className="store-coming">{en ? "Coming soon" : "출시 준비 중"}</span></div> : <div className="store-links">
          <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={en ? `Download ${game.titleKr} on the App Store` : `${game.titleKr} App Store에서 다운로드`}><StoreIcon apple /> App Store <span><ArrowUpRight aria-hidden="true" /></span></a>
          <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={en ? `Get ${game.titleKr} on Google Play` : `${game.titleKr} Google Play에서 다운로드`}><StoreIcon /> Google Play <span><ArrowUpRight aria-hidden="true" /></span></a>
        </div>}
      </div>
    </article>
  );
}

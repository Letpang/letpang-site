import Image from "next/image";
import Link from "next/link";
type Game = { id: string; titleKr: string; descriptionKr: string; iconUrl: string; path?: string; appStoreUrl: string; playStoreUrl: string };
const presentation: Record<string, { theme: string; category: string; headline: string; screen: string; word: string }> = {
  "hanja-explorer": { theme: "mint", category: "LEARN / 한자 학습", headline: "하루 5분,\n한자가 쌓입니다.", screen: "/screens/hanja.jpg", word: "學" },
  wakppop: { theme: "pink", category: "RELAX / ASMR 놀이터", headline: "톡, 바삭, 말랑.\n손끝으로 쉬어 가요.", screen: "/screens/wakppop.jpg", word: "pop!" },
  "color-sense": { theme: "peach", category: "PLAY / 고양이 컬러 퍼즐", headline: "다른 색 한 마리,\n찾아볼 고양?", screen: "/screens/cats.jpg", word: "meow" },
  "hangul-street": { theme: "lavender", category: "EXPLORE / 한국어 학습", headline: "서울을 걸으며,\n한국어 한 걸음.", screen: "/screens/street.jpg", word: "안녕" },
};
function StoreIcon({ apple = false }: { apple?: boolean }) {
  return apple ? <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.1 12.3c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 1.9 1-.1 1.4-.6 2.7-.6s1.6.6 2.7.6 1.8-1 2.4-1.9c.8-1.1 1.1-2.1 1.1-2.2-.1 0-1.8-.7-1.8-3.1ZM14.9 6.2c.6-.8 1-1.8.9-2.9-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1.1.1 2.2-.6 2.9-1.4Z" /></svg> : <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 3 10 9L5 21V3Z" fill="currentColor" /><path d="m16 10 4 2-4 2-2-2 2-2Z" fill="currentColor" /><path d="m7 3 8 5-2 2-6-7Zm0 18 8-5-2-2-6 7Z" fill="currentColor" /></svg>;
}
export default function GameCard({ game }: { game: Game }) {
  const design = presentation[game.id];
  return (
    <article className={`portfolio-card theme-${design.theme}`}>
      <div className="game-art">
        <span className="game-art-word" aria-hidden="true">{design.word}</span>
        <span className="game-category">{design.category}</span>
        <h3 className="game-art-headline">{design.headline.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h3>
        <div className="game-poster"><Image src={design.screen} alt={`${game.titleKr} 실제 앱 화면`} width={320} height={480} sizes="(max-width: 600px) 140px, 190px" /></div>
        <div className="game-art-icon"><Image src={game.iconUrl} alt="" width={96} height={96} sizes="96px" /></div>
        <span className="art-circle" aria-hidden="true" />
      </div>
      <div className="game-info">
        <div className="game-name-row"><h4>{game.path ? <Link href={game.path}>{game.titleKr}</Link> : game.titleKr}</h4>{game.path && <Link href={game.path} className="game-detail-link" aria-label={`${game.titleKr} 자세히 보기`}>↗</Link>}</div>
        <p>{game.descriptionKr}</p>
        <div className="store-links">
          <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`${game.titleKr} App Store에서 다운로드`}><StoreIcon apple /> App Store <span>↗</span></a>
          <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`${game.titleKr} Google Play에서 다운로드`}><StoreIcon /> Google Play <span>↗</span></a>
        </div>
      </div>
    </article>
  );
}

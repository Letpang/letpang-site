import Image from "next/image";
import Link from "next/link";

type Game = {
  titleKr: string;
  descriptionKr: string;
  iconUrl: string;
  path?: string;
  appStoreUrl: string;
  playStoreUrl: string;
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <article className="game-featured-card">
      <span className="badge badge-new">출시됨</span>
      <div className="game-featured-header">
        <Image src={game.iconUrl} alt={`${game.titleKr} 아이콘`} width={64} height={64} className="game-icon-img" />
        <h3 className="game-featured-title">
          {game.path ? <Link href={game.path}>{game.titleKr}</Link> : game.titleKr}
        </h3>
      </div>
      <p className="game-featured-desc">{game.descriptionKr}</p>
      <div className="games-buttons">
        <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-google" aria-label={`${game.titleKr} Google Play에서 다운로드`}>Google Play</a>
        <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-store btn-apple" aria-label={`${game.titleKr} App Store에서 다운로드`}>App Store</a>
        {game.path && <Link href={game.path} className="btn-store btn-web">자세히 보기 →</Link>}
      </div>
    </article>
  );
}

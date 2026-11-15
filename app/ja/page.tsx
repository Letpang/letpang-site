import Image from "next/image";
import Link from "next/link";
import { englishGames } from "@/lib/english-games";

export const metadata = {
  title: "レットパンスタジオ",
  description: "韓国語学習、ASMR、キャラクター収集。レットパンスタジオのスマートフォン向けゲームとアプリをご紹介します。",
  alternates: { canonical: "/ja", languages: { ko: "/", en: "/en", ja: "/ja" } },
};

const titles = ["ハングルポップ", "ハングルポップ トラベル", "漢字ポップ", "ワップポップ", "ガチャポップ", "カラーセンス"];
const descriptions = [
  "日常会話を聞いて、韓国語の文づくりや発音を練習できます。",
  "空港やカフェで使う韓国語を練習し、ハングルの名刺も作れます。",
  "クイズやミニゲームで漢字の読み方と意味を学べます。",
  "ワックスボールを割ったり、スライムを伸ばしたりしてASMRを楽しめます。",
  "カプセルを開けて、かわいいキャラクターを集めましょう。",
  "色の違う猫を見つけるパズルゲームです。",
];

export default function JapaneseHome() {
  return <div className="studio-home" lang="ja">
    <section className="studio-hero">
      <div className="hero-copy">
        <h1>毎日に、<br /><span className="hero-highlight">小さな楽しみを。</span></h1>
        <p className="hero-description">韓国語を学んだり、猫を探したり、ASMRでひと休みしたり。レットパンスタジオのゲームとアプリをご紹介します。</p>
        <div className="hero-actions"><a className="button button-dark" href="#games">ゲーム・アプリを見る</a><Link className="text-link" href="/ja/about">スタジオ紹介</Link></div>
      </div>
      <figure className="hero-world"><Image src="/art/letpang-home-garden-v4.webp" alt="ソウルをイメージした庭に集まるレットパンのキャラクター" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 60vw" priority /></figure>
    </section>
    <section className="studio-story">
      <div className="story-intro"><Image src="/icons/dasi-uri.png" alt="" width={72} height={72} /><h2>虹の橋：また会おう</h2><p>ペットロス・ペット追悼アプリ</p><p>大切なペットをしのび、写真から水彩画を作ったり、手紙を残したりできる場所です。</p><a className="text-link" href="https://play.google.com/store/apps/details?id=com.letpang.dasiuri&hl=ja">Google Play</a> <Link href="/dasi-uri/index.html" className="text-link">ウェブ版を開く（韓国語）</Link></div>
    </section>
    <section className="portfolio-section" id="games">
      <div className="section-heading"><h2>ゲーム・アプリ</h2></div>
      <div className="portfolio-grid">{englishGames.map((game, index) => <article key={game.id} className="portfolio-card">
        <div className="game-info">
          <Image src={game.iconUrl} alt="" width={72} height={72} style={{ borderRadius: 16 }} />
          <h3>{titles[index]}</h3><p>{descriptions[index]}</p>
          {game.id === "wakppop" && <Link href="/ja/games/wakppop" className="text-link">詳しく見る</Link>}
          <div className="store-links">
            {game.appStoreUrl && <a href={game.appStoreUrl.replace(/\/\w{2}\/app\//, "/jp/app/")}>App Store</a>}
            {game.playStoreUrl && <a href={`${game.playStoreUrl}&hl=ja`}>Google Play</a>}
          </div>
        </div>
      </article>)}</div>
    </section>
  </div>;
}

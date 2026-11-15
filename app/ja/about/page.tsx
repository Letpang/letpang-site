import Link from "next/link";

export const metadata = { title: "スタジオ紹介", alternates: { canonical: "/ja/about", languages: { ko: "/about", en: "/en/about", ja: "/ja/about" } } };

export default function JapaneseAbout() {
  return <main className="studio-subpage" lang="ja">
    <h1>レットパンスタジオについて</h1>
    <p>レットパンスタジオは、日々の小さな楽しみを届けるゲームとアプリを作るインディースタジオです。</p>
    <p>韓国語や漢字の学習から、ASMRやパズルまで。初めてでも遊びやすく、短い時間でも楽しめる体験を大切にしています。</p>
    <Link href="/ja/#games" className="text-link">ゲーム・アプリを見る</Link>
  </main>;
}

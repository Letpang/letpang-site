import { SITE } from "@/lib/site";

export const metadata = { title: "サポート", alternates: { canonical: "/ja/support", languages: { ko: "/support", en: "/en/support", ja: "/ja/support" } } };

export default function JapaneseSupport() {
  return <main className="studio-subpage" lang="ja">
    <h1>サポート</h1>
    <p>アプリの使い方、不具合、購入に関するお問い合わせはメールでお送りください。</p>
    <p>アプリ名、端末、OS、アプリのバージョンと、問題が起きたときの操作をお知らせください。</p>
    <a href={`mailto:${SITE.email}`} className="button button-dark">{SITE.email}</a>
  </main>;
}

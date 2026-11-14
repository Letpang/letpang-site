import Image from "next/image";

const playUrl = "https://play.google.com/store/apps/details?id=com.letpang.dasiuri";

export default function DasiUriFeature({ locale = "ko" }: { locale?: "ko" | "en" }) {
  const english = locale === "en";
  return (
    <article className="dasi-feature" aria-labelledby="dasi-title">
      <div className="dasi-copy" lang={locale}>
        <p className="eyebrow">{english ? "A GARDEN OF MEMORIES" : "반려동물 추모 게임"}</p>
        <h3 id="dasi-title">{english ? "Dasi Uri" : "다시 우리"}</h3>
        <p>{english
          ? "Meet a beloved pet again in a starlit garden. Light a candle, walk together, and keep the moments you miss in photos and letters."
          : "별빛 동산에서 그리운 반려동물을 다시 만나요. 촛불을 밝히고 함께 산책하며, 오래 간직하고 싶은 순간을 사진과 편지로 남겨요."}</p>
        <div className="dasi-actions">
          <a className="button button-dark" href={playUrl}>{english ? "Get it on Google Play" : "Google Play에서 받기"}</a>
          <a className="button dasi-web-button" href="/dasi-uri/index.html">{english ? "Play on the web" : "웹에서 바로 하기"}</a>
        </div>
      </div>
      <Image src="/art/dasi-uri-garden.webp" alt="" width={1000} height={667} sizes="(max-width: 600px) 100vw, 50vw" />
    </article>
  );
}

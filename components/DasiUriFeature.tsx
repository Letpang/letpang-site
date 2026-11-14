import Image from "next/image";

const playUrl = "https://play.google.com/store/apps/details?id=com.letpang.dasiuri";

export default function DasiUriFeature({ locale = "ko" }: { locale?: "ko" | "en" }) {
  const english = locale === "en";
  return (
    <article className="dasi-feature" aria-labelledby="dasi-title">
      <div className="dasi-copy" lang={locale}>
        <p className="eyebrow">{english ? "A GARDEN OF MEMORIES" : "반려동물 추모 게임"}</p>
        <div className="dasi-title-row">
          <Image className="dasi-app-icon" src="/icons/dasi-uri.png" alt="" width={72} height={72} />
          <h3 id="dasi-title">{english ? "Rainbow Bridge: Pet Memorial" : "무지개다리: 다시, 우리 (펫로스 추모)"}</h3>
        </div>
        <p>{english
          ? "Turn a photo of your dog or cat into a watercolor portrait and choose between two styles. Light a candle, walk together in the starlit garden, and save your favorite moments in the album."
          : "강아지나 고양이 사진 한 장으로 두 가지 수채화 그림체를 만들어 골라 보세요. 촛불을 밝히면 별빛 동산에서 아이를 다시 만나 함께 산책하고, 추억을 앨범에 남길 수 있어요."}</p>
        <div className="dasi-actions">
          <a className="button button-dark" href={playUrl}>{english ? "Get it on Google Play" : "Google Play에서 받기"}</a>
          <a className="button dasi-web-button" href="/dasi-uri/index.html">{english ? "Play on the web" : "웹에서 바로 하기"}</a>
        </div>
      </div>
      <div className="dasi-scene" aria-hidden="true">
        <Image className="dasi-landscape" src="/art/dasi-garden-path.webp" alt="" fill sizes="(max-width: 600px) 100vw, 50vw" />
        <Image className="dasi-guardian" src="/art/dasi-guardian-kneeling.webp" alt="" width={212} height={301} sizes="200px" />
        <Image className="dasi-dog" src="/dasi-uri/pet-painted-maltese-side.webp" alt="" width={386} height={520} sizes="130px" />
        <Image className="dasi-cat" src="/dasi-uri/pet-seated/calico-side.webp" alt="" width={204} height={256} sizes="120px" />
      </div>
    </article>
  );
}

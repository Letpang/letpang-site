import type { Metadata } from "next";
import { SITE } from "./site";

export type WakppopLocale = "ko" | "en";
export const wakppopPath = "/games/wakppop";
export const wakppopOrigin = "https://www.letpang.com";
export const wakppopFaq = {
  ko: [
    { q: "왁뿌팝은 어떤 앱인가요?", a: "렛팡 스튜디오가 만든 모바일 놀이 앱입니다. 왁뿌볼·슬라임·말랑이·키캡 장난감과 구슬 수집, 8가지 미니게임을 한곳에서 즐길 수 있습니다." },
    { q: "무료로 다운로드할 수 있나요?", a: "무료로 다운로드할 수 있으며 광고와 선택형 인앱 구매가 포함됩니다. 광고 영구 제거, 루비, 스타터팩, 시즌 패스는 선택형 구매입니다. 상품별 가격과 조건은 앱과 스토어에서 확인해 주세요." },
    { q: "아이폰과 안드로이드에서 모두 이용할 수 있나요?", a: "Google Play와 App Store에서 제공합니다. iPhone·iPad는 iOS 15.0 이상이 필요합니다. Android 기기 호환성은 Google Play에서 확인해 주세요." },
    { q: "소리와 진동을 조절할 수 있나요?", a: "앱 설정에서 소리 크기와 진동을 조절할 수 있습니다. 진동 지원 여부는 기기에 따라 다릅니다. 화면 터치와 소리로 즐기는 디지털 장난감입니다." },
    { q: "광고 제거를 구매하면 보상 광고도 없어지나요?", a: "광고 영구 제거는 배너와 일반 전면 광고를 제거합니다. 추가 코인·루비를 받는 선택형 보상 광고는 계속 이용할 수 있습니다. 비소모성 구매는 복원을 지원합니다." },
  ],
  en: [
    { q: "What is Wakppop?", a: "Wakppop is a mobile playground by Letpang Studio, bringing together wax balls, slime, squishies, keycap toys, a marble collection, and eight mini-games." },
    { q: "Is Wakppop free to download?", a: "Yes. The app includes ads and optional in-app purchases: permanent ad removal, rubies, starter packs, and a season pass. Check the app and your store for current prices and terms." },
    { q: "Is it available on iPhone and Android?", a: "Wakppop is available on Google Play and the App Store. iPhone and iPad require iOS 15.0 or later. Check Google Play for Android device compatibility." },
    { q: "Can I adjust sound and vibration?", a: "Sound volume and vibration can be adjusted in the app settings. Vibration support depends on your device. These are digital toys enjoyed through touch controls and sound." },
    { q: "Does ad removal also remove rewarded ads?", a: "Permanent ad removal removes banner and regular interstitial ads. Optional rewarded ads for extra coins and rubies remain available. Non-consumable purchases support restoration." },
  ],
} as const;

export function wakppopMetadata(locale: WakppopLocale): Metadata {
  const en = locale === "en";
  const path = `${en ? "/en" : ""}${wakppopPath}`;
  const title = en ? "Wakppop — Slime, Squishy ASMR & Mini-games" : "왁뿌팝 — 말랑이·슬라임 ASMR과 미니게임";
  const description = en
    ? "Meet Wakppop by Letpang Studio: squish toys, stretch slime, click food-shaped keycaps, collect marbles, and play eight mini-games. See real gameplay and download for iOS or Android."
    : "렛팡의 왁뿌팝에서 왁뿌볼·말랑이·슬라임·키캡 ASMR과 구슬 수집, 디저트 머지·토끼 점프 등 8가지 미니게임을 만나보세요. 실제 플레이와 광고·구매 안내, iPhone·Android 설치 링크를 확인하세요.";
  const image = { url: "/screens/wakppop/og.jpg", width: 1200, height: 630, alt: en ? "Wakppop: real squishy, slime and rabbit-run gameplay" : "말랑이·슬라임·토끼 런 실제 플레이와 왁뿌팝 아이콘" };
  return {
    title, description,
    alternates: { canonical: path, languages: { ko: wakppopPath, en: `/en${wakppopPath}` } },
    openGraph: { title, description, url: path, siteName: SITE.name, locale: en ? "en_US" : "ko_KR", alternateLocale: [en ? "ko_KR" : "en_US"], type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function wakppopStructuredData(locale: WakppopLocale) {
  const en = locale === "en";
  const url = `${wakppopOrigin}${en ? "/en" : ""}${wakppopPath}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${wakppopOrigin}/#organization`, name: "Letpang Studio", alternateName: "렛팡 스튜디오", url: wakppopOrigin, logo: `${wakppopOrigin}/art/letpang-logo-v2.webp`, sameAs: ["https://clip.naver.com/@letpang_studio"] },
    { "@type": "SoftwareApplication", "@id": `${url}#app`, name: en ? "Wakppop" : "왁뿌팝", alternateName: en ? "왁뿌팝" : "Wakppop", url, image: `${wakppopOrigin}/icons/wakppop.jpg`, applicationCategory: "GameApplication", operatingSystem: "Android, iOS, iPadOS", author: { "@id": `${wakppopOrigin}/#organization` }, description: wakppopFaq[locale][0].a, installUrl: [SITE.games.wakppop.appStoreUrl, SITE.games.wakppop.playStoreUrl], offers: { "@type": "Offer", price: "0", priceCurrency: "KRW", description: en ? "Free download with ads and optional in-app purchases." : "무료 다운로드. 광고와 선택형 인앱 구매 포함." } },
    { "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: en ? "en" : "ko", mainEntity: wakppopFaq[locale].map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: SITE.name, item: `${wakppopOrigin}${en ? "/en" : "/"}` }, { "@type": "ListItem", position: 2, name: en ? "Wakppop" : "왁뿌팝", item: url }] },
  ] };
}

import type { Metadata } from "next";
import { SITE } from "./site";

export type WakppopLocale = "ko" | "en" | "ja";
export const wakppopPath = "/games/wakppop";
export const wakppopPaths = { ko: wakppopPath, en: `/en${wakppopPath}`, ja: `/ja${wakppopPath}` };
export const wakppopNames = { ko: "왁뿌팝", en: "Wakppop", ja: "ワップポップ" };
const locales = { ko: "ko_KR", en: "en_US", ja: "ja_JP" };
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
  ja: [
    { q: "ワップポップはどんなアプリですか？", a: "レットパンスタジオのASMRゲームです。ワックスボール、スクイーズ、スライム、キーキャップで遊べるほか、ビー玉集めや8種類のミニゲームも楽しめます。" },
    { q: "無料でダウンロードできますか？", a: "無料でダウンロードできます。広告と任意のアプリ内課金が含まれます。" },
    { q: "iPhoneとAndroidで遊べますか？", a: "App StoreとGoogle Playで配信しています。対応機種は各ストアをご確認ください。" },
    { q: "音や振動は調整できますか？", a: "アプリの設定で調整できます。振動の対応状況は端末によって異なります。" },
    { q: "広告を削除するとリワード広告も消えますか？", a: "広告削除の購入でバナー広告と通常の全画面広告が消えます。追加報酬を受け取る任意のリワード広告は引き続き利用できます。" },
  ],
} as const;

export const wakppopDescriptions = {
  ko: "왁뿌볼을 깨고 말랑이를 누르고 슬라임을 늘려 보세요. 키캡 소리까지 즐기는 왁뿌 게임, 왁뿌팝.",
  en: "Crack wax balls, stretch slime, squeeze squishies, and tap colorful keycaps in Wakppop, an interactive ASMR game.",
  ja: "ワックスボールをパリッと割って、スライムを伸ばそう。スクイーズやキーキャップの音も楽しめるASMRゲーム、ワップポップ。",
};

export function wakppopMetadata(locale: WakppopLocale): Metadata {
  const path = wakppopPaths[locale];
  const title = {
    ko: "왁뿌팝 — 왁뿌볼 게임·말랑이·슬라임 ASMR",
    en: "Wakppop — Squishy & Slime ASMR Game, Wax Balls",
    ja: "ワップポップ — スクイーズ・スライム ASMRゲーム",
  }[locale];
  const description = wakppopDescriptions[locale];
  const image = { url: "/screens/wakppop/og.jpg", width: 1200, height: 630, alt: title };
  return {
    title, description,
    alternates: { canonical: path, languages: wakppopPaths },
    openGraph: { title, description, url: path, siteName: SITE.name, locale: locales[locale], alternateLocale: Object.values(locales).filter(value => value !== locales[locale]), type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function wakppopStructuredData(locale: WakppopLocale) {
  const en = locale === "en";
  const url = `${wakppopOrigin}${wakppopPaths[locale]}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${wakppopOrigin}/#organization`, name: "Letpang Studio", alternateName: "렛팡 스튜디오", url: wakppopOrigin, logo: `${wakppopOrigin}/art/letpang-logo-v2.webp`, sameAs: ["https://clip.naver.com/@letpang_studio"] },
    { "@type": "SoftwareApplication", "@id": `${url}#app`, name: wakppopNames[locale], alternateName: en ? "왁뿌팝" : "Wakppop", url, image: `${wakppopOrigin}/icons/wakppop.jpg`, applicationCategory: "GameApplication", operatingSystem: "Android, iOS, iPadOS", author: { "@id": `${wakppopOrigin}/#organization` }, description: wakppopFaq[locale][0].a, installUrl: [SITE.games.wakppop.appStoreUrl, SITE.games.wakppop.playStoreUrl], offers: { "@type": "Offer", price: "0", priceCurrency: "KRW", description: wakppopFaq[locale][1].a } },
    { "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: locale, mainEntity: wakppopFaq[locale].map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: SITE.name, item: `${wakppopOrigin}${en ? "/en" : "/"}` }, { "@type": "ListItem", position: 2, name: wakppopNames[locale], item: url }] },
  ] };
}

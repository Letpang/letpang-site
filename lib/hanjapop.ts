import type { Metadata } from "next";
import { SITE } from "./site";

export type HanjaLocale = "ko" | "en";
const origin = "https://www.letpang.com";
export const hanjaPath = "/games/hanja-explorer";
export const hanjaFaq = {
  ko: [
    { q: "한자팝은 어떤 앱인가요?", a: "렛팡 스튜디오가 만든 한자 학습 앱입니다. 오늘의 한자 4장을 카드와 쓰기로 익히고, 퀴즈·짝맞추기·몬스터 슈팅을 선택해 복습합니다. 8급부터 6급까지 급수별 학습과 모의시험을 제공합니다." },
    { q: "한자 공부를 처음 시작할 때 어떻게 이용하나요?", a: "학습할 범위를 고르고 홈의 오늘의 한자 카드부터 시작해 보세요. 뜻과 음, 관련 단어를 살펴보고 쓰기 연습을 이어갑니다. 카드 4장을 마친 뒤 필요한 복습을 골라 이용할 수 있습니다." },
    { q: "8급·7급·6급 한자 시험을 준비할 수 있나요?", a: "8급·7급Ⅱ·7급·6급Ⅱ·6급 학습과 급수별 모의시험을 제공합니다. 앱 내 시험은 연습용이며 공식 자격시험 접수나 자격증 발급을 대신하지 않습니다. 실제 응시 범위와 일정은 주관 기관의 공지를 확인해 주세요." },
    { q: "한자 획순 쓰기와 오답 복습도 가능한가요?", a: "필순을 따라 쓰거나 직접 써 보는 연습을 할 수 있습니다. 학습 기록과 오답 단어장에서 헷갈린 한자·단어를 다시 확인하고, 선택형 퀴즈와 게임으로 복습할 수 있습니다." },
    { q: "무료인가요? 광고와 구매는 어떻게 되나요?", a: "무료로 다운로드할 수 있으며 광고와 선택형 프리미엄 구매가 포함됩니다. 무료 학습분과 추가 학습의 해금 조건, 프리미엄 이용 범위·기간·가격은 설치된 앱의 최신 안내와 스토어 결제 화면에서 확인해 주세요." },
    { q: "아이폰과 안드로이드에서 이용할 수 있나요?", a: "App Store와 Google Play에서 제공합니다. iPhone·iPad는 iOS 15.0 이상, Android는 7.0 이상이 필요합니다. 기기 호환성과 연령 등급은 각 스토어에서 확인해 주세요. 홈 화면 위젯은 iOS 프리미엄 기능입니다." },
  ],
  en: [
    { q: "What is Hanja Pop?", a: "Hanja Pop is a Hanja learning app by Letpang Studio. Study four daily character cards with reading and writing practice, then choose quizzes, matching, or monster shooting for review. Graded study and practice tests cover grades 8 through 6." },
    { q: "Where should a beginner start?", a: "Choose a study range and start with today's character cards. Explore meanings, readings, and related words, then practice writing. After four cards, choose the review activities you need." },
    { q: "Which Hanja exam grades can I practice?", a: "Study and practice tests cover grades 8, 7-II, 7, 6-II, and 6. In-app tests are practice activities; they do not register you for an official exam or award an official qualification. Check the exam organizer for requirements and schedules." },
    { q: "Can I practice writing and review mistakes?", a: "Follow stroke order or write characters yourself. Revisit tricky characters and words in your learning records and mistake notebook, with optional quizzes and games for further review." },
    { q: "Is the app free?", a: "The app is free to download and includes ads and optional premium purchases. Check the installed app and store checkout for current free access, lesson unlocking conditions, premium features, terms, and prices." },
    { q: "Is it available on iPhone and Android?", a: "Hanja Pop is available on the App Store and Google Play. It requires iOS 15.0 or later on iPhone and iPad, or Android 7.0 or later. Check each store for compatibility and age ratings. The home-screen widget is an iOS premium feature." },
  ],
} as const;

export function hanjaMetadata(locale: HanjaLocale): Metadata {
  const en = locale === "en";
  const path = `${en ? "/en" : ""}${hanjaPath}`;
  const title = en ? "Hanja Pop — Daily Hanja, Writing & Grade Practice" : "한자팝 — 오늘의 한자 4장, 획순 쓰기와 8급~6급 학습";
  const description = en ? "Learn four daily Hanja cards with meanings, readings, and writing practice. Review with quizzes and games, study grades 8 through 6, and download Hanja Pop for iOS or Android." : "오늘의 한자 4장을 카드와 쓰기로 익히는 렛팡 한자팝. 한자 입문부터 8급·7급·6급 학습, 획순 쓰기·오답 복습·모의시험까지. 실제 플레이 영상과 iPhone·Android 설치 안내를 확인하세요.";
  return { title, description,
    alternates: { canonical: path, languages: { ko: hanjaPath, en: `/en${hanjaPath}` } },
    openGraph: { title, description, url: path, siteName: SITE.name, locale: en ? "en_US" : "ko_KR", alternateLocale: [en ? "ko_KR" : "en_US"], type: "website", images: [{ url: "/icons/hanja-pop.jpg", width: 512, height: 512, alt: en ? "Hanja Pop app icon" : "한자팝 앱 아이콘" }] },
    twitter: { card: "summary", title, description, images: ["/icons/hanja-pop.jpg"] },
  };
}

export function hanjaStructuredData(locale: HanjaLocale) {
  const en = locale === "en";
  const url = `${origin}${en ? "/en" : ""}${hanjaPath}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${origin}/#organization`, name: "Letpang Studio", alternateName: "렛팡 스튜디오", url: origin, logo: `${origin}/art/letpang-logo-v2.webp`, sameAs: ["https://www.youtube.com/@letpang", "https://blog.naver.com/letpang_studio"] },
    { "@type": "SoftwareApplication", "@id": `${url}#app`, name: en ? "Hanja Pop" : "한자팝", alternateName: en ? "한자팝" : "HanjaPop", url, image: `${origin}/icons/hanja-pop.jpg`, applicationCategory: "EducationalApplication", operatingSystem: "Android, iOS, iPadOS", inLanguage: ["ko", "en"], author: { "@id": `${origin}/#organization` }, description: hanjaFaq[locale][0].a, installUrl: [SITE.games.hanja.appStoreUrl, SITE.games.hanja.playStoreUrl], offers: { "@type": "Offer", price: "0", priceCurrency: "KRW", description: en ? "Free download with ads and optional premium purchases." : "무료 다운로드. 광고와 선택형 프리미엄 구매 포함." } },
    { "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: locale, mainEntity: hanjaFaq[locale].map(({q,a}) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: SITE.name, item: `${origin}${en ? "/en" : "/"}` }, { "@type": "ListItem", position: 2, name: en ? "Hanja Pop" : "한자팝", item: url }] },
  ] };
}

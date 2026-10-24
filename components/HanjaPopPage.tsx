import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { ArrowIcon, ClayIcon } from "./StudioIcon";
import { SITE } from "@/lib/site";
import { hanjaFaq, hanjaStructuredData, type HanjaLocale } from "@/lib/hanjapop";
import shared from "./WakppopPage.module.css";
import styles from "./HanjaPopPage.module.css";

const game = SITE.games.hanja;
export default function HanjaPopPage({ locale }: { locale: HanjaLocale }) {
  const en = locale === "en";
  const base = en ? "/en" : "";
  const steps = en ? [
    ["Meet today's four", "Choose a study range and open the four character cards on your home screen."],
    ["Read, then write", "Explore meanings, readings, and related words. Follow stroke order and try writing yourself."],
    ["Choose your review", "Revisit tricky words or choose a quiz, matching game, or monster shooting session."],
  ] : [
    ["오늘의 한자 4장", "학습할 범위를 고르고, 홈 화면에 놓인 오늘의 한자 카드를 하나씩 열어요."],
    ["읽고, 직접 써 보고", "뜻과 음, 관련 단어를 살펴봐요. 필순을 따라 쓰고 직접 쓰는 연습도 이어가요."],
    ["필요한 복습을 골라요", "헷갈린 단어를 다시 보거나, 퀴즈·짝맞추기·몬스터 슈팅으로 복습해요."],
  ];
  const videos = [
    { url: "https://www.youtube.com/shorts/ULqgh1m4quk", label: en ? "From a character to a word" : "한 글자에서 단어까지", category: en ? "CHARACTER CARDS" : "카드 학습" },
    { url: "https://www.youtube.com/shorts/_cOI03PNl0g", label: en ? "Match a character and its meaning" : "한자와 뜻의 짝을 찾아요", category: en ? "MATCH & REVIEW" : "짝맞추기 복습" },
    { url: "https://www.youtube.com/shorts/sdVNS56ScCE", label: en ? "Read, answer, and shoot" : "읽고 맞히면 정답 발사!", category: en ? "MONSTER SHOOTING" : "몬스터 슈팅" },
  ];
  const buttons = <div className={shared.actions}>
    <a href={game.appStoreUrl} className="button button-dark" target="_blank" rel="noopener noreferrer" aria-label={en ? "Download Hanja Pop on the App Store" : "한자팝 App Store에서 다운로드"}><FaApple className={shared.storeIcon} aria-hidden="true" />App Store<span className="button-arrow"><ArrowIcon diagonal /></span></a>
    <a href={game.playStoreUrl} className={`button ${shared.lightButton}`} target="_blank" rel="noopener noreferrer" aria-label={en ? "Get Hanja Pop on Google Play" : "한자팝 Google Play에서 다운로드"}><FaGooglePlay className={shared.storeIcon} aria-hidden="true" />Google Play<span className="button-arrow"><ArrowIcon diagonal /></span></a>
  </div>;
  return <div className={shared.page} lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hanjaStructuredData(locale)).replace(/</g, "\\u003c") }} />
    <nav className={shared.breadcrumb} aria-label={en ? "Breadcrumb" : "현재 위치"}><Link href={base || "/"}>Letpang Studio</Link><span aria-hidden="true">/</span><span>{en ? "Hanja Pop" : "한자팝"}</span></nav>
    <section className={shared.hero} aria-labelledby="hanja-title">
      <div className={shared.heroCopy}>
        <p className="eyebrow"><span className="status-dot" /> A LITTLE HANJA. EVERY DAY.</p>
        <div className={shared.appIdentity}><Image src={game.iconUrl} alt="" width={52} height={52} priority /><p>{en ? "Hanja Pop" : "한자팝"}<span>BY LETPANG STUDIO</span></p></div>
        <h1 id="hanja-title">{en ? <>Four little cards.<br /><span>A daily Hanja habit.</span></> : <>오늘의 한자 4장.<br /><span>읽고, 쓰고,<br />하나씩 내 것으로.</span></>}</h1>
        <p className={shared.lead}>{en ? "Meet a character, learn a word, and try writing it.\nThen choose a little review when you need it.\nStart your Hanja routine with Hanja Pop." : "한 글자를 만나고, 단어로 이해하고, 직접 써 봐요.\n복습이 필요하면 퀴즈나 게임을 골라도 좋아요.\n한자팝과 나만의 한자 공부 루틴을 시작해 보세요."}</p>
        {buttons}<p className={shared.fineprint}>{en ? "Free download · Ads & optional premium purchases" : "무료 다운로드 · 광고 및 선택형 프리미엄 구매 포함"}</p>
      </div>
      <figure className={styles.heroArt}>
        <div className={styles.heroLabel}><span>DAILY HANJA</span><span>04 CARDS</span></div>
        <span className={styles.heroCharacter} aria-hidden="true">學</span>
        <Image src="/screens/hanja.jpg" alt={en ? "Hanja Pop home screen with four daily character cards and optional study activities" : "오늘의 한자 4장과 선택 학습 메뉴가 보이는 한자팝 홈 화면"} width={222} height={480} sizes="(max-width: 480px) 52vw, 240px" priority className={styles.phone} />
        <figcaption>{en ? "APP SCREEN EXAMPLE · YOUR DAILY START" : "앱 화면 예시 · 오늘 배울 한자를 한눈에"}</figcaption>
      </figure>
    </section>
    <section className={shared.intro} aria-labelledby="hanja-intro"><div><p className="eyebrow">HELLO, HANJA POP</p><h2 id="hanja-intro">{en ? <>A little structure.<br />Room for curiosity.</> : <>한자 입문부터<br />급수별 학습까지.</>}</h2></div><div><p>{hanjaFaq[locale][0].a}</p><dl className={shared.facts}><div><dt>{en ? "DAILY CARDS" : "오늘의 학습"}</dt><dd>{en ? "4 character cards" : "한자 카드 4장"}</dd></div><div><dt>{en ? "GRADE PRACTICE" : "급수별 학습"}</dt><dd>{en ? "Grades 8–6" : "8급부터 6급까지"}</dd></div><div><dt>{en ? "PLATFORMS" : "만날 수 있어요"}</dt><dd>iOS + Android</dd></div></dl></div></section>
    <section aria-labelledby="hanja-routine"><div className="section-heading"><div><p className="eyebrow">01 / YOUR DAILY ROUTINE</p><h2 id="hanja-routine" className={shared.sectionTitle}>{en ? <>One card at a time.<br /><span>A routine you can return to.</span></> : <>오늘 할 일이 보이면,<br /><span>시작도 조금 가벼워져요.</span></>}</h2></div><ClayIcon kind="book" /></div><div className={styles.steps}>{steps.map(([title, text], i) => <article key={title}><span className={styles.stepNumber}>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className={shared.caption}>{en ? "The four daily cards may include review or preview characters. Optional games are review activities, not required steps after every card." : "오늘의 카드에는 복습·미리보기 한자가 포함될 수 있어요. 데일리 세션과 게임은 필요할 때 선택하는 복습 활동이에요."}</p></section>
    <section className={styles.study} aria-labelledby="hanja-study"><div><p className="eyebrow">02 / READ. WRITE. REMEMBER.</p><h2 id="hanja-study">{en ? <>Make room for<br />the tricky ones.</> : <>헷갈린 한자는,<br />한 번 더 만나면 돼요.</>}</h2><p>{en ? "Follow stroke order, check your learning records, and revisit mistakes. Choose a different way to review when you want a change of pace." : "획순을 따라 쓰고, 학습 기록을 살펴보고, 오답 단어장에서 다시 꺼내 봐요. 외운 글자도 다른 방식으로 만나볼 수 있어요."}</p></div><div className={styles.studyList}><article><span>01</span><div><h3>{en ? "Meanings, readings & words" : "뜻·음·관련 단어"}</h3><p>{en ? "Connect a character with the words it appears in." : "한 글자를 보고 끝내지 않고, 쓰이는 단어까지 함께 살펴봐요."}</p></div></article><article><span>02</span><div><h3>{en ? "Stroke-order practice" : "필순 따라 쓰기·직접 쓰기"}</h3><p>{en ? "Watch the stroke order and practice writing the character yourself." : "쓰는 순서를 확인하고 직접 손으로 써 보며 익혀요."}</p></div></article><article><span>03</span><div><h3>{en ? "Graded study & practice tests" : "급수별 학습·모의시험"}</h3><p>{en ? "Grades 8, 7-II, 7, 6-II, and 6. Return to the parts you want to review." : "8급·7급Ⅱ·7급·6급Ⅱ·6급. 준비하는 범위를 고르고 다시 확인해요."}</p></div></article></div></section>
    <section className={shared.watch} aria-labelledby="hanja-videos"><div><p className="eyebrow">03 / REAL APP PLAY</p><h2 id="hanja-videos">{en ? "See it before you start." : "앱에서 어떻게 배우는지, 먼저 보세요."}</h2><p>{en ? "Character cards, matching, and monster shooting from the official Letpang channel. Screens may vary by installed version." : "렛팡 공식 채널의 카드 학습·짝맞추기·몬스터 슈팅 영상이에요. 설치 버전에 따라 화면은 다를 수 있어요."}</p></div><div className={shared.videoLinks}>{videos.map(v=><a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer"><span>YOUTUBE · {v.category}</span><strong>{v.label}</strong><ArrowIcon diagonal /></a>)}</div></section>
    <section className={shared.faq} aria-labelledby="hanja-faq"><div><p className="eyebrow">BEFORE YOU LEARN</p><h2 id="hanja-faq">{en ? <>A few things<br />you might wonder.</> : <>시작하기 전,<br />궁금한 점부터.</>}</h2><p>{en ? "Clear answers from Letpang Studio." : "렛팡이 직접 안내해 드려요."}</p></div><div className="support-faq">{hanjaFaq[locale].map(({q,a})=><details key={q} open><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className={shared.download} aria-labelledby="hanja-download"><Image src={game.iconUrl} alt="" width={80} height={80} /><p className="eyebrow">MEET HANJA POP</p><h2 id="hanja-download">{en ? "A little Hanja, starting today." : "오늘부터, 한자와 조금 더 친해져요."}</h2><p>{en ? "Start with today's cards. Choose the review that suits you." : "오늘의 카드부터 시작하고, 내게 필요한 복습을 골라보세요."}</p>{buttons}<p className={shared.fineprint}>{en ? "Free download · Ads & optional premium purchases" : "무료 다운로드 · 광고 및 선택형 프리미엄 구매 포함"}</p></section>
    <div className={shared.bottomLinks}><Link href={`${base}${game.privacyPath}`}>{en ? "Privacy policy" : "개인정보처리방침"}<ArrowIcon diagonal /></Link><Link href={`${base}/support`}>{en ? "Help & support" : "도움말·문의"}<ArrowIcon diagonal /></Link><Link href={base || "/"}>{en ? "Back to the studio" : "렛팡 스튜디오로"}<ArrowIcon /></Link></div>
  </div>;
}

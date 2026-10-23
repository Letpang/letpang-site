import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { ArrowIcon, ClayIcon } from "./StudioIcon";
import { SITE } from "@/lib/site";
import { wakppopFaq, wakppopStructuredData, type WakppopLocale } from "@/lib/wakppop";
import styles from "./WakppopPage.module.css";

const media = "/screens/wakppop/";
const game = SITE.games.wakppop;

export default function WakppopPage({ locale }: { locale: WakppopLocale }) {
  const en = locale === "en";
  const base = en ? "/en" : "";
  const toys = [
    { image: "ice.webp", title: en ? "A little squish" : "꾹 누르는 말랑이", description: en ? "Press an ice cube, marshmallow, or pudding-shaped toy. Watch it squish and spring back." : "얼음·마시멜로·푸딩 모양을 꾹. 눌렸다가 돌아오는 움직임을 즐겨요.", alt: en ? "Real gameplay: an ice-shaped squishy toy" : "얼음 모양 말랑이를 누르는 실제 플레이 화면", theme: "ice" },
    { image: "slime.webp", title: en ? "A satisfying stretch" : "쭉 늘리는 슬라임", description: en ? "Stretch and gather slime with two fingers. Pick a soda or melon-inspired color and shape." : "소다나 멜론처럼 마음에 드는 슬라임을 골라 두 손가락으로 늘리고 모아봐요.", alt: en ? "Real gameplay: soda slime being stretched" : "소다 슬라임을 늘리는 실제 플레이 화면", theme: "slime" },
    { image: "macaron.png", title: en ? "A tiny keycap click" : "톡톡 누르는 키캡", description: en ? "Tap food-shaped keys, from macarons to sushi, and enjoy each little click and movement." : "마카롱부터 초밥까지. 음식 모양 키캡을 누르며 클릭 소리와 움직임을 즐겨요.", alt: en ? "Lavender macaron keycap artwork used in the app" : "앱에서 사용하는 라벤더 마카롱 키캡 이미지", theme: "key" },
  ];
  const miniGames = en ? ["Wakppop Merge", "Wakppop Bubble", "Keycap Rhythm", "Wakppop Run", "Wakppop Fly", "Wakppop Sky", "Squishy Drag Merge", "Squishy Order Shop"] : ["왁뿌 머지", "왁뿌 버블", "키캡 리듬", "왁뿌 런", "왁뿌 플라이", "왁뿌 스카이", "말랑 드래그 머지", "말랑 주문소"];
  const downloadButtons = <div className={styles.actions}>
    <a href={game.appStoreUrl} className="button button-dark" target="_blank" rel="noopener noreferrer" aria-label={en ? "Download Wakppop on the App Store" : "왁뿌팝 App Store에서 다운로드"}><FaApple className={styles.storeIcon} aria-hidden="true" />App Store<span className="button-arrow"><ArrowIcon diagonal /></span></a>
    <a href={game.playStoreUrl} className={`button ${styles.lightButton}`} target="_blank" rel="noopener noreferrer" aria-label={en ? "Get Wakppop on Google Play" : "왁뿌팝 Google Play에서 다운로드"}><FaGooglePlay className={styles.storeIcon} aria-hidden="true" />Google Play<span className="button-arrow"><ArrowIcon diagonal /></span></a>
  </div>;

  return <div className={styles.page} lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wakppopStructuredData(locale)).replace(/</g, "\\u003c") }} />
    <nav className={styles.breadcrumb} aria-label={en ? "Breadcrumb" : "현재 위치"}><Link href={base || "/"}>Letpang Studio</Link><span aria-hidden="true">/</span><span>{en ? "Wakppop" : "왁뿌팝"}</span></nav>

    <section className={styles.hero} aria-labelledby="wakppop-title">
      <div className={styles.heroCopy}>
        <p className="eyebrow"><span className="status-dot" /> RELAX. PLAY. A LITTLE EVERY DAY.</p>
        <div className={styles.appIdentity}><Image src={game.iconUrl} alt="" width={52} height={52} priority /><p>{en ? "Wakppop" : "왁뿌팝"}<span>BY LETPANG STUDIO</span></p></div>
        <h1 id="wakppop-title">{en ? <>Squish. Stretch.<br /><span>A little world of play.</span></> : <>꾹, 쭉, 톡.<br /><span>손끝으로 즐기는<br />작은 놀이터.</span></>}</h1>
        <p className={styles.lead}>{en ? "Slime, squishy toys, and keycap clicks. Then one more round of dessert merge or rabbit jumps. Pick the little moment you feel like today." : "말랑이를 누르고, 슬라임을 늘리고, 키캡을 톡톡.\n디저트를 합치고 토끼와 폴짝 뛰기도 해요.\n오늘 끌리는 놀이를 골라보세요."}</p>
        {downloadButtons}<p className={styles.fineprint}>{en ? "Free download · Ads & optional in-app purchases" : "무료 다운로드 · 광고 및 선택형 인앱 구매 포함"}</p>
      </div>
      <figure className={styles.heroArt}>
        <span className={styles.heroWord} aria-hidden="true">squish!</span>
        <div className={styles.screenPair}><Image className={styles.phoneLeft} src={`${media}ice.webp`} alt={toys[0].alt} width={480} height={854} priority sizes="(max-width: 600px) 35vw, 220px" /><Image className={styles.phoneRight} src={`${media}rabbit.webp`} alt={en ? "Real gameplay: the rabbit jumping toward stars" : "별을 모으며 점프하는 토끼 런 실제 플레이 화면"} width={480} height={854} priority sizes="(max-width: 600px) 35vw, 220px" /></div>
        <figcaption><span className="status-dot" />{en ? "REAL APP GAMEPLAY. LITTLE MOMENTS OF JOY." : "실제 앱 플레이 화면 · 취향대로 골라 즐겨요"}</figcaption>
      </figure>
    </section>

    <section className={styles.intro} aria-labelledby="what-is-wakppop"><div><p className="eyebrow">HELLO, WAKPPOP</p><h2 id="what-is-wakppop">{en ? <>What is <br />Wakppop?</> : <>왁뿌팝은 <br />어떤 앱인가요?</>}</h2></div><div><p>{en ? "Wakppop is a mobile playground by Letpang Studio. Enjoy interactive wax balls, slime, squishies and keycap toys, collect marbles, and discover eight mini-games in one app." : "왁뿌팝(Wakppop)은 렛팡 스튜디오가 만든 모바일 놀이 앱입니다. 왁뿌볼·슬라임·말랑이·키캡을 터치와 소리로 즐기고, 구슬을 모으거나 8가지 미니게임에 도전할 수 있어요."}</p><dl className={styles.facts}><div><dt>{en ? "TOYS" : "장난감 놀이"}</dt><dd>{en ? "4 categories" : "4가지 카테고리"}</dd></div><div><dt>{en ? "MINI-GAMES" : "한 판씩 골라요"}</dt><dd>{en ? "8 little adventures" : "8가지 미니게임"}</dd></div><div><dt>{en ? "PLATFORMS" : "만날 수 있어요"}</dt><dd>iOS + Android</dd></div></dl></div></section>

    <section aria-labelledby="toy-heading"><div className="section-heading"><div><p className="eyebrow">01 / TOUCH & SOUND</p><h2 id="toy-heading" className={styles.sectionTitle}>{en ? <>A little tap.<br /><span>A different kind of play.</span></> : <>오늘은 어떤 손놀이?<br /><span>움직임도, 소리도 다르게.</span></>}</h2></div><p className="section-note">{en ? <>Press, stretch, and click.<br />Try a new toy whenever you feel like it.</> : <>꾹 누르고, 쭉 늘리고, 톡톡.<br />마음에 드는 장난감부터 시작해요.</>}</p></div><div className={styles.toyGrid}>{toys.map((toy,index) => <article className={`${styles.toy} ${styles[toy.theme]}`} key={toy.image}><div className={styles.toyVisual}><span aria-hidden="true">0{index+1}</span><Image src={`${media}${toy.image}`} alt={toy.alt} width={480} height={toy.theme === "key" ? 480 : 854} sizes="(max-width: 600px) 80vw, 320px" /></div><div className={styles.toyCopy}><h3>{toy.title}</h3><p>{toy.description}</p></div></article>)}</div>
      <div className={styles.waxRow}><Image src={`${media}wax.webp`} alt={en ? "Wax ball play image with a cloud background" : "구름 배경의 왁뿌볼 플레이 이미지"} width={640} height={360} sizes="(max-width: 600px) 90vw, 420px" /><div><p className="eyebrow">A LITTLE CRUNCH, TOO.</p><h3>{en ? "Turn, press, and crack a wax ball." : "왁뿌볼은 돌려 보고, 바삭하게."}</h3><p>{en ? "Pick a shape and color you like, turn the ball, and press to crack its shell. Sound and vibration can be adjusted in settings." : "좋아하는 색과 모양을 골라 돌려 보고, 꾹 눌러 깨뜨려 보세요. 소리 크기와 진동은 설정에서 조절할 수 있어요."}</p></div></div><p className={styles.caption}>{en ? "Images from local app gameplay and app artwork. Interface may vary by version. Vibration depends on your device." : "실제 플레이 예시와 앱 내 이미지를 사용했습니다. 설치 버전에 따라 화면이 다를 수 있으며, 진동은 기기에 따라 지원됩니다."}</p>
    </section>

    <section aria-labelledby="game-heading"><div className="section-heading"><div><p className="eyebrow">02 / ONE MORE ROUND</p><h2 id="game-heading" className={styles.sectionTitle}>{en ? <>A change of pace.<br /><span>One more little round.</span></> : <>만지다가, 한 판 더.<br /><span>놀이를 바꿔도 즐거워요.</span></>}</h2></div><ClayIcon kind="play" /></div><div className={styles.games}><article className={styles.merge}><Image src={`${media}merge.webp`} alt={en ? "Real dessert merge gameplay" : "디저트를 쏘고 합치는 왁뿌 머지 실제 플레이"} width={480} height={854} sizes="(max-width: 600px) 34vw, 170px" /><div><p className="eyebrow">SHOOT & MERGE</p><h3>{en ? "A sweet little match." : "같은 디저트끼리, 합체!"}</h3><p>{en ? "Aim, shoot, and merge matching desserts in Wakppop Merge. Where will your next one land?" : "같은 디저트를 쏘고 합치는 왁뿌 머지. 다음 디저트를 어디로 보낼지 골라보세요."}</p><a className="text-link" href="https://clip.naver.com/@letpang_studio" target="_blank" rel="noopener noreferrer">{en ? "Watch gameplay" : "실제 플레이 보기"}<ArrowIcon diagonal /></a></div></article><article className={styles.rabbit}><Image src={`${media}rabbit.webp`} alt={en ? "Real rabbit run gameplay" : "토끼가 별을 모으며 뛰는 왁뿌 런 실제 플레이"} width={480} height={854} sizes="(max-width: 600px) 34vw, 170px" /><div><p className="eyebrow">TAP & JUMP</p><h3>{en ? "Hop along, little rabbit." : "톡 두 번이면, 이단 점프!"}</h3><p>{en ? "Collect stars and jump between platforms in Wakppop Run. Tap once to jump, then again for a double jump." : "별을 모으며 발판 사이를 폴짝. 왁뿌 런에서 한 번 누르면 점프, 한 번 더 누르면 이단 점프예요."}</p><a className="text-link" href="https://clip.naver.com/@letpang_studio" target="_blank" rel="noopener noreferrer">{en ? "Watch gameplay" : "실제 플레이 보기"}<ArrowIcon diagonal /></a></div></article></div><div className={styles.gameList}><p>{en ? "Eight ways to play" : "8가지 게임을 골라 즐겨요"}</p><ul>{miniGames.map(name => <li key={name}>{name}</li>)}</ul></div><p className={styles.collectionNote}>{en ? "There is more to discover: collect marbles, decorate, earn achievements, and see your game rankings." : "구슬을 모아 도감에서 확인하고 꾸며보세요. 업적과 게임별 랭킹에서도 나만의 기록을 남길 수 있어요."}</p></section>

    <section className={styles.watch} aria-labelledby="watch-heading"><div><p className="eyebrow">03 / WATCH FIRST</p><h2 id="watch-heading">{en ? "See how it feels." : "어떤 느낌인지, 먼저 보세요."}</h2><p>{en ? "Choose a quick gameplay clip or settle in for app sounds without background music." : "짧은 플레이부터, 배경음악 없이 앱 소리만 담은 긴 영상까지."}</p></div><div className={styles.videoLinks}><a href="https://naver.me/GxrGiX9P" target="_blank" rel="noopener noreferrer"><span>NAVER CLIP · 20s</span><strong>{en ? "Ice, slime & pudding" : "얼음 말랑이·슬라임·푸딩"}</strong><ArrowIcon diagonal /></a><a href="https://youtu.be/FUXaZHbbfpU" target="_blank" rel="noopener noreferrer"><span>YOUTUBE · 12min ASMR</span><strong>{en ? "Just the sounds of play" : "말없이, 앱 소리만"}</strong><ArrowIcon diagonal /></a></div></section>

    <section className={styles.faq} aria-labelledby="faq-heading"><div><p className="eyebrow">BEFORE YOU PLAY</p><h2 id="faq-heading">{en ? <>A few things <br />you might wonder.</> : <>궁금한 점을 <br />먼저 확인하세요.</>}</h2><p>{en ? "Clear answers from Letpang Studio." : "렛팡이 직접 안내해 드려요."}</p></div><div className="support-faq">{wakppopFaq[locale].map(({q,a}) => <details key={q} open><summary>{q}</summary><p>{a}</p></details>)}</div></section>

    <aside className={styles.purchaseNote}><h3>{en ? "Ads and optional purchases" : "광고와 선택형 구매 안내"}</h3><p>{en ? "Banner ads and interstitial ads may appear between game screens. Interstitials are not shown during gameplay. Rewarded ads for extra coins and rubies are optional. Permanent ad removal removes banners and regular interstitials; rewarded ads remain available. Non-consumable purchases support restoration. Pack probabilities are shown in the app." : "하단 배너와 게임 사이 화면 전환에 광고가 표시될 수 있으며, 게임 플레이 중에는 전면 광고를 표시하지 않습니다. 추가 코인·루비 보상 광고는 선택해서 시청합니다. 광고 영구 제거는 배너와 일반 전면 광고를 제거하며, 선택형 보상 광고는 계속 이용할 수 있습니다. 비소모성 구매는 복원을 지원하고, 팩별 획득 확률은 앱에서 확인할 수 있습니다."}</p><p className={styles.caption}>{en ? "Based on public store descriptions checked on October 24, 2026. Features and terms may change with updates. Check your store for current information." : "2026년 10월 24일 공개 스토어 설명 기준입니다. 기능과 이용 조건은 업데이트에 따라 바뀔 수 있으니 스토어의 최신 안내를 확인해 주세요."}</p></aside>

    <section className={styles.download} aria-labelledby="download-heading"><Image src={game.iconUrl} alt="" width={82} height={82} sizes="82px" /><p className="eyebrow">YOUR NEXT LITTLE HAPPY MOMENT.</p><h2 id="download-heading">{en ? "A little play, your way." : "오늘의 놀이는, 왁뿌팝에서."}</h2><p>{en ? "Find Wakppop on the App Store and Google Play." : "앱스토어·구글플레이에서 ‘왁뿌팝’을 검색해도 찾을 수 있어요."}</p>{downloadButtons}<p className={styles.fineprint}>{en ? "Free download · Ads & optional in-app purchases" : "무료 다운로드 · 광고 및 선택형 인앱 구매 포함"}</p></section>
    <div className={styles.bottomLinks}><Link href={`${base}/#games`} className="text-link">← {en ? "All our games" : "렛팡의 다른 게임"}</Link><Link href={`${base}/privacy`} className="text-link">{en ? "Privacy policy" : "개인정보 처리방침"}</Link><Link href={`${base}/support`} className="text-link">{en ? "Support" : "고객지원"}</Link></div>
  </div>;
}

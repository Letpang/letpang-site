import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function HangulPopFeature({ locale = "ko" }: { locale?: "ko" | "en" }) {
  const en = locale === "en";
  const game = SITE.games.hangulPop;
  return (
    <section className="next-world hangul-launch" aria-labelledby="hangul-pop-heading">
      <Image className="hangul-launch-icon" src={game.iconUrl} alt={en ? "Hangul Pop mascot" : "한글팝 모자 캐릭터"} width={160} height={160} sizes="(max-width: 760px) 100px, 160px" />
      <div className="next-copy">
        <p className="eyebrow">HANGUL POP / EVERYDAY KOREAN</p>
        <h2 id="hangul-pop-heading">{en ? "A little Korean. A real conversation." : "외운 한국어를, 내 말로 만드는 시간."}</h2>
        <p>{en ? "Pick a situation from 100 released scenes. Listen, explore verb forms, and try saying it yourself." : "100개 공개 장면에서 필요한 상황을 골라요. 대화를 듣고, 활용형을 익히고, 직접 말해 보세요."}</p>
        <ul className="hangul-launch-features">
          {(en ? ["Situation-based conversations", "Conjugation practice", "Speaking & vocabulary review"] : ["상황별 대화", "활용형 연습", "말하기·단어 복습"]).map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="hangul-match-note">{en ? "Speaking match compares speech-recognized words with the target sentence, not native pronunciation. Free and paid features are available." : "말하기 일치율은 원어민 발음 점수가 아닌, 음성으로 인식된 문장과 목표 문장의 비교 결과입니다. 무료·유료 기능을 제공합니다."}</p>
        <div className="store-links">
          <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={en ? "Hangul Pop on the App Store" : "한글팝 App Store에서 보기"}><FaApple aria-hidden="true" />App Store<ArrowUpRight aria-hidden="true" /></a>
          <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={en ? "Hangul Pop on Google Play" : "한글팝 Google Play에서 보기"}><FaGooglePlay aria-hidden="true" />Google Play<ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

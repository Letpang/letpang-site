import HanjaPrivacyPage from "@/app/games/hanja-explorer/privacy/page";
import { englishLegalLinks } from "@/components/EnglishLegal";
export default function EnglishHanjaPrivacy() { return englishLegalLinks(HanjaPrivacyPage()); }
export const metadata = { title: "Hanja Pop privacy policy", alternates: { canonical: "/en/games/hanja-explorer/privacy" } };

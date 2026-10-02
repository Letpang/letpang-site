import PrivacyPage from "@/app/privacy/page";
import { englishLegalLinks } from "@/components/EnglishLegal";
export default function EnglishPrivacy() { return englishLegalLinks(PrivacyPage()); }
export const metadata = { title: "Privacy policy", alternates: { canonical: "/en/privacy", languages: { ko: "/privacy", en: "/en/privacy" } } };

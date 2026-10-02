import TermsPage from "@/app/terms/page";
import { englishLegalLinks } from "@/components/EnglishLegal";
export default function EnglishTerms() { return englishLegalLinks(TermsPage()); }
export const metadata = { title: "Terms of use", alternates: { canonical: "/en/terms", languages: { ko: "/terms", en: "/en/terms" } } };

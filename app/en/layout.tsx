import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Letpang Studio — Little games, happy moments", template: "%s | Letpang Studio" },
  description: "Learn a little, play a lot, and take a break with Hanja Pop, Wakppop, Color Sense, and Hangul Street.",
  openGraph: { locale: "en_US", title: "Letpang Studio", description: "Little games for learning, playing, and taking a break." },
};
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en" className="locale-en">{children}</div>;
}

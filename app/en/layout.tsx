import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Letpang Studio — Little games, happy moments", template: "%s | Letpang Studio" },
  description: "Learn a little, play a lot, and take a break with Hangul Pop, Hanja Pop, Wakppop, and Color Sense.",
  openGraph: {
    locale: "en_US",
    title: "Letpang Studio",
    description: "Little games for learning, playing, and taking a break.",
    images: [{
      url: "/art/letpang-garden-share.jpg",
      width: 1200,
      height: 630,
      alt: "Six Letpang characters playing in a miniature Seoul garden",
    }],
  },
};
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en" className="locale-en">{children}</div>;
}

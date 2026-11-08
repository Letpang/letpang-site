import type { Metadata } from "next";

const shareDescription = "Hangul Pop · Hangul Pop Travel · Hanja Pop · Wakppop · Gacha Pop · Color Sense";

export const metadata: Metadata = {
  title: { default: "Letpang Studio — Little games, happy moments", template: "%s | Letpang Studio" },
  description: "Learn a little, play a lot, and take a break with Hangul Pop, Hanja Pop, Wakppop, and Color Sense.",
  openGraph: {
    locale: "en_US",
    title: "Letpang Studio",
    description: shareDescription,
    images: [{
      url: "/art/letpang-garden-share.jpg",
      width: 1200,
      height: 630,
      alt: "Six Letpang characters playing in a miniature Seoul garden",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letpang Studio",
    description: shareDescription,
    images: ["/art/letpang-garden-share.jpg"],
  },
};
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en" className="locale-en">{children}</div>;
}

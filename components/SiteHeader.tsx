// components/SiteHeader.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const japanese = pathname === "/ja/games/wakppop";
  const base = english ? "/en" : "";
  const switchPath = english ? (pathname.slice(3) || "/") : japanese ? "/en/games/wakppop" : `/en${pathname === "/" ? "" : pathname}`;
  useEffect(() => { document.documentElement.lang = japanese ? "ja" : english ? "en" : "ko"; }, [english, japanese]);
  
  const navItems = [
    { href: `${base}/#games`, label: english ? "Games" : "게임" },
    { href: `${base}/about`, label: english ? "About" : "소개" },
    { href: `${base}/support`, label: english ? "Support" : "고객지원" },
  ];

  const externalItems = [
    { href: "https://tools.letpang.com", label: "Letpang Docs" },
  ];

  return (
    <div className="nav">
      <Link href={base || "/"} className="brand" aria-label="Letpang Studio">
        <div className="brand-text">
          <Image src="/art/letpang-logo-v2.webp" alt="Letpang Studio" width={274} height={100} className="brand-logo-img" priority />
        </div>
      </Link>

      <nav className="navLinks" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
        {externalItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external"
          >
            {item.label}
          </a>
        ))}
        <Link href={switchPath} className="language-switch" lang={english ? "ko" : "en"} aria-label={english ? "한국어로 보기" : "View in English"}>{english ? "KO" : "EN"}</Link>
        <Link href={japanese ? "/games/wakppop" : "/ja/games/wakppop"} className="language-switch" lang={japanese ? "ko" : "ja"} aria-label={japanese ? "왁뿌팝 한국어 소개" : "ワップポップの日本語紹介"}>{japanese ? "KO" : "JP"}</Link>
      </nav>
    </div>
  );
}

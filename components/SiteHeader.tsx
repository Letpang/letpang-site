// components/SiteHeader.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/#games", label: "게임" },
    { href: "/about", label: "소개" },
    { href: "/support", label: "고객지원" },
  ];

  const externalItems = [
    { href: "https://tools.letpang.com", label: "Letpang Docs" },
  ];

  return (
    <div className="nav">
      <Link href="/" className="brand" aria-label="Letpang Studio">
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
      </nav>
    </div>
  );
}

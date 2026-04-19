// components/SiteHeader.tsx
"use client";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/about", label: "소개" },
    { href: "/support", label: "고객지원" },
    { href: "/privacy", label: "개인정보" },
    { href: "/terms", label: "이용약관" },
  ];

  return (
    <div className="nav">
      <Link href="/" className="brand" aria-label="Letpang Studio">
        <div className="brand-text">
          <img src="/logo.png" alt="Letpang Studio Logo" className="brand-logo-img" />
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
      </nav>
    </div>
  );
}
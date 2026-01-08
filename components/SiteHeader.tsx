// components/SiteHeader.tsx
"use client";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <div className="nav">
      <Link href="/" className="brand" aria-label={SITE.name}>
        <span className="logo-icon">🎮</span>
        {SITE.name}
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
// components/SiteHeader.tsx
"use client";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <div className="nav">
      <Link href="/" className="brand" aria-label="Letpang Studio">
        <svg 
          className="logo-icon" 
          viewBox="0 0 32 32" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M 22 2 V 30" />
          <path d="M 2 16 H 22" />
          <path d="M 7 5 L 22 16" />
          <path d="M 7 27 L 22 16" />
        </svg>
        <div className="brand-text">
          <span>letpang</span>
          <span>studio</span>
        </div>
      </Link>

      <nav className="navLinks" aria-label="Primary">
        {navItems.map((item) => {
          if (item.href === "/explore") {
            return (
              <a 
                key={item.href} 
                href="/explore/"
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </a>
            );
          }
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
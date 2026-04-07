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
        <div className="brand-text">
          <span className="brand-letpang">LETPANG.</span>
          <div className="brand-studio-wrapper">
            <span className="brand-studio">STUDIO</span>
          </div>
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
// components/SiteFooter.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  const pathname = usePathname();
  const en = pathname === "/en" || pathname.startsWith("/en/");
  const base = en ? "/en" : "";
  return (
    <footer className="footer-content">
      <div className="footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">
            <Image src="/art/letpang-logo-v2.webp" alt={SITE.name} width={274} height={100} className="footer-logo-img" />
          </h3>
          <p className="footer-desc">{en ? "A small indie studio making games with a little warmth." : "작지만 따뜻한 게임을 만드는 인디 스튜디오입니다."}</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">{en ? "Explore" : "바로가기"}</h4>
          <nav className="footer-links">
            <Link href={`${base}/about`}>{en ? "About the studio" : "스튜디오 소개"}</Link>
            <Link href={`${base}/support`}>{en ? "Support" : "고객지원"}</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">{en ? "Legal" : "법적 고지"}</h4>
          <nav className="footer-links">
            <Link href={`${base}/privacy`}>{en ? "Privacy policy" : "개인정보 처리방침"}</Link>
            <Link href={`${base}/terms`}>{en ? "Terms of use" : "이용약관"}</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">{en ? "Get in touch" : "문의"}</h4>
          <a href={`mailto:${SITE.email}`} className="footer-email">
            {SITE.email}
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}

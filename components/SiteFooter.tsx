// components/SiteFooter.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer-content">
      <div className="footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="logo-icon">🎮</span>
            {SITE.name}
          </h3>
          <p className="footer-desc">작지만 따뜻한 게임을 만드는 인디 스튜디오입니다.</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">바로가기</h4>
          <nav className="footer-links">
            <Link href="/about">스튜디오 소개</Link>
            <Link href="/support">고객지원</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">법적 고지</h4>
          <nav className="footer-links">
            <Link href="/privacy">개인정보 처리방침</Link>
            <Link href="/terms">이용약관</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">문의</h4>
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
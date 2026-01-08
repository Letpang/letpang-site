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
          <p className="footer-desc">Building delightful indie games for everyone.</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Links</h4>
          <nav className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/support">Support</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Legal</h4>
          <nav className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
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
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="header">
          <div className="container">
            <SiteHeader />
          </div>
        </div>

        <main className="container main">{children}</main>

        <div className="footer">
          <div className="container">
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // components/SiteHeader.tsx\
import Link from "next/link";\
import \{ SITE \} from "@/lib/site";\
\
export default function SiteHeader() \{\
  return (\
    <div className="nav">\
      <Link href="/" className="brand" aria-label=\{SITE.name\}>\
        \{SITE.name\}\
      </Link>\
\
      <nav className="navLinks" aria-label="Primary">\
        <Link href="/about">About</Link>\
        <Link href="/support">Support</Link>\
        <Link href="/privacy">Privacy</Link>\
        <Link href="/terms">Terms</Link>\
      </nav>\
    </div>\
  );\
\}\
}
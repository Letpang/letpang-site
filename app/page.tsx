{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // app/page.tsx\
import Link from "next/link";\
import \{ SITE \} from "@/lib/site";\
\
export default function HomePage() \{\
  return (\
    <>\
      <h1 className="h1">\{SITE.name\}</h1>\
      <p className="p">\
        We build and publish indie games. This site provides basic company information and support links.\
      </p>\
\
      <div className="card">\
        <div className="h2">Quick Links</div>\
        <p className="p">\
          Email: <a href=\{`mailto:$\{SITE.email\}`\}>\{SITE.email\}</a>\
        </p>\
        <div style=\{\{ display: "flex", gap: 10, flexWrap: "wrap" \}\}>\
          <Link className="btn" href="/about">About</Link>\
          <Link className="btn" href="/support">Support</Link>\
          <Link className="btn" href="/privacy">Privacy Policy</Link>\
          <Link className="btn" href="/terms">Terms</Link>\
        </div>\
      </div>\
    </>\
  );\
\}\
}
import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// 인스타그램 등 프로필 링크용. 아이폰·아이패드는 App Store, 그 밖은 Google Play 로 보낸다.
const apps: Record<string, { appStoreUrl: string; playStoreUrl: string }> = {
  hangulpop: SITE.games.hangulPop,
  hanjapop: SITE.games.hanja,
  wakppop: SITE.games.wakppop,
  colorsense: SITE.games.colorSense,
  gachapop: SITE.games.gachaPop,
};

export function GET(request: NextRequest, { params }: { params: Promise<{ app: string }> }) {
  return params.then(({ app }) => {
    const game = apps[app.toLowerCase()];
    const ua = request.headers.get("user-agent") || "";
    const apple = /iPhone|iPad|iPod|Macintosh/i.test(ua);
    const target = game && (apple ? game.appStoreUrl : game.playStoreUrl);
    return NextResponse.redirect(target || new URL("/#games", request.url), 302);
  });
}

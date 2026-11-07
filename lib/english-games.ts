import { SITE } from "@/lib/site";
export const englishGames = [SITE.games.hangulPop, SITE.games.hangulPopTravel, SITE.games.hanja, SITE.games.wakppop, SITE.games.gachaPop, SITE.games.colorSense].map(game => ({
  ...game, titleKr: game.title, descriptionKr: game.description,
  appStoreUrl: game.id === "hangulpop-travel" ? game.appStoreUrl.replace("/kr/", "/us/") : game.appStoreUrl,
  path: "path" in game ? `/en${game.path}` : undefined,
}));

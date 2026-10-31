import { SITE } from "@/lib/site";
export const englishGames = [SITE.games.hangulPop, SITE.games.hanja, SITE.games.wakppop, SITE.games.colorSense].map(game => ({
  ...game, titleKr: game.title, descriptionKr: game.description,
  path: "path" in game ? `/en${game.path}` : undefined,
}));

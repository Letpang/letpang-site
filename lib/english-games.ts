import { SITE } from "@/lib/site";
export const englishGames = [SITE.games.hanja, SITE.games.wakppop, SITE.games.colorSense, SITE.games.hangulStreet].map(game => ({
  ...game, titleKr: game.title, descriptionKr: game.description,
  path: "path" in game ? `/en${game.path}` : undefined,
}));

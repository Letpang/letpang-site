// lib/site.ts
export const SITE = {
  name: "Letpang Studio",
  description: "Indie studio focused on game development.",
  email: "hello@letpang.com",
  games: {
    hanja: {
      id: "hanja-explorer",
      title: "Joyful Hanja Explorer",
      titleKr: "즐거운 한자탐험",
      description: "A fun and interactive way to learn Hanja through space exploration.",
      descriptionKr: "우주 탐험과 함께 즐겁게 배우는 어린이 한자 학습 게임",
      path: "/games/hanja-explorer",
      privacyPath: "/games/hanja-explorer/privacy",
      isNew: true,
    },
    pastelOthello: {
      id: "pastel-othello",
      title: "Pastel Othello",
      titleKr: "파스텔 오셀로",
      description: "A calm Othello game played with pink and sky-blue stones. Simple rules, AI support, and soothing pastel design.",
      descriptionKr: "핑크와 하늘색 돌로 즐기는 차분한 오셀로 게임. 간단한 규칙으로 누구나 쉽게 즐길 수 있으며 AI 대전을 지원합니다.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dh.pastelothello",
      icon: "🔵",
    },
    colorSense: {
      id: "color-sense",
      title: "Color Sense",
      titleKr: "색감 능력 테스트",
      description: "How accurate are your eyes? A color training game where you find the one tile with a subtly different hue.",
      descriptionKr: "당신의 눈은 얼마나 정확한가요? 수많은 타일 중 미세하게 다른 색의 타일을 찾는 컬러 트레이닝 게임.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dh.chroma",
      icon: "🎨",
    },
  }
};
// lib/site.ts
export const SITE = {
  name: "Letpang Studio",
  description: "감성적인 캐주얼 모바일 게임을 만드는 인디 게임 스튜디오",
  email: "hello@letpang.com",
  games: {
    hanja: {
      id: "hanja-explorer",
      title: "Hanja Pop",
      titleKr: "한자팝",
      description: "A 3D Hanja learning game where you shoot and match to learn in a fun way.",
      descriptionKr: "쏘고 맞추며 재미있게 배우는 3D 한자 학습 게임",
      path: "/games/hanja-explorer",
      privacyPath: "/games/hanja-explorer/privacy",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.soujinne.hanjaexplorer",
      appStoreUrl: "https://apps.apple.com/kr/app/id6762037956",
      isNew: true,
    },
    pastelOthello: {
      id: "pastel-othello",
      title: "Pastel Reversi",
      titleKr: "오셀로: Pastel Reversi",
      description: "A calm Othello game played with pink and sky-blue stones. Simple rules, AI support, and soothing pastel design.",
      descriptionKr: "핑크와 하늘색 돌로 즐기는 차분한 오셀로 게임. 간단한 규칙으로 누구나 쉽게 즐길 수 있으며 AI 대전을 지원합니다.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dh.pastelothello",
      appStoreUrl: "https://apps.apple.com/kr/app/id6755481318",
      icon: "🔵",
    },
    colorSense: {
      id: "color-sense",
      title: "Color Sense",
      titleKr: "색감 능력 테스트",
      description: "How accurate are your eyes? A color training game where you find the one tile with a subtly different hue.",
      descriptionKr: "당신의 눈은 얼마나 정확한가요? 수많은 타일 중 미세하게 다른 색의 타일을 찾는 컬러 트레이닝 게임.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dh.chroma",
      appStoreUrl: "https://apps.apple.com/kr/app/id6756197799",
      icon: "🎨",
    },
  }
};
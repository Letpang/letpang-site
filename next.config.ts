import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Ignore TS error for undocumented turbopack option
  turbopack: {
    root: process.cwd(),
  },
  // 앱이 capacitor://localhost 에서 이 파일을 fetch 한다. 다른 오리진이므로
  // Access-Control-Allow-Origin 이 없으면 브라우저가 응답을 막고, 앱 쪽
  // catch 가 그것을 조용히 삼켜서 업데이트 안내가 영영 뜨지 않는다.
  // 버전 번호는 공개 정보이므로 * 로 열어도 된다.
  async headers() {
    return [
      {
        source: "/version.json",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;

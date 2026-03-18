export default function ExplorePage() {
  // 💡 아래 따옴표 안에 이전에 만드신 사진 화면 사이트의 Vercel 주소를 넣어주세요! 💡
  // 예: "https://photo-site.vercel.app"
  const PHOTO_SITE_URL = "https://www.letpang.com/";

  return (
    <div style={{ width: "100%", height: "calc(100vh - 80px)", margin: 0, padding: 0 }}>
      <iframe
        src={PHOTO_SITE_URL}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Explore Photo Screen"
        allowFullScreen
      />
    </div>
  );
}

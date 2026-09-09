// 앱이 "지금 최신 버전이 뭔가요" 하고 물어보는 자리.
//
// 왜 public/version.json 이 아니라 라우트인가. (2026-09-09)
//   앱은 capacitor://localhost 에서 이 주소를 fetch 한다. letpang.com 과는
//   다른 오리진이라 Access-Control-Allow-Origin 이 없으면 브라우저가 응답을
//   막고, 앱 쪽 catch 가 그 오류를 조용히 삼킨다. 그래서 강제 업데이트 창이
//   한 번도 뜨지 않았다.
//   next.config.ts 의 headers() 로 붙여 봤지만 배포된 정적 파일에는 먹지
//   않았다(버전 번호는 바뀌었는데 헤더는 그대로였다). 라우트에서 직접 헤더를
//   붙이면 배포 방식과 무관하게 확실하다.
//
// 버전을 올릴 때는 옆의 data.json 만 고치면 된다.
// 스토어에 실제로 올라간 뒤에 올릴 것. 먼저 올리면 아직 받을 수 없는 버전으로
// 사용자를 몰아넣는다.
import 버전 from './data.json';

export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify(버전, null, 2) + '\n', {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // 버전 번호는 공개 정보다. 누가 읽어도 상관없다.
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

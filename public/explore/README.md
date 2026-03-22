# 이애주, 바람의 형상 — 인터랙티브 사진 갤러리

rauschenberg100.org/explore와 동일한 방식의 Three.js 기반 드래그 인터랙티브 콜라주 갤러리입니다.

## 폴더 구조

```
aeju-gallery/
├── index.html       ← 메인 페이지 (이 파일을 브라우저에서 열면 됩니다)
├── photos.js        ← 사진 데이터 (자동 생성됨)
├── README.md        ← 이 파일
└── images/          ← 사진 파일을 이 폴더에 넣으세요
    ├── AEJ-R-000019-1145.jpg
    ├── AEJ-R-000019-1192.jpg
    └── ... (100장)
```

## 사용 방법

1. `images/` 폴더를 만들고, 리사이즈된 사진 100장을 모두 넣으세요.
2. `index.html`을 브라우저에서 열거나, 웹 서버에 업로드하세요.

> **주의**: 로컬에서 직접 `index.html`을 열면 보안 정책으로 이미지가 안 보일 수 있습니다.  
> 로컬 테스트 시 아래 명령어로 간단한 서버를 실행하세요:
> ```bash
> python3 -m http.server 8080
> ```
> 그 후 브라우저에서 `http://localhost:8080` 접속

## 기능

- **드래그**: 마우스 또는 터치로 3D 공간을 자유롭게 탐색
- **자동 회전**: 처음 로드 시 자동으로 천천히 회전
- **사진 클릭**: 클릭하면 오른쪽에 상세 패널이 열림
- **URL 공유**: 특정 사진을 열면 URL에 `?photo=파일명`이 추가되어 공유 가능
- **반응형**: 모바일/태블릿 지원

## 기술 스택

- [Three.js r128](https://threejs.org/) — 3D 렌더링
- [CSS2DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer) — HTML 요소를 3D 공간에 배치
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) — 드래그/회전 컨트롤
- [TWEEN.js](https://github.com/tweenjs/tween.js) — 카메라 애니메이션
- [Pretendard](https://github.com/orioncactus/pretendard) — 폰트

## 커스터마이징

`index.html` 상단의 설정값을 변경할 수 있습니다:

```javascript
const IMAGES_DIR = 'images/';   // 사진 폴더 경로
```

제목, 색상 등은 CSS `:root` 변수에서 변경:

```css
:root {
  --orange: #FF4500;   /* 강조 색상 */
}
```

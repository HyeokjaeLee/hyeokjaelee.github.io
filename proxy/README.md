# GitHub OAuth CORS Proxy

정적 블로그의 좋아요 기능이 GitHub OAuth Device Flow로 토큰을 발급받을 때 쓰는 중계 프록시다.
Cloudflare Worker로 동작하며 별도 서버 없이 무료로 운영된다.

## 1. 목적

GitHub OAuth 토큰 교환 엔드포인트(`https://github.com/login/device/code`, `https://github.com/login/oauth/access_token`)는 브라우저에서 직접 호출하면 CORS 정책으로 차단된다. 그래서 토큰 교환 두 건만 중계해 주는 얇은 프록시가 필요하다.

주의: 공개 저장소의 반응(reactions) API는 CORS가 허용되므로 브라우저에서 직접 호출한다. 이 프록시가 중계하는 건 오직 위 두 토큰 교환 엔드포인트뿐이다.

## 2. 배포

Cloudflare 계정이 필요하다.

```bash
cd proxy
npx wrangler deploy
```

배포가 끝나면 아래 형태의 Worker URL이 발급된다. 이 URL을 기록해 둔다.

```
https://hyeokjaelee-github-oauth-proxy.<account>.workers.dev
```

> 최초 배포 시 `npx wrangler login`으로 Cloudflare 인증을 한 번 마쳐야 한다.

## 3. GitHub OAuth App 생성

1. <https://github.com/settings/applications/new> 에서 새 OAuth App을 생성한다.
   - **Homepage URL**: `https://hyeokjaelee.github.io`
   - **Authorization callback URL**: `https://hyeokjaelee.github.io`
2. 생성 후 앱 설정의 **Settings > Device flow**에서 **Enable**을 켠다. Device Flow 활성화는 필수다.
3. 앱 페이지에 표시되는 **client_id**를 복사해 둔다.

> 이 프록시는 client_secret을 다루지 않는다. client_id만 브라우저가 요청 본문으로 보낸다.

## 4. 블로그 환경변수 연결

블로그 루트의 `.env`에 아래 두 값을 추가한다.

```env
PUBLIC_GH_LIKE_CLIENT_ID=<3에서 확보한 client_id>
PUBLIC_GH_LIKE_PROXY_URL=<2에서 발급된 Worker URL>
```

두 값 중 하나라도 비어 있으면 블로그 좋아요 기능은 localStorage 폴백 모드로 동작한다(서버 동기화 없이 로컬에만 저장).

> 프로덕션(GitHub Pages)에서는 로컬 `.env` 대신 GitHub 리포지토리의 **Settings → Secrets and variables → Actions**에 같은 이름(`PUBLIC_GH_LIKE_CLIENT_ID`, `PUBLIC_GH_LIKE_PROXY_URL`)으로 등록한다. 배포 워크플로우(`.github/workflows/deploy.yml`)가 빌드 시 이 값을 주입한다. 두 시크릿을 등록하기 전까지 배포되는 사이트는 폴백 모드로 동작한다.

## 5. 보안 노트

- 프록시는 client_secret이나 액세스 토큰을 저장하지 않는다. 모든 민감 정보는 브라우저 메모리에만 존재한다.
- 중계 대상은 토큰 교환 엔드포인트 두 개로 고정되어 있고, 그 외 경로는 `404`로 응답한다.
- 공개 저장소 반응 API는 프록시 없이 브라우저에서 직접 호출한다.

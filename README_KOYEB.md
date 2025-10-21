# Koyeb (Buildpack) Ready — No Docker

이 폴더를 GitHub에 그대로 push 후 Koyeb에서 Buildpack 방식으로 배포하세요.

## 구성
- site/        : 정적 파일(index.html, assets, models ...)
- package.json : Node (Express) 앱 정의
- server.js    : 정적 파일 서빙 (PORT 환경변수 사용)
- Procfile     : web 프로세스 지정 (node server.js)

## 로컬 테스트
npm install --production
npm start
# http://localhost:8080

## Koyeb 배포 (Buildpack)
1) 이 디렉터리 자체를 GitHub 리포지토리로 푸시
2) Koyeb에서 Create App → GitHub 리포 선택
3) Builder: Buildpack (자동 감지)
4) Service Type: Web, 포트는 Koyeb가 자동으로 PORT를 주입 (server.js는 그 값을 사용)
5) Deploy

팁: 정적 경로는 /site 하위입니다. HTML의 상대경로가 깨지면 경로를 점검하세요.

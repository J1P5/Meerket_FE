# 🐱 meerket

![image](https://github.com/user-attachments/assets/b569f7f9-11bf-4808-b605-a586bdfaa226)

<div align="center">

[![백엔드 레포지토리](https://img.shields.io/badge/백엔드_레포지토리_바로가기-ffffff?style=flat-square&color=777777)](https://github.com/prgrms-web-devcourse-final-project/WEB1_1_J1P5_BE)

[![배포링크](https://img.shields.io/badge/배포링크-ffffff?style=flat-square&color=000000)](https://meerket.vercel.app/)
[![스토리북](https://img.shields.io/badge/스토리북-ffffff?style=flat-square&logo=storybook&logoColor=ffffff&labelColor=FF4785&color=FF4785)](https://meerket-storybook.vercel.app/)
[![시연영상](https://img.shields.io/badge/시연영상-ffffff?style=flat-square&logo=youtube&logoColor=ffffff&labelColor=FF0000&color=FF0000)](https://www.youtube.com/watch?v=SZBPjolv118)

</div>

## 📋 프로젝트 소개

중고 물품 처분에 대해 고민하거나 제 값을 주고 팔기 어려운 물품이 있던 경험이 있으신가요?
저희가 개발하려는 서비스는 중고 거래 경매 서비스입니다.

### 💡 기획 배경

- **리커머스(리셀 커머스) 시장의 확대**로 인한 중고 거래 시장의 호황기 (25년 43조원 규모 추정)
- 중고 물품 구매 시 **선착순의 가치가 큰 것에 대한 불편함**
- 중고 물품 처분에 있어 물품에 대한 **가치 판단의 애매함**

  **➡ 경매 시스템을 도입하여 이러한 불편함 해소**

### 🎯 주요 기능

- **실시간 경매 시스템**

  - 실시간 입찰 시스템으로 즉각적인 가격 변동 확인
  - 경매 종료 시 자동 알림 및 낙찰 처리
  - 카테고리별 경매 내역 조회 및 필터링
  - 물품 정보 등록 및 수정 기능

- **지도 기반 거래 시스템**

  - GPS 기반 동네 인증으로 신뢰성 확보
  - 사용자 지정 거래 희망 장소 설정
  - 현재 위치 기반 주변 거래 물품 실시간 검색
  - 지도에서 직접 거래 위치 확인 및 선택

- **실시간 채팅**

  - 경매 낙찰 시 즉각적으로 1:1 소통 가능
  - 채팅방 목록을 판매, 구매, 안 읽은 채팅방으로 구분하여 쉽게 확인

- **사용자 관리**

  - 카카오, 네이버 소셜 로그인 지원
  - 프로필 정보 등록 및 관리
  - 판매/구매 내역 조회
  - 불편한 사용자 차단 및 관리 기능

## 🛠 기술 스택

### Frontend

<div align="center">

<!-- Frontend Technologies -->
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/typescript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
<br>
<img src="https://img.shields.io/badge/zustand-FF7F00?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/react_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/react_hook_form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
<img src="https://img.shields.io/badge/stompjs-000000?style=for-the-badge&logo=stomp&logoColor=white">
<br>
<img src="https://img.shields.io/badge/emotion-5A67D8?style=for-the-badge&logo=emotion&logoColor=white">
<img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
<br>
<img src="https://img.shields.io/badge/yarn-2C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<br>
<img src="https://img.shields.io/badge/github%20actions-2088FF.svg?style=for-the-badge&logo=github-actions&logoColor=white">
</div>

## 📁 프로젝트 구조

```
src/
├── assets/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── constants/
├── hooks/
├── pages/
├── services/
├── stores/
├── styles/
├── types/
└── utils/
```

## 🎨 서비스 스크린샷

| 페이지           | 스크린샷                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 메인 페이지      | <img src="https://github.com/user-attachments/assets/69a42b7b-d37b-4955-87d7-b6f5e0a5a3db" width="200" height="355"> <img src="https://github.com/user-attachments/assets/ff250a01-de65-4656-8b09-ac821f4a7a7c" width="200" height="355"> |
| 상세 페이지      | <img src="https://github.com/user-attachments/assets/11d35281-32a1-4aff-9931-3495dbaed8fd" width="200" height="355"> <img src="https://github.com/user-attachments/assets/f2bff470-7685-4e7b-92e0-d6b7c99e4108" width="200" height="355"> |
| 물품 등록 페이지 | <img src="https://github.com/user-attachments/assets/dfbbc7de-1d79-4796-8e78-1142629088bd" width="200" height="355"> <img src="https://github.com/user-attachments/assets/8b56cd62-40a8-4c10-9e3d-a3fd80dee8e4" width="200" height="355"> |
| 채팅 페이지      | <img src="https://github.com/user-attachments/assets/bfecfaf7-6c8e-4a8e-a2b1-1de7e01dee64" width="200" height="355"> <img src="https://github.com/user-attachments/assets/4202d6df-f469-4a35-851b-228ce81cbb89" width="200" height="355"> |
| 지도 페이지      | <img src="https://github.com/user-attachments/assets/18d9fbc5-9a0b-4074-b17e-2ec6135bf2e2" width="200" height="355"> <img src="https://github.com/user-attachments/assets/941fce31-45dc-4838-ab8c-dbdea4e78408" width="200" height="355"> |
| 마이 페이지      | <img src="https://github.com/user-attachments/assets/3e72d681-b2e0-4945-9cbd-3d4d74f71618" width="200" height="355">                                                                                                                      |
| 검색 결과 페이지 | <img src="https://github.com/user-attachments/assets/31d9ee80-e4e7-428c-a475-7e4f01f5ce50" width="200" height="355">                                                                                                                      |

## 👥 팀원 소개

### Frontend

|             <img src="https://github.com/JW-Ahn0.png" width="150" />              |                          <img src="https://github.com/ppyom.png" width="150" />                           |                         <img src="https://github.com/y0unj1NoH.png" width="150" />                         |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
|                       [안준우](https://github.com/JW-Ahn0)                        |                                    [이예진](https://github.com/ppyom)                                     |                                   [노윤지](https://github.com/y0unj1NoH)                                   |
| - 메인 및 시세조회 페이지 <br>- 실시간 채팅 시스템 <br>- 거래 내역 및 검색 페이지 | - 상세 페이지 <br>(실시간 입찰 시스템)<br>- 소셜 로그인 <br>- 사용자 인증 및 권한 관리<br>- 프로젝트 세팅 | - 지도 관련 서비스<br>(동네 인증, 거래 희망 장소 선택) <br>- 경매 물품 등록 및 수정 <br>- 차단 사용자 관리 |

### Backend

| <img src="https://github.com/Icecoff22.png" width="150" /> | <img src="https://github.com/sunghyun0610.png" width="150" /> | <img src="https://github.com/macmorning0116.png" width="150" /> |
| :--------------------------------------------------------: | :-----------------------------------------------------------: | :-------------------------------------------------------------: |
|           [정승주](https://github.com/Icecoff22)           |           [문성현](https://github.com/sunghyun0610)           |           [김예찬](https://github.com/macmorning0116)           |
| - 사용자, 인증, 차단, 신고 기능 개발 <br>- 공간 데이터 정제 | - 경매물품 및 댓글 기능 개발 <br>- 입찰 기능 개발 | - 실시간 채팅 및 입찰 기능 개발 <br>- FCM 알림 기능 개발 |

## 📅 개발 기간

- 기획: 2024.11.11 ~ 2024.11.15
- 개발: 2024.11.18 ~ 2025.01

## 🛠 로컬 개발 환경 설정

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 스토리북 실행
yarn storybook

# 빌드
yarn build
```

## 📝 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 환경 변수를 설정해주세요:

```env
# ************************************************* #
#  This is an example env file for meerket frontend  #
# ************************************************* #

# backend server
VITE_SERVER_URL=your_backend_server_url
VITE_WEBSOCKET_URL=your_websocket_url

# map service
VITE_NAVER_MAP_CLIENT_ID=your_naver_map_client_id

# firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_VAPID_KEY=your_firebase_vapid_key

# oauth
VITE_CLIENT_URL=your_client_url
VITE_OAUTH_KAKAO_KEY=your_kakao_oauth_key
VITE_OAUTH_NAVER_KEY=your_naver_oauth_key
```

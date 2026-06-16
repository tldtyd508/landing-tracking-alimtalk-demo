# Landing Tracking Alimtalk Demo

랜딩페이지 신청 폼 제출 이후 알림톡 발송과 광고 전환 이벤트가 실행되는 구조를 보여주는 데모입니다. 실제 API 키 없이 mock 함수로 동작합니다.

## Portfolio Summary

랜딩페이지 신청 폼 제출 이후 알림톡 발송과 광고 전환 이벤트가 실행되는 CRM/마케팅 연동 데모입니다. 실제 프로젝트에서는 카카오 알림톡 API, Meta Pixel, GA4, Google Ads 전환 추적으로 확장할 수 있습니다.

- 업무 범위: 신청 폼, 외부 API 연동, 광고 전환 추적
- 적용 분야: CRM, 마케팅 페이지, 광고 성과 측정
- 포트폴리오 상세: [PORTFOLIO.md](./PORTFOLIO.md)

## 주요 기능

- 신청 폼
- 알림톡 mock 발송
- Meta Pixel/GA4/Google Ads 전환 이벤트 mock
- 성공/실패 로그 출력

## 실행 방법

```bash
python3 -m http.server 5176
```

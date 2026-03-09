var PROJECTS_RAW = [
  {
    "sortKey": 20250819,
    "title": "BoB Wiki 피싱 훈련 사이트 개발 - 수정 필요",
    "summary": "BoB 14기 개발톤. 실제 BoB 위키를 모사한 피싱 훈련용 사이트를 개발하여 보안 인식 제고.",
    "stack": [
      "Spring Boot",
      "JPA",
      "HTML/CSS",
      "Security"
    ],
    "category": "Security",
    "date": "2025.08.19",
    "detail": {
      "overview": "BoB 14기 개발톤에서 진행한 프로젝트입니다. 실제 BoB 위키 사이트를 모사한 피싱 훈련 사이트를 개발하여, 보안 인식 교육 목적의 피싱 시뮬레이션 환경을 구축했습니다.",
      "sections": [
        {
          "title": "개발 내용",
          "content": "<ul><li>실제 BoB Wiki UI를 모사한 피싱 훈련 페이지 제작</li><li>사용자 입력 데이터 수집 및 로깅 시스템 구현</li><li>피싱 훈련 결과 대시보드 개발</li><li>보안 인식 교육용 알림 메시지 시스템</li></ul>"
        },
        {
          "title": "배운 점",
          "content": "<ul><li>공격자 관점에서 피싱 사이트가 어떻게 설계되는지 직접 구현하며 이해</li><li>피싱 방어를 위한 기술적·인적 보안의 중요성 체감</li></ul>"
        }
      ]
    }
  },
  {
    "sortKey": 20250701,
    "title": "CLASSUM 취약점 제보",
    "summary": "CLASSUM SSO 연동에서 인증 토큰 재사용(Replay) 가능한 치명 취약점을 발견하고, 재현·분석·공식 제보한 보안 리서치.",
    "stack": [
      "Vulnerability Research",
      "Burp Suite",
      "HTTP Analysis"
    ],
    "category": "Security",
    "date": "2025",
    "detail": {
      "overview": "울산대학교-CLASSUM SSO 연동 과정에서 URL Query String으로 노출된 인증 토큰이 재사용 가능한 취약점(CWE-598, CWE-294)을 확인했습니다. 토큰 탈취 시 별도 인증 없이 계정 로그인이 가능해 계정 탈취로 이어질 수 있는 Critical 이슈로 판단해 Responsible Disclosure 방식으로 제보했습니다.",
      "sections": [
        {
          "title": "프로젝트 개요",
          "group": "overview",
          "content": "<ul><li>대상: CLASSUM SSO 로그인 연동 구간</li><li>취약점: URL 파라미터 인증 토큰 노출 + 재전송(Replay) 가능</li><li>위험도: <b>Critical</b></li><li>관련 CWE: <b>CWE-598</b>, <b>CWE-294</b></li><li>제보 일자: 2025.12.04</li></ul>"
        },
        {
          "title": "담당 역할",
          "group": "role",
          "content": "<ul><li>SSO 로그인 흐름 분석 및 토큰 전달 구조 확인</li><li>다중 디바이스(PC A/B) 기반 재현 시나리오 설계</li><li>토큰 재사용에 따른 세션 하이재킹 가능성 검증</li><li>영향도·재현 절차·권고안을 포함한 취약점 진단 보고서 작성</li><li>보안팀(privacy@classum.com) 대상 Responsible Disclosure 수행</li></ul>"
        },
        {
          "title": "재현 및 검증",
          "group": "role",
          "content": "<ul><li>Step 1. 정상 사용자 로그인 후 URL 토큰 확보 (PC A)</li><li>Step 2. 제3자 환경(PC B/시크릿 모드)에서 동일 URL 재사용</li><li>Step 3. 추가 인증 없이 피해자 계정 로그인 확인</li><li>PoC 영상: <a href=\"https://youtu.be/lZSdI309jgw\" target=\"_blank\" style=\"color:#12b886\">https://youtu.be/lZSdI309jgw</a></li></ul>"
        },
        {
          "title": "프로젝트 성과",
          "group": "outcome",
          "content": "<ul><li>실서비스 SSO 연동의 치명 취약점 식별 및 재현 성공</li><li>계정 탈취(ATO)·개인정보 유출·2차 피해 가능성 입증</li><li>단기/장기 보안 권고안 제시: 토큰 1회성/TTL 최소화, OAuth2/OIDC Authorization Code Flow 권장</li><li>실무형 취약점 보고서 작성 및 공식 제보 경험 확보</li></ul>"
        },
        {
          "title": "벤더 회신 결과",
          "group": "outcome",
          "content": "<p>벤더 측 회신 메일 첨부입니다.</p><div style=\"margin-top:10px\"><img src=\"../assets/projects/20251204_classum/vendor-mail.png\" style=\"width:100%;border-radius:8px\"><p style=\"font-size:12px;color:#999;margin-top:6px\">CLASSUM 보안팀 회신 메일 (첨부 이미지)</p></div>"
        }
      ]
    }
  },
  {
    "sortKey": 20240215,
    "title": "GrowUp — 성장 기록 플랫폼 - 수정 필요",
    "summary": "UMC 5기 팀 프로젝트. 개인 성장과 목표 관리를 위한 소셜 플랫폼 Backend 개발.",
    "stack": [
      "Spring Boot",
      "JPA",
      "MySQL",
      "AWS",
      "REST API"
    ],
    "category": "Backend",
    "date": "2024.01 — 2024.02",
    "detail": {
      "overview": "UMC(University MakeUS Challenge) 5기에서 진행한 팀 프로젝트입니다. 개인 성장 목표를 기록하고 공유하는 소셜 플랫폼의 Backend를 담당했습니다.",
      "sections": [
        {
          "title": "담당 개발",
          "content": "<ul><li>Spring Boot + JPA 기반 RESTful API 설계 및 구현</li><li>사용자 인증/인가 (JWT) 구현</li><li>MySQL 데이터베이스 설계</li><li>AWS EC2 / Elastic Beanstalk 배포</li></ul>"
        }
      ]
    }
  },
  {
    "sortKey": 20250615,
    "title": "한바퀴 — 위치 기반 화물 추천 및 매칭 플랫폼 - 수정 필요",
    "summary": "위치 기반으로 화물과 운송 차량을 매칭하는 플랫폼. Backend(Spring JPA) + Android 풀스택 개발.",
    "stack": [
      "Spring Boot",
      "JPA",
      "MySQL",
      "Android",
      "Java",
      "AWS"
    ],
    "category": "Backend",
    "date": "2024.09 — 2025.06",
    "detail": {
      "overview": "위치 기반 화물 추천 및 매칭 플랫폼입니다. 화물 운송이 필요한 화주와 빈 차량이 있는 운송사를 위치 기반으로 매칭합니다. Backend(Spring Boot/JPA)와 Android 클라이언트를 모두 개발했습니다.",
      "sections": [
        {
          "title": "담당 개발",
          "content": "<ul><li>Spring Boot + JPA 기반 RESTful API 설계 및 구현</li><li>위치 기반 화물-차량 매칭 알고리즘 개발</li><li>Android 클라이언트 개발 (Java)</li><li>AWS 배포 및 운영 환경 구성</li></ul>"
        },
        {
          "title": "GitHub",
          "content": "<ul><li><a href=\"https://github.com/roundCargo/backend\" target=\"_blank\" style=\"color:#12b886\">Backend — github.com/roundCargo/backend</a></li><li><a href=\"https://github.com/roundCargo/android\" target=\"_blank\" style=\"color:#12b886\">Android — github.com/roundCargo/android</a></li></ul>"
        }
      ]
    }
  },
  {
    "sortKey": 20241001,
    "title": "홈 네트워크 Mesh 구성 - 수정 필요",
    "summary": "저가 IPTIME 공유기 여러 대를 Mesh 구성하여 가정 내 Wi-Fi 커버리지 확장. 직접 설계·구축·운영.",
    "stack": [
      "IPTIME",
      "Mesh Network",
      "Wi-Fi",
      "VLAN"
    ],
    "category": "Network",
    "date": "개인 프로젝트",
    "detail": {
      "overview": "가정집 내 Wi-Fi 음영 지역 문제를 해결하기 위해 저가형 IPTIME 공유기 여러 대를 Mesh 네트워크로 구성했습니다.",
      "sections": [
        {
          "title": "구성 내용",
          "content": "<ul><li>IPTIME 공유기 다수를 Mesh AP로 설정</li><li>유선 백홀 및 무선 백홀 혼합 구성</li><li>SSID 통합으로 로밍 환경 구현</li><li>VLAN 분리로 IoT 디바이스 격리</li></ul>"
        },
        {
          "title": "배운 점",
          "content": "<ul><li>실제 네트워크 장비를 다루며 이론과 실습의 차이 체감</li><li>무선 채널 간섭 분석 및 최적화 경험</li><li>네트워크 진단 도구(ping, traceroute, Wireshark) 실전 활용</li></ul>"
        }
      ]
    }
  },
  {
    "sortKey": 20241201,
    "title": "알림IT — 울산대학교 공지 알림 서비스",
    "summary": "울산대학교 학과별 공지사항을 통합 수집하여 Android / iOS 앱으로 실시간 알림을 제공하는 서비스. 백엔드 개발과 온프레미스 서버 인프라 구축 및 운영을 담당했습니다.",
    "stack": [
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
      "Docker",
      "Docker Compose",
      "Nginx",
      "GitHub Actions",
      "Tailscale",
      "Firebase FCM",
      "Jsoup",
      "Linux",
      "iptables",
      "Fail2ban"
    ],
    "github": [
      { "label": "Organization", "url": "https://github.com/AlarmU-Ulsan" },
      { "label": "Backend", "url": "https://github.com/AlarmU-Ulsan/Backend" }
    ],
    "category": "Backend",
    "categories": ["Backend", "DevSecOps"],
    "date": "2024.12 — 운영 중",
    "detail": {
      "overview": "알림IT는 울산대학교 학과별로 분산된 공지사항을 자동 수집하여 Android / iOS 앱으로 실시간 알림을 제공하는 서비스입니다. Spring Boot 기반 백엔드를 개발하고, Docker 기반 온프레미스 서버 환경에서 서비스를 운영하며 CI/CD 자동화와 서버 보안 체계를 직접 구축했습니다.",

      "sections": [

        {
          "title": "프로젝트 개요",
          "group": "overview",
          "content": "<ul><li>울산대학교 학과별 공지사항을 자동 수집하여 모바일 앱으로 실시간 알림 제공</li><li>Android / iOS 사용자 대상 실제 운영 중인 서비스</li><li>Spring Boot 기반 백엔드 및 온프레미스 서버 인프라 직접 구축</li><li>GitHub Actions 기반 CI/CD 자동 배포 환경 구축</li></ul>"
        },

        {
          "title": "담당 역할",
          "group": "role",
          "content": "<ul><li>Spring Boot 기반 REST API 설계 및 구현</li><li>Docker / Nginx 기반 온프레미스 서버 인프라 구축</li><li>GitHub Actions 기반 CI/CD 파이프라인 설계 및 운영</li><li>서버 보안 설정 및 침입 대응 체계 구축</li><li>서비스 운영 중 발생하는 장애 및 성능 이슈 대응</li></ul>"
        },

        {
          "title": "시스템 아키텍처",
          "group": "overview",
          "content": "<ul><li>Client(Android / iOS / Admin) → Nginx Reverse Proxy → Spring Boot API</li><li>Spring Boot ↔ MySQL (공지 / 사용자 / 토큰 데이터)</li><li>Spring Boot ↔ Firebase Cloud Messaging (푸시 알림)</li><li>GitHub Actions 기반 Docker 이미지 빌드 및 자동 배포</li><li>Tailscale VPN을 통한 내부망 서버 배포</li></ul>"
        },

        {
          "title": "공지 크롤링 및 알림 시스템",
          "group": "role",
          "content": "<ul><li>Jsoup 기반 학과 공지사항 자동 크롤링</li><li>평일 업무시간(08~18시) 기준 10분 간격 신규 공지 수집</li><li>공지 등록 시 Firebase Cloud Messaging 기반 푸시 알림 전송</li><li>sendEachForMulticast 기반 대량 알림 처리 최적화</li><li>전송 실패 토큰 자동 정리 로직 구현</li></ul>"
        },

        {
          "title": "DevOps 및 배포 자동화",
          "group": "role",
          "content": "<ul><li>Git Tag 기반 자동 배포 파이프라인 구축</li><li>GitHub Actions → Docker Image Build → Docker Hub Push</li><li>Tailscale VPN 기반 내부망 서버 SSH 배포</li><li>docker-compose 기반 컨테이너 자동 재배포</li><li>배포 자동화를 통해 운영 리스크 및 휴먼에러 감소</li></ul>"
        },

        {
          "title": "온프레미스 서버 운영",
          "group": "role",
          "content": "<ul><li>Ubuntu 기반 온프레미스 서버 환경에서 서비스 운영</li><li>Docker Compose 기반 서비스 분리 (Spring Boot / MySQL / Nginx)</li><li>Nginx Reverse Proxy를 통해 외부 접속 관리</li><li>교내 네트워크 정책에 따라 외부 포트가 기본 차단된 환경에서 서비스 운영</li><li>서비스 운영을 위해 80 / 443 포트 개방 요청 후 운영</li></ul>"
        },

        {
          "title": "네트워크 보안 설계",
          "group": "role",
          "content": "<ul><li>SSH 포트 변경(22 → ????)으로 자동화된 공격 감소</li><li>Tailscale VPN 기반 관리자 전용 접속 환경 구축</li><li>MySQL을 127.0.0.1:3306으로 바인딩하여 외부 접근 차단</li><li>iptables / ipset 기반 국가 IP 필터링 정책 적용</li><li>Docker 내부 네트워크 대역을 방화벽 허용 정책에 포함</li></ul>"
        },

        {
          "title": "침입 탐지 및 차단",
          "group": "role",
          "content": "<ul><li>Fail2ban 기반 Nginx 로그 실시간 분석</li><li>/wp-admin, /autodiscover, .env 등 취약점 스캐닝 패턴 탐지</li><li>비정상 요청 발생 IP 자동 차단</li><li>공격 IP 영구 차단 정책 적용</li></ul>"
        },

        {
          "title": "애플리케이션 보안",
          "group": "role",
          "content": "<ul><li>RateLimitInterceptor 기반 요청 제한 (1분 120회)</li><li>RequestLoggingInterceptor로 요청 IP / URI / 상태 코드 기록</li><li>SecurityAuditLogger 기반 보안 이벤트 로깅</li><li>애플리케이션 로그와 보안 로그 분리 설계</li></ul>"
        },

        {
          "title": "서비스 모니터링",
          "group": "role",
          "content": "<ul><li>Uptime Kuma 기반 서버 상태 모니터링</li><li>라즈베리파이에 모니터링 시스템 별도 구축</li><li>서버 장애 발생 시 Discord Webhook 알림 전송</li><li>운영 중 장애 대응 시간 단축</li></ul>"
        },

        {
          "title": "성과 및 운영 경험",
          "group": "outcome",
          "content": "<ul><li>코드 기여: +25,787 / -13,385 (604 file touches)</li><li>CI/CD 기반 배포 자동화 환경 구축</li><li>온프레미스 서버 환경에서 실제 서비스 안정 운영</li><li>외부 스캐닝 공격 대응 및 서버 보안 운영 경험</li><li>운영 로그 설계 및 보안 이벤트 추적 체계 구축</li></ul>"
        }

      ]
    }
  },
  {
    "sortKey": 20250901,
    "title": "산업 프로토콜 대상 SLM 기반 공격 탐지 시스템",
    "summary": "BoB 14기 최종 프로젝트. 산업 제어 시스템(ICS/OT) 대상 SLM 기반 APT 공격탐지 시스템 개발",
    "stack": [
      "OT Security",
      "Industrial Protocol",
      "C++",
      "Python",
      "Wireshark",
      "Redis",
      "Elasticsearch",
      "Docker"
    ],
    "github": [
      { "label": "Organization", "url": "https://github.com/BoB14th-SLiMe" }
    ],
    "category": "Security",
    "date": "2025.09 — 2025.12",
    "detail": {
      "overview": "BoB(Best of the Best) 14기 최종 프로젝트로 산업 제어 시스템(ICS/OT) 환경에서 발생할 수 있는 공격을 탐지하는 보안 관제 시스템을 개발했습니다. 산업 프로토콜(Modbus TCP, S7Comm, XGT_FEnet) 트래픽을 분석하고, ML/DL/SLM 기반 하이브리드 탐지 파이프라인과 XAI 기반 보고 체계를 갖춘 비침투적(Non-intrusive) OT 보안 아키텍처를 설계했습니다.",
      "sections": [
        {
          "title": "프로젝트 개요",
          "group": "overview",
          "content": "\n<ul>\n<li>산업 제어 시스템(ICS/OT) 환경의 보안 위협 탐지 시스템 개발</li>\n<li>산업 프로토콜(Modbus TCP, S7Comm, XGT_FEnet) 트래픽 분석 기반 공격 탐지</li>\n<li>Purdue Model 기반 OT 공격 시나리오를 가정한 탐지 시스템 설계</li>\n<li>산업 장비와 직접 통신하지 않는 <b>비침투적 OT 보안 솔루션</b> 개발</li>\n<li>BoB 14기 <b>SLiMe</b> 팀 프로젝트</li>\n</ul>\n"
        },
        {
          "title": "왜 비침투적인가",
          "group": "overview",
          "content": "\n<p>\nOT 환경에서는 보안 솔루션이 PLC나 SCADA와 직접 통신할 경우 설비 운영에 영향을 줄 수 있습니다.\n따라서 본 프로젝트는 산업 장비와 직접 통신하지 않고 네트워크 트래픽만 수집·분석하는\n<b>비침투적(Non-intrusive) 보안 구조</b>로 설계했습니다.\n</p>\n\n<ul>\n<li><b>방법 1:</b> 산업용 스위치의 SPAN 포트를 활성화하여 트래픽 미러링</li>\n<li><b>방법 2:</b> Network TAP 장비를 이용해 Switch-SCADA 사이 트래픽 수집</li>\n<li>보안 시스템이 OT 장비에 직접 패킷을 송신하지 않도록 설계</li>\n<li>운영 환경 변경 없이 보안 모니터링 적용 가능</li>\n</ul>\n"
        },
        {
          "title": "공격 시나리오 (Purdue Model 기반)",
          "group": "overview",
          "content": "\n<ul>\n<li>IT 영역(Level 4~5)에서 공격자가 내부 권한 획득</li>\n<li>SCADA가 위치한 Level 3 영역으로 침투</li>\n<li>SCADA 제어권 탈취 후 PLC(Level 1)로 제어 명령 전송</li>\n<li>정상 범위로 위장된 제어 명령을 통한 악성 행위 수행</li>\n<li>산업 프로토콜 트래픽 분석을 통해 해당 공격 탐지</li>\n</ul>\n"
        },
        {
          "title": "솔루션 아키텍처",
          "group": "overview",
          "content": "\n<p>탐지 시스템의 전체 구성과 데이터 흐름을 분리해 이해할 수 있도록 아키텍처 이미지를 2개로 구성했습니다.</p>\n\n<div style=\"margin-top:10px\">\n<img src=\"../assets/projects/20251220_SLiMe/ot-architecture.png\" style=\"width:100%;border-radius:8px\">\n<p style=\"font-size:12px;color:#999;margin-top:6px\">\nOT 보안 시스템 전체 아키텍처\n</p>\n</div>\n\n<div style=\"margin-top:18px\">\n<img src=\"../assets/projects/20251220_SLiMe/ot-data-flow.png\" style=\"width:100%;border-radius:8px\">\n<p style=\"font-size:12px;color:#999;margin-top:6px\">\nParser → Redis / Elasticsearch → ML / DL / SLM → Dashboard 데이터 흐름\n</p>\n</div>\n"
        },
        {
          "title": "담당 역할",
          "group": "role",
          "content": "\n<ul>\n<li>산업 프로토콜 분석 및 C++ 기반 패킷 파서 개발</li>\n<li>Wireshark XGT_FEnet dissector 개발 및 공식 MR 제출</li>\n<li>Docker 기반 OT 테스트베드 구축</li>\n<li>Redis / Elasticsearch 기반 저지연 탐지 파이프라인 설계</li>\n<li>비침투적 OT 보안 아키텍처 설계</li>\n</ul>\n"
        },
        {
          "title": "산업 환경 테스트베드",
          "group": "role",
          "content": "\n<ul>\n<li>Docker Compose 기반 <b>SCADA 1대 + PLC 4대</b> 구조의 OT 테스트베드 구축</li>\n<li>Node-RED 기반 가상 PLC / SCADA 환경 구성</li>\n<li>사거리 신호등 제어 시스템 시뮬레이션</li>\n<li><b>Modbus TCP</b> 기반 산업 통신 트래픽 생성</li>\n<li>SCADA-PLC 통신을 pcap으로 자동 수집</li>\n<li>패킷 분석 및 공격 탐지 검증 환경 구축</li>\n<li><a href=\"https://github.com/BoB14th-SLiMe/testbed\" target=\"_blank\" style=\"color:#12b886\">Testbed Repository — github.com/BoB14th-SLiMe/testbed</a></li>\n</ul>\n\n<div style=\"margin-top:10px\">\n<img src=\"../assets/projects/20251220_SLiMe/ot-testbed.png\" style=\"width:100%;border-radius:8px\">\n<p style=\"font-size:12px;color:#999;margin-top:6px\">\n4-Way Intersection PLC/SCADA Testbed\n</p>\n</div>\n"
        },
        {
          "title": "C++ 파서 성능 개선",
          "group": "outcome",
          "content": "\n<p>Wireshark 기반 파서 대신 C++ 전용 파서를 도입하여 성능과 자원 효율을 개선했습니다.</p>\n\n<ul>\n<li>실시간 처리 속도: 2.40s → 0.89s (2.7배 개선)</li>\n<li>처리량: 1,279 pps → 3,370 pps (2.6배 증가)</li>\n<li>메모리 사용: 90.98MB → 25.69MB (72% 절감)</li>\n<li>CPU 사용률: 17.9% → 9% (약 50% 감소)</li>\n<li><a href=\"https://github.com/BoB14th-SLiMe/Parser\" target=\"_blank\" style=\"color:#12b886\">C++ Parser Repository — github.com/BoB14th-SLiMe/Parser</a></li>\n</ul>\n\n<div style=\"margin-top:10px\">\n<img src=\"../assets/projects/20251220_SLiMe/ot-parser-benchmark.png\" style=\"width:100%;border-radius:8px\">\n<p style=\"font-size:12px;color:#999;margin-top:6px\">\nWireshark Parser vs C++ Parser 성능 비교\n</p>\n</div>\n"
        },
        {
          "title": "Wireshark 프로토콜 확장",
          "group": "role",
          "content": "\n<ul>\n<li>Wireshark에서 지원되지 않던 <b>XGT_FEnet 산업 프로토콜 dissector</b> 개발</li>\n<li>LS산전 PLC 통신 프로토콜을 분석하여 패킷 구조 파싱 로직 구현</li>\n<li>Wireshark에서 산업 프로토콜 패킷을 해석할 수 있도록 기능 확장</li>\n<li>Wireshark 공식 GitLab 저장소에 <b>Merge Request 제출</b></li>\n<li>\n<a href=\"https://gitlab.com/wireshark/wireshark/-/merge_requests/22852\" target=\"_blank\" style=\"color:#12b886\">\nWireshark MR #22852\n</a>\n</li>\n</ul>\n"
        },
        {
          "title": "저지연 탐지 파이프라인",
          "group": "role",
          "content": "\n<ul>\n<li>파서에 Redis와 Elasticsearch를 연동한 탐지 파이프라인 구성</li>\n<li>ML/DL 모델이 데이터를 메모리에서 직접 조회하도록 설계</li>\n<li>파일 I/O 단계를 제거하여 탐지 레이턴시 감소</li>\n<li>실시간 공격 탐지에 적합한 데이터 흐름 구조 설계</li>\n</ul>\n"
        },
        {
          "title": "실시간 결과 반영 구조",
          "group": "outcome",
          "content": "\n<ul>\n<li>SLM 분석 결과 파일을 파일 시스템 이벤트 기반으로 감시</li>\n<li>결과 파일 생성 즉시 대시보드에 반영</li>\n<li>탐지 이벤트와 위협 분석 내용을 실시간 표시</li>\n</ul>\n"
        },
        {
          "title": "공격 모니터링 시스템",
          "group": "role",
          "content": "\n<ul>\n<li>Elasticsearch 기반 트래픽 로그 수집 및 시각화</li>\n<li>실시간 트래픽 모니터링 및 공격 이벤트 확인</li>\n<li>트래픽 급증 패턴을 통해 DoS 공격 식별</li>\n<li>탐지 결과와 위협 설명을 함께 확인 가능한 관제 화면 구현</li>\n<li><a href=\"https://github.com/BoB14th-SLiMe/dashboard\" target=\"_blank\" style=\"color:#12b886\">Dashboard Repository — github.com/BoB14th-SLiMe/dashboard</a></li>\n</ul>\n"
        },
        {
          "title": "프로젝트 성과",
          "group": "outcome",
          "content": "\n<ul>\n<li><b>C++ 파서 고도화</b>: 실시간 처리 속도 2.40s → 0.89s</li>\n<li>처리량 1,279 pps → 3,370 pps</li>\n<li>메모리 사용량 72% 절감</li>\n<li>팀 전체 탐지 정확도 94%</li>\n<li style=\"color:#94a3b8;\">※ ML/DL 모델 연구는 팀 AI 파트에서 수행</li>\n</ul>\n"
        },
        {
          "title": "연구 발표",
          "group": "outcome",
          "content": "\n<ul>\n<li><b>CISC-W 2025</b> 정보보호학회 동계학술대회 포스터 발표</li>\n<li>변전소 운영자용 OT 위협 모델 연구</li>\n</ul>\n"
        },
        {
          "title": "현장 연구",
          "group": "outcome",
          "content": "\n<ul>\n<li>KISA 스마트보안리빙랩 방문 — 스마트공장 OT 환경 관찰</li>\n<li>한국해양대학교 MASTC 방문 — 선박 OT 시스템 분석</li>\n<li>조타실 및 기관실 견학을 통한 OT 환경 이해</li>\n</ul>\n"
        },
        {
          "title": "수상 및 대외 성과",
          "group": "outcome",
          "content": "\n<ul>\n<li><b>AquaSLiMe 우수상</b> — STARTUP WATER 2025</li>\n<li>Wireshark XGT_FEnet dissector Merge Request 제출</li>\n</ul>\n"
        },
        {
          "title": "발표 자료",
          "group": "outcome",
          "content": "\n<ul>\n<li><a href=\"../assets/projects/20251220_SLiMe/bob-presentation-1st.pdf\" target=\"_blank\" style=\"color:#12b886\">1차 발표 자료</a></li>\n<li>2차 발표 자료: 비공개</li>\n<li><a href=\"../assets/projects/20251220_SLiMe/bob-presentation-final.pdf\" target=\"_blank\" style=\"color:#12b886\">최종 발표 자료</a></li>\n</ul>\n"
        }
      ]
    }
  },
  {
    "sortKey": 20250630,
    "title": "OWASP TOP 10 취약점 분석 - 수정 필요",
    "summary": "OWASP TOP 10 취약점을 직접 실습 환경에서 재현·분석하고 대응 방안을 정리한 보안 연구 프로젝트.",
    "stack": [
      "OWASP",
      "Burp Suite",
      "SQLi",
      "XSS",
      "CSRF",
      "Linux"
    ],
    "category": "Security",
    "date": "2025.03 — 2025.06",
    "detail": {
      "overview": "OWASP TOP 10의 각 취약점을 직접 실습 환경에서 재현하고, 공격 벡터·영향도·대응 방안을 분석한 보안 연구 프로젝트입니다. 이론이 아닌 직접 해보는 방식으로 각 취약점을 깊이 이해했습니다.",
      "sections": [
        {
          "title": "분석 항목",
          "content": "<ul><li>A01 Broken Access Control — 권한 검증 우회 실습</li><li>A02 Cryptographic Failures — 취약한 암호화 탐지</li><li>A03 Injection — SQL Injection, Command Injection</li><li>A07 XSS — Reflected / Stored / DOM-based 유형별 분석</li><li>A08 SSRF — 내부망 접근 시나리오 실습</li></ul>"
        },
        {
          "title": "대응 방안 정리",
          "content": "<ul><li>각 취약점별 Secure Coding 가이드라인 문서화</li><li>취약한 코드 vs 안전한 코드 비교 정리</li><li>WAF·보안 헤더·입력값 검증 등 방어 레이어 구성 방법 정리</li></ul>"
        }
      ]
    }
  }
];

function normalizeGithubLinks(github) {
  if (!github) return [];
  if (typeof github === "string") return [{ "label": "GitHub", "url": github }];
  if (Array.isArray(github)) {
    return github
      .map(function (v, i) {
        if (typeof v === "string") return { "label": "GitHub " + (i + 1), "url": v };
        if (v && typeof v.url === "string") return { "label": v.label || ("GitHub " + (i + 1)), "url": v.url };
        return null;
      })
      .filter(function (v) { return !!v; });
  }
  if (typeof github === "object") {
    return Object.keys(github)
      .map(function (k) { return { "label": k || "GitHub", "url": github[k] }; })
      .filter(function (v) { return typeof v.url === "string"; });
  }
  return [];
}

function stripTags(html) {
  return String(html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function extractGithubLinksFromDetail(detail) {
  if (!detail || !Array.isArray(detail.sections)) return [];
  var links = [];
  detail.sections.forEach(function (section) {
    var content = String(section && section.content || "");
    if (!/github\.com/i.test(content)) return;
    var re = /<a[^>]*href="([^"]*github\.com[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    var m;
    while ((m = re.exec(content)) !== null) {
      var url = m[1];
      var text = stripTags(m[2]);
      var label = text ? text.split("—")[0].trim() : "GitHub";
      links.push({ label: label || "GitHub", url: url });
    }
  });
  return links;
}

var PROJECTS = sortByKeyAsc(PROJECTS_RAW).map(function (p) {
  var direct = normalizeGithubLinks(p.github);
  var fallback = extractGithubLinksFromDetail(p.detail);
  var merged = (direct.length ? direct : fallback).filter(function (v, i, arr) {
    return arr.findIndex(function (x) { return x.url === v.url; }) === i;
  });
  return { ...p, githubLinks: merged };
});

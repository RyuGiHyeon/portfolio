// ============================================================
//  data.js  — 류기현 (Jeff) 포트폴리오 데이터
// ============================================================

const PROJECTS = [
  {
    id: "ot-security",
    num: "PROJECT_01",
    title: "산업 프로토콜 대상 SLM 기반 OT 보안 솔루션 - 수정필요",
    summary: "BoB 14기 최종 프로젝트. 산업 제어 시스템(ICS/OT) 환경에서 SLM 기반 이상 탐지 및 보안 솔루션 개발.",
    stack: ["OT Security", "ICS", "SLM", "Python", "Network Protocol"],
    category: "Security",
    date: "2025.09 — 2025.12",
    detail: {
      overview: "BoB(Best of the Best) 14기 최종 프로젝트로, 산업 프로토콜을 대상으로 한 SLM(Security Log Management) 기반 OT 보안 솔루션을 개발했습니다. 실제 산업 현장의 ICS/SCADA 환경에서 발생할 수 있는 보안 위협을 탐지하고 대응하는 시스템입니다.",
      sections: [
        { title: "프로젝트 개요", content: "<ul><li>산업 제어 시스템(ICS/OT) 환경의 보안 위협 탐지</li><li>산업용 프로토콜(Modbus, DNP3 등) 트래픽 분석</li><li>SLM 기반 이상 행위 탐지 및 알림 시스템 구축</li><li>BoB 14기 팀 프로젝트 (2025.09 ~ 2025.12)</li></ul>" },
        { title: "담당 역할", content: "<ul><li>Backend 개발 및 보안 로직 설계</li><li>산업 프로토콜 파싱 및 분석 모듈 구현</li><li>이상 탐지 알고리즘 연구 및 적용</li></ul>" }
      ]
    }
  },
  {
    id: "bob-phishing",
    num: "PROJECT_02",
    title: "BoB Wiki 피싱 훈련 사이트 개발 - 수정필요",
    summary: "BoB 14기 개발톤. 실제 BoB 위키를 모사한 피싱 훈련용 사이트를 개발하여 보안 인식 제고.",
    stack: ["Spring Boot", "JPA", "HTML/CSS", "Security"],
    category: "Security",
    date: "2025.08.19",
    detail: {
      overview: "BoB 14기 개발톤에서 진행한 프로젝트입니다. 실제 BoB 위키 사이트를 모사한 피싱 훈련 사이트를 개발하여, 보안 인식 교육 목적의 피싱 시뮬레이션 환경을 구축했습니다.",
      sections: [
        { title: "개발 내용", content: "<ul><li>실제 BoB Wiki UI를 모사한 피싱 훈련 페이지 제작</li><li>사용자 입력 데이터 수집 및 로깅 시스템 구현</li><li>피싱 훈련 결과 대시보드 개발</li><li>보안 인식 교육용 알림 메시지 시스템</li></ul>" },
        { title: "배운 점", content: "<ul><li>공격자 관점에서 피싱 사이트가 어떻게 설계되는지 직접 구현하며 이해</li><li>피싱 방어를 위한 기술적·인적 보안의 중요성 체감</li></ul>" }
      ]
    }
  },
  {
    id: "owasp-analysis",
    num: "PROJECT_03",
    title: "OWASP TOP 10 취약점 분석 - 수정필요",
    summary: "OWASP TOP 10 취약점을 직접 실습 환경에서 재현·분석하고 대응 방안을 정리한 보안 연구 프로젝트.",
    stack: ["OWASP", "Burp Suite", "SQLi", "XSS", "CSRF", "Linux"],
    category: "Security",
    date: "2025.03 — 2025.06",
    detail: {
      overview: "OWASP TOP 10의 각 취약점을 직접 실습 환경에서 재현하고, 공격 벡터·영향도·대응 방안을 분석한 보안 연구 프로젝트입니다. 이론이 아닌 직접 해보는 방식으로 각 취약점을 깊이 이해했습니다.",
      sections: [
        { title: "분석 항목", content: "<ul><li>A01 Broken Access Control — 권한 검증 우회 실습</li><li>A02 Cryptographic Failures — 취약한 암호화 탐지</li><li>A03 Injection — SQL Injection, Command Injection</li><li>A07 XSS — Reflected / Stored / DOM-based 유형별 분석</li><li>A08 SSRF — 내부망 접근 시나리오 실습</li></ul>" },
        { title: "대응 방안 정리", content: "<ul><li>각 취약점별 Secure Coding 가이드라인 문서화</li><li>취약한 코드 vs 안전한 코드 비교 정리</li><li>WAF·보안 헤더·입력값 검증 등 방어 레이어 구성 방법 정리</li></ul>" }
      ]
    }
  },
  {
    id: "hanbakwi",
    num: "PROJECT_04",
    title: "한바퀴 — 위치 기반 화물 추천 및 매칭 플랫폼 - 수정필요",
    summary: "위치 기반으로 화물과 운송 차량을 매칭하는 플랫폼. Backend(Spring JPA) + Android 풀스택 개발.",
    stack: ["Spring Boot", "JPA", "MySQL", "Android", "Java", "AWS"],
    category: "Backend",
    date: "2024.09 — 2025.06",
    detail: {
      overview: "위치 기반 화물 추천 및 매칭 플랫폼입니다. 화물 운송이 필요한 화주와 빈 차량이 있는 운송사를 위치 기반으로 매칭합니다. Backend(Spring Boot/JPA)와 Android 클라이언트를 모두 개발했습니다.",
      sections: [
        { title: "담당 개발", content: "<ul><li>Spring Boot + JPA 기반 RESTful API 설계 및 구현</li><li>위치 기반 화물-차량 매칭 알고리즘 개발</li><li>Android 클라이언트 개발 (Java)</li><li>AWS 배포 및 운영 환경 구성</li></ul>" },
        { title: "GitHub", content: '<ul><li><a href="https://github.com/roundCargo/backend" target="_blank" style="color:#12b886">Backend — github.com/roundCargo/backend</a></li><li><a href="https://github.com/roundCargo/android" target="_blank" style="color:#12b886">Android — github.com/roundCargo/android</a></li></ul>' }
      ]
    }
  },
  {
    id: "classum-vuln",
    num: "PROJECT_05",
    title: "CLASSUM 취약점 제보 - 수정필요",
    summary: "교육 플랫폼 CLASSUM의 보안 취약점을 발견하고 공식 제보. 책임감 있는 취약점 공개(Responsible Disclosure) 프로세스 경험.",
    stack: ["Vulnerability Research", "Burp Suite", "HTTP Analysis"],
    category: "Security",
    date: "2025",
    detail: {
      overview: "교육 플랫폼 CLASSUM에서 보안 취약점을 발견하고 책임감 있는 취약점 공개(Responsible Disclosure) 프로세스에 따라 공식 제보했습니다.",
      sections: [
        { title: "과정", content: "<ul><li>서비스 이용 중 비정상적인 동작 패턴 발견</li><li>Burp Suite를 활용한 HTTP 트래픽 분석</li><li>취약점 재현 및 영향도 분석</li><li>CLASSUM 보안팀에 공식 제보</li></ul>" },
        { title: "배운 점", content: "<ul><li>실제 서비스의 취약점 발견 및 Responsible Disclosure 프로세스 경험</li><li>취약점 보고서 작성 방법 습득</li></ul>" }
      ]
    }
  },
  {
    id: "growup",
    num: "PROJECT_06",
    title: "GrowUp — 성장 기록 플랫폼 - 수정필요",
    summary: "UMC 5기 팀 프로젝트. 개인 성장과 목표 관리를 위한 소셜 플랫폼 Backend 개발.",
    stack: ["Spring Boot", "JPA", "MySQL", "AWS", "REST API"],
    category: "Backend",
    date: "2024.01 — 2024.02",
    detail: {
      overview: "UMC(University MakeUS Challenge) 5기에서 진행한 팀 프로젝트입니다. 개인 성장 목표를 기록하고 공유하는 소셜 플랫폼의 Backend를 담당했습니다.",
      sections: [
        { title: "담당 개발", content: "<ul><li>Spring Boot + JPA 기반 RESTful API 설계 및 구현</li><li>사용자 인증/인가 (JWT) 구현</li><li>MySQL 데이터베이스 설계</li><li>AWS EC2 / Elastic Beanstalk 배포</li></ul>" }
      ]
    }
  },
  {
    id: "home-network",
    num: "PROJECT_07",
    title: "홈 네트워크 Mesh 구성 - 수정필요",
    summary: "저가 IPTIME 공유기 여러 대를 Mesh 구성하여 가정 내 Wi-Fi 커버리지 확장. 직접 설계·구축·운영.",
    stack: ["IPTIME", "Mesh Network", "Wi-Fi", "VLAN"],
    category: "Network",
    date: "개인 프로젝트",
    detail: {
      overview: "가정집 내 Wi-Fi 음영 지역 문제를 해결하기 위해 저가형 IPTIME 공유기 여러 대를 Mesh 네트워크로 구성했습니다.",
      sections: [
        { title: "구성 내용", content: "<ul><li>IPTIME 공유기 다수를 Mesh AP로 설정</li><li>유선 백홀 및 무선 백홀 혼합 구성</li><li>SSID 통합으로 로밍 환경 구현</li><li>VLAN 분리로 IoT 디바이스 격리</li></ul>" },
        { title: "배운 점", content: "<ul><li>실제 네트워크 장비를 다루며 이론과 실습의 차이 체감</li><li>무선 채널 간섭 분석 및 최적화 경험</li><li>네트워크 진단 도구(ping, traceroute, Wireshark) 실전 활용</li></ul>" }
      ]
    }
  }
];

// ============================================================
//  블로그/TIL 포스트
// ============================================================
const BLOG_POSTS = [
  {
    id: "ot-protocol-analysis",
    date: "2025-11-10",
    category: "Security",
    tags: ["OT", "ICS", "Modbus", "BoB"],
    title: "OT 보안 — 산업 프로토콜(Modbus)을 직접 분석해보다 - 수정필요",
    summary: "BoB 프로젝트 중 Modbus 프로토콜을 Wireshark로 직접 캡처하고 분석한 기록. 왜 OT 환경이 보안에 취약한지 체감했다.",
    content: `
      <h3>배경</h3>
      <p>BoB 14기 OT 보안 프로젝트를 진행하면서 Modbus 프로토콜을 직접 분석할 일이 생겼다. IT 세계와 다르게 OT는 왜 이렇게 보안이 약한 구조로 설계됐는지 궁금했다.</p>
      <h3>Modbus의 구조적 취약점</h3>
      <ul>
        <li>인증 메커니즘이 아예 없음 — 누구든 Function Code를 보내면 실행됨</li>
        <li>암호화 없음 — 평문 통신이 기본</li>
        <li>설계 당시(1979년) 보안은 고려 대상이 아니었음</li>
      </ul>
      <h3>Function Code 목록 (주요)</h3>
      <pre><code>0x01 - Read Coil Status
0x03 - Read Holding Registers
0x06 - Write Single Register   ← 무인증 실행
0x10 - Write Multiple Registers</code></pre>
      <h3>느낀 점</h3>
      <p>IT 보안과 OT 보안은 완전히 다른 세계다. OT는 가용성이 최우선이다. 공장이 멈추면 안 되기 때문. 이 관점 차이가 보안 설계의 차이를 만든다.</p>
    `
  },
  {
    id: "owasp-sqli-lab",
    date: "2025-05-20",
    category: "Security",
    tags: ["OWASP", "SQLi", "Burp Suite", "Web Security"],
    title: "OWASP TOP 10 실습 — SQL Injection 완전 정복 - 수정필요",
    summary: "OWASP TOP 10 분석 프로젝트 중 SQL Injection 파트. 에러 기반, 블라인드, 타임 기반까지 직접 실습하며 정리.",
    content: `
      <h3>실습 환경</h3>
      <ul>
        <li>DVWA (Damn Vulnerable Web Application)</li>
        <li>Burp Suite Community Edition</li>
      </ul>
      <h3>Error-Based SQLi</h3>
      <pre><code>' OR 1=1 --
' UNION SELECT null, version() --
' UNION SELECT null, table_name FROM information_schema.tables --</code></pre>
      <h3>방어 방법</h3>
      <ul>
        <li>Prepared Statement / Parameterized Query 사용 (가장 확실)</li>
        <li>ORM 사용 (JPA, Hibernate)</li>
        <li>입력값 화이트리스트 검증</li>
      </ul>
      <h3>Spring JPA에서의 안전한 코드</h3>
      <pre><code>// 위험한 코드
@Query(value = "SELECT * FROM user WHERE name = '" + name + "'", nativeQuery = true)

// 안전한 코드
@Query("SELECT u FROM User u WHERE u.name = :name")
User findByName(@Param("name") String name);</code></pre>
    `
  },
  {
    id: "spring-jpa-n1",
    date: "2025-02-14",
    category: "Backend",
    tags: ["Spring Boot", "JPA", "N+1", "Performance"],
    title: "JPA N+1 문제 — 한바퀴 프로젝트에서 실제로 겪은 후기 - 수정필요",
    summary: "한바퀴 프로젝트 개발 중 API 응답이 갑자기 느려진 원인이 N+1이었다. 발견부터 해결까지 정리.",
    content: `
      <h3>문제 발견</h3>
      <p>화물 목록 API의 응답 시간이 데이터가 늘어날수록 선형으로 증가했다. 로그를 보니 쿼리가 미친 듯이 나가고 있었다.</p>
      <h3>원인</h3>
      <pre><code>List&lt;Cargo&gt; cargos = cargoRepository.findAll();  // 쿼리 1번
for (Cargo cargo : cargos) {
    cargo.getOwner().getName();  // 각 화물마다 쿼리 1번씩 = N번
}</code></pre>
      <h3>해결 방법 — Fetch Join</h3>
      <pre><code>@Query("SELECT c FROM Cargo c JOIN FETCH c.owner")
List&lt;Cargo&gt; findAllWithOwner();</code></pre>
      <h3>결과</h3>
      <ul>
        <li>쿼리 수: N+1번 → 1번으로 감소</li>
        <li>응답 시간: 약 80% 개선</li>
        <li>교훈: JPA 쓸 때는 항상 실제 나가는 쿼리를 확인해야 한다</li>
      </ul>
    `
  }
];

// ============================================================
//  학력
// ============================================================
const EDUCATION = [
  {
    degree: "복수전공",
    major: "스마트제조ICT",
    school: "USG 공유대학",
    period: "2024 — 2026",
    status: "재학",
    note: ""
  },
  {
    degree: "학사",
    major: "IT융합전공",
    school: "울산대학교 IT융합학부",
    period: "2020 — 2026",
    status: "재학",
    note: "주요 이수: 컴퓨터네트워크, 운영체제, 정보보안개론, 해킹과보안, 데이터베이스"
  }
];

// ============================================================
//  자격증
// ============================================================
const CERTIFICATIONS = [
  {
    name: "SQLD",
    fullName: "SQL Developer",
    issuer: "한국데이터산업진흥원",
    date: "취득",
    status: "active",
    credentialId: "",
    color: "accent2"
  }
];

// ============================================================
//  수상 / 활동
// ============================================================
const AWARDS = [
  // ── 수상 (type: "award")
  {
    title: "AquaSLiME",
    org: "BoB 14기",
    issuer: "창업진흥원장 / 우수상",
    date: "2025.11.25.",
    type: "award",
    desc: "물산업 혁신 창업대전 / 물산업 대상 소형언어모델을 활용한 보안 솔루션"
  },

  // ── 보안 연구 / Responsible Disclosure (type: "security")
  {
    title: "대법원 가족관계 증명서 발급 취약점 제보",
    org: "대법원",
    date: "2026.",
    type: "security",
    kve: "KVE-2026-0123",
    desc: "대법원 가족관계 증명서 발급 시스템의 보안 취약점 발견 및 담당 기관 공식 제보. Responsible Disclosure 프로세스 준수."
  },
  {
    title: "CLASSUM 취약점 제보",
    org: "CLASSUM",
    date: "2025",
    type: "security",
    desc: "교육 플랫폼 CLASSUM에서 보안 취약점 발견. Responsible Disclosure 프로세스에 따라 보안팀에 공식 제보."
  },

  // ── 대외활동 (type: "activity")
  {
    title: "BoB(Best of the Best) 14기",
    org: "과학기술정보통신부 / 한국정보기술연구원",
    date: "2025.07 — 2026.02",
    type: "activity",
    desc: "국내 최고 수준 정보보안 교육 프로그램. 보안 취약점 분석 및 OT 보안 솔루션 개발 프로젝트 수행."
  },
  {
    title: "메가스터디IT아카데미 IaC 부트캠프",
    org: "메가스터디IT아카데미",
    date: "2026.02 — 2026.08",
    type: "activity",
    desc: "Terraform, Ansible 등 IaC 도구 기반 인프라 자동화 과정."
  },
  {
    title: "SW중심대학사업단 해커톤 참여",
    org: "울산대학교",
    date: "2024",
    type: "activity",
    desc: "한바퀴(위치 기반 화물 매칭 플랫폼) 프로젝트로 참여."
  },
  {
    title: "51대 IT융합학부 학생회 사무부장",
    org: "울산대학교 IT융합학부",
    date: "2024",
    type: "activity",
    desc: "써치 학생회 사무부장으로 행사 기획 및 운영 담당."
  },
  {
    title: "50대 IT융합학부 학생회 기획부장",
    org: "울산대학교 IT융합학부",
    date: "2023",
    type: "activity",
    desc: "드림워크 학생회 기획부장으로 학부 행사 기획 및 진행."
  },
  {
    title: "육군 병장 만기전역 — 유선장비정비병",
    org: "대한민국 육군 15사단 정비대대",
    date: "2022.07",
    type: "activity",
    desc: "유선 통신장비 정비 담당. 하드웨어 분해·조립 및 수리 역량 강화."
  }
];

function sortByKeyAsc(items) {
  return [...items].sort((a, b) => (a.sortKey || 0) - (b.sortKey || 0));
}

var SKILLS_RAW = [
  { "category": "Security", "name": "OT / ICS 보안" },
  { "category": "Security", "name": "취약점 분석 · 제보" },
  { "category": "Security", "name": "OWASP TOP 10" },
  { "category": "Security", "name": "Burp Suite" },
  { "category": "Backend", "name": "Spring Boot(JPA)" },
  { "category": "Database", "name": "MySQL / MariaDB" },
  { "category": "Database", "name": "Postgres (Postgis)" },
  { "category": "Dev", "name": "Python" },
  { "category": "Infra", "name": "AWS (Beanstalk, EC2)" },
  { "category": "Infra", "name": "IaC / Terraform / Ansible (학습 중)" },
  { "category": "Infra", "name": "Linux · 온프레미스" },
  { "category": "Network", "name": "홈 네트워크 구축" }
];

var PROFILE_TAGS_RAW = [
  { "name": "Security", "highlight": true },
  { "name": "OT/ICS", "highlight": true },
  { "name": "Spring Boot" },
  { "name": "Java" },
  { "name": "Linux" },
  { "name": "On-Premise" },
  { "name": "Network" },
  { "name": "AWS" }
];

var EDUCATION_RAW = [
  {
    "sortKey": 20260213,
    "degree": "학사 복수전공",
    "major": "스마트제조ICT",
    "school": "USG 공유대학",
    "period": "2024 — 2026.02.13",
    "status": "졸업",
    "note": "주요 이수: 해킹과보안, IOT, 차세대네트워크프로그래밍"
  },
  {
    "sortKey": 20260213,
    "degree": "학사",
    "major": "IT융합전공",
    "school": "울산대학교 IT융합학부",
    "period": "2020.03.02 — 2026.02.13",
    "status": "졸업",
    "note": "주요 이수: 자료구조, 운영체제, 컴퓨터네트워크, 빅데이터분석"
  }
];
var CERTIFICATIONS_RAW = [
  {
    "sortKey": 20240329,
    "name": "SQLD",
    "issuer": "한국데이터산업진흥원",
    "date": "20240329",
    "status": "취득",
    "credentialId": "SQLD-055020427",
    "color": "accent2"
  },
  {
    "sortKey": 20240330,
    "name": "네트워크관리사",
    "issuer": "한국정보통신자격협회",
    "date": "",
    "status": "준비 중",
    "credentialId": "",
    "color": "accent2"
  },
  {
    "sortKey": 20240330,
    "name": "정보처리기사",
    "issuer": "한국산업인력공단",
    "date": "",
    "status": "준비 중",
    "credentialId": "",
    "color": "accent2"
  }
];
var AWARDS_RAW = [
  {
    "sortKey": 20251125,
    "title": "AquaSLiME",
    "org": "BoB 14기",
    "issuer": "창업진흥원장 / 우수상",
    "date": "2025.11.25.",
    "type": "award",
    "desc": "물산업 혁신 창업대전 / 물산업 대상 소형언어모델을 활용한 보안 솔루션"
  },
  {
    "sortKey": 20260115,
    "title": "대법원 가족관계 증명서 발급 취약점 제보",
    "org": "대법원",
    "date": "2026.01.27",
    "type": "security",
    "kve": "KVE-2026-0123",
    "desc": "대법원 가족관계 증명서 발급 시스템의 보안 취약점 발견 및 담당 기관 공식 제보. Responsible Disclosure 프로세스 준수."
  },
  {
    "sortKey": 20250701,
    "title": "CLASSUM 취약점 제보",
    "org": "CLASSUM",
    "date": "2025.12.04",
    "type": "security",
    "desc": "교육 플랫폼 CLASSUM에서 보안 취약점 발견. Responsible Disclosure 프로세스에 따라 보안팀에 공식 제보."
  },
  {
    "sortKey": 20260806,
    "title": "메가스터디IT아카데미 IaC 부트캠프",
    "org": "메가스터디IT아카데미",
    "date": "2026.02.11 — 2026.08.06",
    "type": "activity",
    "desc": "Terraform, Ansible 등 IaC 도구 기반 인프라 자동화 과정."
  },
  {
    "sortKey": 20260226,
    "title": "BoB(Best of the Best) 14기",
    "org": "한국정보기술연구원",
    "date": "2025.07.01 — 2026.02.26",
    "type": "activity",
    "desc": "국내 최고 수준 정보보안 교육 프로그램. 보안 심화교육 및 OT 보안 솔루션 개발 프로젝트 수행."
  },
  {
    "sortKey": 20241231,
    "title": "51대 IT융합학부 학생회 사무부장",
    "org": "울산대학교 IT융합학부",
    "date": "2024.01.01 - 2024.12.31",
    "type": "activity",
    "desc": "써치 학생회 사무부장으로 행사 기획 및 운영 담당."
  },
  {
    "sortKey": 20231231,
    "title": "50대 IT융합학부 학생회 기획부장",
    "org": "울산대학교 IT융합학부",
    "date": "2023.01.01 - 2023.12.31",
    "type": "activity",
    "desc": "드림워크 학생회 기획부장으로 학부 행사 기획 및 진행."
  },
  {
    "sortKey": 20220731,
    "title": "육군 병장 만기전역 — 유선장비정비병",
    "org": "대한민국 육군 15사단 정비대대",
    "date": "2021.02.01 - 2022.07.31",
    "type": "activity",
    "desc": "유선 통신장비 정비 담당. 하드웨어 분해·조립 및 수리 역량 강화."
  }
];
var CAREER_JOURNEY_RAW = [
  {
    "sortKey": 20200302,
    "label": "울산대학교 입학",
    "sub": "2020 · IT융합전공"
  },
  {
    "sortKey": 20230901,
    "label": "Backend 개발",
    "sub": "2023-09.01 — · Spring Boot / JPA"
  },
  {
    "sortKey": 20250201,
    "label": "정보보안동아리 Unknown",
    "sub": "2025.02.01 — 2026.02.13 · OWSAP TOP 10"
  },
  {
    "sortKey": 20250701,
    "label": "BoB 14기",
    "sub": "2025.07.01 — 2026.02.26 · 보안제품개발트랙"
  },
  {
    "sortKey": 20260211,
    "label": "IaC 부트캠프",
    "sub": "2026.02.11 — 2026.08.06 · 메가스터디IT아카데미"
  }
];

var EDUCATION = sortByKeyAsc(EDUCATION_RAW);
var CERTIFICATIONS = sortByKeyAsc(CERTIFICATIONS_RAW);
var AWARDS = sortByKeyAsc(AWARDS_RAW);
var CAREER_JOURNEY = sortByKeyAsc(CAREER_JOURNEY_RAW);
var SKILLS = SKILLS_RAW.slice();
var PROFILE_TAGS = PROFILE_TAGS_RAW.slice();

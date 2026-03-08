var BLOG_POSTS_RAW = [
  {
    "date": "2025-11-10",
    "category": "Security",
    "tags": [
      "OT",
      "ICS",
      "Modbus",
      "BoB"
    ],
    "title": "OT 보안 — 산업 프로토콜(Modbus)을 직접 분석해보다",
    "summary": "BoB 프로젝트 중 Modbus 프로토콜을 Wireshark로 직접 캡처하고 분석한 기록. 왜 OT 환경이 보안에 취약한지 체감했다.",
    "detail": {
      "overview": "Modbus를 직접 패킷 단위로 분석하면서 OT 보안의 구조적 취약점을 정리한 글.",
      "sections": [
        {
          "title": "배경",
          "content": "<p>BoB 14기 OT 보안 프로젝트를 진행하면서 Modbus 프로토콜을 직접 분석할 일이 생겼다. IT 세계와 다르게 OT는 왜 이렇게 보안이 약한 구조로 설계됐는지 궁금했다.</p>"
        },
        {
          "title": "Modbus의 구조적 취약점",
          "content": "<ul><li>인증 메커니즘이 아예 없음 — 누구든 Function Code를 보내면 실행됨</li><li>암호화 없음 — 평문 통신이 기본</li><li>설계 당시(1979년) 보안은 고려 대상이 아니었음</li></ul>"
        },
        {
          "title": "Function Code 목록 (주요)",
          "content": "<pre><code>0x01 - Read Coil Status\n0x03 - Read Holding Registers\n0x06 - Write Single Register   ← 무인증 실행\n0x10 - Write Multiple Registers</code></pre>"
        },
        {
          "title": "느낀 점",
          "content": "<p>IT 보안과 OT 보안은 완전히 다른 세계다. OT는 가용성이 최우선이다. 공장이 멈추면 안 되기 때문. 이 관점 차이가 보안 설계의 차이를 만든다.</p>"
        }
      ]
    }
  },
  {
    "date": "2025-05-20",
    "category": "Security",
    "tags": [
      "OWASP",
      "SQLi",
      "Burp Suite",
      "Web Security"
    ],
    "title": "OWASP TOP 10 실습 — SQL Injection 완전 정복",
    "summary": "OWASP TOP 10 분석 프로젝트 중 SQL Injection 파트. 에러 기반, 블라인드, 타임 기반까지 직접 실습하며 정리.",
    "detail": {
      "overview": "SQL Injection의 주요 공격 패턴과 Spring/JPA 기준 방어 코드를 함께 정리한 실습 기록.",
      "sections": [
        {
          "title": "실습 환경",
          "content": "<ul><li>DVWA (Damn Vulnerable Web Application)</li><li>Burp Suite Community Edition</li></ul>"
        },
        {
          "title": "Error-Based SQLi",
          "content": "<pre><code>' OR 1=1 --\n' UNION SELECT null, version() --\n' UNION SELECT null, table_name FROM information_schema.tables --</code></pre>"
        },
        {
          "title": "방어 방법",
          "content": "<ul><li>Prepared Statement / Parameterized Query 사용 (가장 확실)</li><li>ORM 사용 (JPA, Hibernate)</li><li>입력값 화이트리스트 검증</li></ul>"
        },
        {
          "title": "Spring JPA에서의 안전한 코드",
          "content": "<pre><code>// 위험한 코드\n@Query(value = \"SELECT * FROM user WHERE name = '\" + name + \"'\", nativeQuery = true)\n\n// 안전한 코드\n@Query(\"SELECT u FROM User u WHERE u.name = :name\")\nUser findByName(@Param(\"name\") String name);</code></pre>"
        }
      ]
    }
  },
  {
    "date": "2025-02-14",
    "category": "Backend",
    "tags": [
      "Spring Boot",
      "JPA",
      "N+1",
      "Performance"
    ],
    "title": "JPA N+1 문제 — 한바퀴 프로젝트에서 실제로 겪은 후기",
    "summary": "한바퀴 프로젝트 개발 중 API 응답이 갑자기 느려진 원인이 N+1이었다. 발견부터 해결까지 정리.",
    "detail": {
      "overview": "실서비스 API 성능 저하 원인이 된 N+1 문제를 발견하고 개선한 과정 요약.",
      "sections": [
        {
          "title": "문제 발견",
          "content": "<p>화물 목록 API의 응답 시간이 데이터가 늘어날수록 선형으로 증가했다. 로그를 보니 쿼리가 미친 듯이 나가고 있었다.</p>"
        },
        {
          "title": "원인",
          "content": "<pre><code>List&lt;Cargo&gt; cargos = cargoRepository.findAll();  // 쿼리 1번\nfor (Cargo cargo : cargos) {\n    cargo.getOwner().getName();  // 각 화물마다 쿼리 1번씩 = N번\n}</code></pre>"
        },
        {
          "title": "해결 방법 — Fetch Join",
          "content": "<pre><code>@Query(\"SELECT c FROM Cargo c JOIN FETCH c.owner\")\nList&lt;Cargo&gt; findAllWithOwner();</code></pre>"
        },
        {
          "title": "결과",
          "content": "<ul><li>쿼리 수: N+1번 → 1번으로 감소</li><li>응답 시간: 약 80% 개선</li><li>교훈: JPA 쓸 때는 항상 실제 나가는 쿼리를 확인해야 한다</li></ul>"
        }
      ]
    }
  }
];
var BLOG_POSTS = BLOG_POSTS_RAW
  .map(function (item, index) { return { item: item, index: index }; })
  .sort(function (a, b) {
    var ka = Number(String(a.item.date || '').replace(/[^0-9]/g, '')) || 0;
    var kb = Number(String(b.item.date || '').replace(/[^0-9]/g, '')) || 0;
    if (ka !== kb) return ka - kb;
    return a.index - b.index;
  })
  .map(function (v) { return v.item; });

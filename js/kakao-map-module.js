/**
 * Kakao Maps JavaScript API Integration Module
 * Icheon Walking Tour Guide
 * App Key: 5ad26b93bebe33fee7b5c3e71a0f1b28
 * Fully Synced with User Kakao Map Bookmarks
 */

const KAKAO_APP_KEY = '5ad26b93bebe33fee7b5c3e71a0f1b28';

const COURSE_MAP_CONFIG = {
  "course-01": {
    "id": "course-01",
    "title": "이천 원도심 투어",
    "subtitle": "로컬 골목과 전통시장, 설봉호를 잇는 도보 당일치기",
    "folderId": "23973903",
    "shortUrl": "https://kko.to/Jx9RDjPVcq",
    "themeColor": "#5a3e30",
    "lineColor": "#8a5a44",
    "accentColor": "#d97706",
    "routeSpotNames": [
      "제일은행.이천터미널",
      "우진커피니케이션",
      "관고전통시장",
      "쌀베이커리카페 흥만소",
      "설봉공원"
    ],
    "placeMeta": {
      "제일은행.이천터미널": {
        "num": 1,
        "cat": "교통 기점",
        "icon": "🚌",
        "memo": "도보 여정의 시작점 · 잠실/서울 광역버스 도착",
        "tag": "transit"
      },
      "태극당": {
        "cat": "명장 베이커리",
        "icon": "🥖",
        "memo": "50년 전통 이천 대표 빵집, 양파베이글 & 쌀빵",
        "tag": "food"
      },
      "쌀베이커리카페 흥만소": {
        "num": 4,
        "cat": "쌀 디저트 카페",
        "icon": "🍞",
        "memo": "이천쌀 크림빵 & 시그니처 쌀 디저트와 레트로 한옥",
        "tag": "food"
      },
      "관고동사랑방": {
        "cat": "로컬 맛집",
        "icon": "🍝",
        "memo": "정성 가득한 생면 라자냐 & 파스타 1인 식사",
        "tag": "food"
      },
      "초이수제비": {
        "cat": "로컬 맛집",
        "icon": "🍲",
        "memo": "현지인이 사랑하는 얼큰/담백 칼칼한 손수제비",
        "tag": "food"
      },
      "우진커피니케이션": {
        "num": 2,
        "cat": "스페셜티 카페",
        "icon": "☕",
        "memo": "차분한 원도심 골목 속 전문 핸드드립 브루잉 바",
        "tag": "food"
      },
      "용인순대국집": {
        "cat": "로컬 맛집",
        "icon": "🥣",
        "memo": "진한 사골 육수와 부드러운 고기가 가득한 순대국",
        "tag": "food"
      },
      "백암토종순대": {
        "cat": "로컬 맛집",
        "icon": "🥣",
        "memo": "속이 꽉 찬 토종 순대와 든든한 국밥 혼밥",
        "tag": "food"
      },
      "멘야노유메": {
        "cat": "로컬 맛집",
        "icon": "🍜",
        "memo": "진한 돈코츠 육수와 자가제면 일본식 정통 라멘",
        "tag": "food"
      },
      "설봉공원": {
        "num": 5,
        "cat": "공원·호수",
        "icon": "🌲",
        "memo": "설봉호 둘레길 산책과 시원한 음악분수 쉼터",
        "tag": "spot"
      },
      "관고전통시장": {
        "num": 3,
        "cat": "전통시장",
        "icon": "🏪",
        "memo": "활기찬 5일장 장터 먹거리와 정겨운 닭발 골목",
        "tag": "spot"
      },
      "을를프로젝트 관고시장": {
        "cat": "로컬 복합문화",
        "icon": "🎨",
        "memo": "시장 골목 속 젊은 로컬 창작자들의 문화 실험 공간",
        "tag": "spot"
      },
      "팔남매": {
        "cat": "시장 명물",
        "icon": "🥨",
        "memo": "가성비 넘치는 즉석 찹쌀 꽈배기와 손만두",
        "tag": "food"
      },
      "소문난칼국수": {
        "cat": "로컬 맛집",
        "icon": "🍜",
        "memo": "매콤달콤 중독성 있는 이천 명물 면낙지와 칼국수",
        "tag": "food"
      },
      "삼미분식": {
        "cat": "시장 명물",
        "icon": "🍢",
        "memo": "매콤한 닭발과 떡볶이, 튀김이 유명한 시장 터줏대감",
        "tag": "food"
      },
      "이천용인닭발 본점": {
        "cat": "시장 명물",
        "icon": "🍗",
        "memo": "불향 가득한 매콤 닭발과 바삭한 닭똥집 튀김",
        "tag": "food"
      }
    }
  },
  "course-02": {
    "id": "course-02",
    "title": "이천 도예촌 투어",
    "subtitle": "경강선 타고 떠나는 쌀밥과 도자 예술 산책",
    "folderId": "23973908",
    "shortUrl": "https://kko.to/SmoaGzhtB3",
    "themeColor": "#385536",
    "lineColor": "#4a6946",
    "accentColor": "#d97706",
    "routeSpotNames": [
      "신둔도예촌역",
      "이천돌솥밥",
      "코유",
      "예스파크"
    ],
    "placeMeta": {
      "신둔도예촌역": {
        "num": 1,
        "cat": "경강선 전철역",
        "icon": "🚇",
        "memo": "도예촌 여정의 기점 · 판교/이매 환승 연계",
        "tag": "transit"
      },
      "이천돌솥밥": {
        "num": 2,
        "cat": "원조 이천쌀밥",
        "icon": "🍚",
        "memo": "20여 종 정갈한 반찬과 갓 지은 가마솥 쌀밥 한 상",
        "tag": "food"
      },
      "코유": {
        "num": 3,
        "cat": "복합문화 카페",
        "icon": "☕",
        "memo": "광주요 12칸 전통 오름가마와 테라스 정원, 도자 쇼룸",
        "tag": "food"
      },
      "예스파크": {
        "num": 4,
        "cat": "도예 예술마을",
        "icon": "🏺",
        "memo": "국내 최대 공예 예술 마을 · 수백여 공방과 갤러리 산책",
        "tag": "spot"
      },
      "저수지입구": {
        "cat": "버스정류장",
        "icon": "🚏",
        "memo": "예스파크 방면 마을버스/시내버스 승하차 정류소",
        "tag": "transit"
      },
      "카페오르골": {
        "cat": "감성 카페",
        "icon": "🎵",
        "memo": "오르골 소리와 커피 향이 머무는 예스파크 쉼터",
        "tag": "food"
      },
      "카페앤미": {
        "cat": "디저트 카페",
        "icon": "🍰",
        "memo": "아기자기한 디저트와 향긋한 커피가 있는 공방 카페",
        "tag": "food"
      },
      "너븐재": {
        "cat": "도자 갤러리",
        "icon": "🪴",
        "memo": "따뜻한 흙 질감의 감성 테이블웨어 도자 브랜드 쇼룸",
        "tag": "spot"
      },
      "그루도자기": {
        "cat": "도자 아틀리에",
        "icon": "🏺",
        "memo": "모던한 형태미와 실용성을 겸비한 수제 도예 공방",
        "tag": "spot"
      },
      "가마가텅빈날": {
        "cat": "도예 스튜디오",
        "icon": "🔥",
        "memo": "개성 넘치는 공예 작가의 작품과 감각적인 쇼룸",
        "tag": "spot"
      },
      "고척3리입구": {
        "cat": "버스정류장",
        "icon": "🚏",
        "memo": "예스파크 도예마을 진입로 버스정류장",
        "tag": "transit"
      },
      "수광2리": {
        "cat": "버스정류장",
        "icon": "🚏",
        "memo": "경충대로 변 광주요&코유 인근 버스 승하차장",
        "tag": "transit"
      }
    }
  },
  "course-03": {
    "id": "course-03",
    "title": "이천 문화공간 투어",
    "subtitle": "감각적인 복합문화공간과 쌀 디저트, 솥밥 여정",
    "folderId": "23973911",
    "shortUrl": "https://kko.to/XhrAdwEi7t",
    "themeColor": "#8a4b2d",
    "lineColor": "#a85d38",
    "accentColor": "#d97706",
    "routeSpotNames": [
      "제일은행.이천터미널",
      "이천쌀빵심빵",
      "시몬스 테라스점",
      "코지모가",
      "미솥지음"
    ],
    "placeMeta": {
      "제일은행.이천터미널": {
        "num": 1,
        "cat": "교통 기점",
        "icon": "🚌",
        "memo": "모가면 방면 25번 시내버스 탑승 기점",
        "tag": "transit"
      },
      "시몬스 테라스점": {
        "num": 3,
        "cat": "복합문화공간",
        "icon": "🏛️",
        "memo": "붉은 벽돌 야외 정원과 헤리티지 앨리 전시, 파머스 마켓",
        "tag": "spot"
      },
      "코지모가": {
        "num": 4,
        "cat": "감성 카페 (1F)",
        "icon": "☕",
        "memo": "고소한 이천쌀라떼와 바삭한 쌀크림 크루아상 디저트",
        "tag": "food"
      },
      "미솥지음": {
        "num": 5,
        "cat": "정갈한 솥밥 (2F)",
        "icon": "🍚",
        "memo": "도예가의 그릇에 정갈하게 지어 올린 윤기 흐르는 솥밥 한 상",
        "tag": "food"
      },
      "이천쌀빵심빵": {
        "num": 2,
        "cat": "쌀 베이커리",
        "icon": "🍞",
        "memo": "속 편하고 담백한 100% 이천쌀 천연발효 건강 빵집",
        "tag": "food"
      },
      "태루미앞": {
        "cat": "버스정류장",
        "icon": "🚏",
        "memo": "시몬스 테라스 / 코지모가 입구 맞은편 버스 정류장",
        "tag": "transit"
      },
      "신갈1리": {
        "cat": "버스정류장",
        "icon": "🚏",
        "memo": "모가면 방면 시내버스 및 똑버스 승하차 정류소",
        "tag": "transit"
      },
      "이천농업테마공원": {
        "cat": "테마공원",
        "icon": "🌾",
        "memo": "이천 쌀과 농업의 가치를 체험하는 힐링 생태 공원",
        "tag": "spot"
      },
      "라이스카페": {
        "cat": "쌀 디저트",
        "icon": "🍦",
        "memo": "농업테마공원 내 이천쌀 아이스크림 & 쌀 라떼",
        "tag": "food"
      }
    }
  }
};

const COURSE_BOOKMARKS = {
  "course-01": {
    "folderId": "23973903",
    "shortUrl": "https://kko.to/Jx9RDjPVcq",
    "count": 16,
    "bookmarks": [
      {
        "name": "제일은행.이천터미널",
        "addr": "경기 이천시 중리동",
        "lat": 37.27620731,
        "lng": 127.44682365,
        "type": "BUSSTOP",
        "key": "BS84986"
      },
      {
        "name": "태극당",
        "addr": "경기 이천시 영창로 195 1층 (창전동)",
        "lat": 37.28129081,
        "lng": 127.44423424,
        "type": "PLACE",
        "key": "8561651"
      },
      {
        "name": "쌀베이커리카페 흥만소",
        "addr": "경기 이천시 향교로 3 1층 (창전동)",
        "lat": 37.28538013,
        "lng": 127.43783057,
        "type": "PLACE",
        "key": "169186348"
      },
      {
        "name": "관고동사랑방",
        "addr": "경기 이천시 설봉로37번길 8 1층 (관고동)",
        "lat": 37.2800838,
        "lng": 127.43735788,
        "type": "PLACE",
        "key": "910319282"
      },
      {
        "name": "초이수제비",
        "addr": "경기 이천시 어재연로37번길 16 B동 2층 (창전동)",
        "lat": 37.28039084,
        "lng": 127.44491002,
        "type": "PLACE",
        "key": "9475587"
      },
      {
        "name": "우진커피니케이션",
        "addr": "경기 이천시 서희로48번길 3 (중리동)",
        "lat": 37.27994441,
        "lng": 127.44285969,
        "type": "PLACE",
        "key": "49238128"
      },
      {
        "name": "용인순대국집",
        "addr": "경기 이천시 중리천로72번길 23 1층 (중리동)",
        "lat": 37.27798496,
        "lng": 127.44542355,
        "type": "PLACE",
        "key": "10707998"
      },
      {
        "name": "백암토종순대",
        "addr": "경기 이천시 중리천로81번길 3 1층 (창전동)",
        "lat": 37.2789095,
        "lng": 127.4461202,
        "type": "PLACE",
        "key": "16654809"
      },
      {
        "name": "멘야노유메",
        "addr": "경기 이천시 중리천로 58 1동 1층 (중리동)",
        "lat": 37.2795253,
        "lng": 127.44409757,
        "type": "PLACE",
        "key": "1836656810"
      },
      {
        "name": "설봉공원",
        "addr": "경기 이천시 관고동 408-3",
        "lat": 37.27662621,
        "lng": 127.4283311,
        "type": "PLACE",
        "key": "11343810"
      },
      {
        "name": "관고전통시장",
        "addr": "경기 이천시 중리천로21번길 6 (창전동)",
        "lat": 37.28075667,
        "lng": 127.44057317,
        "type": "PLACE",
        "key": "13725635"
      },
      {
        "name": "을를프로젝트 관고시장",
        "addr": "경기 이천시 중리천로21번길 21 1층 (관고동)",
        "lat": 37.28145605,
        "lng": 127.44052312,
        "type": "PLACE",
        "key": "453708615"
      },
      {
        "name": "팔남매",
        "addr": "경기 이천시 서희로59번길 21 (창전동)",
        "lat": 37.28088625,
        "lng": 127.44158426,
        "type": "PLACE",
        "key": "820974777"
      },
      {
        "name": "소문난칼국수",
        "addr": "경기 이천시 설봉로58번길 30 (관고동)",
        "lat": 37.28113754,
        "lng": 127.43991687,
        "type": "PLACE",
        "key": "10563611"
      },
      {
        "name": "삼미분식",
        "addr": "경기 이천시 중리천로21번길 9 관고전통시장 1층 (관고동)",
        "lat": 37.28091219,
        "lng": 127.44042523,
        "type": "PLACE",
        "key": "12533475"
      },
      {
        "name": "이천용인닭발 본점",
        "addr": "경기 이천시 중리천로21번길 11 1층 (관고동)",
        "lat": 37.28097013,
        "lng": 127.4403534,
        "type": "PLACE",
        "key": "344509020"
      }
    ]
  },
  "course-02": {
    "folderId": "23973908",
    "shortUrl": "https://kko.to/SmoaGzhtB3",
    "count": 13,
    "bookmarks": [
      {
        "name": "신둔도예촌역",
        "addr": "경기도 이천시 신둔면 남정로 55",
        "lat": 37.31561301,
        "lng": 127.40524273,
        "type": "SUBWAYSTATION",
        "key": "SES40M136"
      },
      {
        "name": "이천돌솥밥",
        "addr": "경기 이천시 신둔면 경충대로 3194 1층 (신둔면 수광리)",
        "lat": 37.31137398,
        "lng": 127.40095394,
        "type": "PLACE",
        "key": "8543266"
      },
      {
        "name": "코유",
        "addr": "경기 이천시 신둔면 경충대로 3234 에이동 1층 (신둔면 수광리)",
        "lat": 37.31429242,
        "lng": 127.39801381,
        "type": "PLACE",
        "key": "454460196"
      },
      {
        "name": "예스파크",
        "addr": "경기 이천시 신둔면 도자예술로 57",
        "lat": 37.294242,
        "lng": 127.385500,
        "type": "PLACE",
        "key": "YESPARK"
      },
      {
        "name": "저수지입구",
        "addr": "경기 이천시 신둔면",
        "lat": 37.28960305,
        "lng": 127.3846513,
        "type": "BUSSTOP",
        "key": "BS85782"
      },
      {
        "name": "카페오르골",
        "addr": "경기 이천시 신둔면 도자예술로62번길 27-17 1,2층 (신둔면 고척리)",
        "lat": 37.29309175,
        "lng": 127.38309654,
        "type": "PLACE",
        "key": "1308641329"
      },
      {
        "name": "카페앤미",
        "addr": "경기 이천시 신둔면 도자예술로62번길 113-26 (신둔면 고척리)",
        "lat": 37.29115476,
        "lng": 127.38134997,
        "type": "PLACE",
        "key": "740760095"
      },
      {
        "name": "너븐재",
        "addr": "경기 이천시 신둔면 도자예술로6번길 180 1층 (신둔면 고척리)",
        "lat": 37.2960767,
        "lng": 127.38509214,
        "type": "PLACE",
        "key": "2010643767"
      },
      {
        "name": "그루도자기",
        "addr": "경기 이천시 신둔면 도자예술로 47 (신둔면 고척리)",
        "lat": 37.29424287,
        "lng": 127.3859918,
        "type": "PLACE",
        "key": "961238570"
      },
      {
        "name": "가마가텅빈날",
        "addr": "경기 이천시 신둔면 도자예술로 47 (신둔면 고척리)",
        "lat": 37.29424645,
        "lng": 127.38599859,
        "type": "PLACE",
        "key": "940925549"
      },
      {
        "name": "고척3리입구",
        "addr": "경기 이천시 신둔면",
        "lat": 37.29435803,
        "lng": 127.39153061,
        "type": "BUSSTOP",
        "key": "BS85135"
      },
      {
        "name": "고척3리입구",
        "addr": "경기 이천시 신둔면",
        "lat": 37.29444973,
        "lng": 127.39106908,
        "type": "BUSSTOP",
        "key": "BS85134"
      },
      {
        "name": "수광2리",
        "addr": "경기 이천시 신둔면",
        "lat": 37.31204145,
        "lng": 127.3948492,
        "type": "BUSSTOP",
        "key": "BS85462"
      }
    ]
  },
  "course-03": {
    "folderId": "23973911",
    "shortUrl": "https://kko.to/XhrAdwEi7t",
    "count": 9,
    "bookmarks": [
      {
        "name": "제일은행.이천터미널",
        "addr": "경기 이천시 중리동",
        "lat": 37.27620731,
        "lng": 127.44682365,
        "type": "BUSSTOP",
        "key": "BS84986"
      },
      {
        "name": "시몬스 테라스점",
        "addr": "경기 이천시 모가면 사실로 988 1층 (모가면 신갈리)",
        "lat": 37.19765239,
        "lng": 127.44626221,
        "type": "PLACE",
        "key": "298604859"
      },
      {
        "name": "코지모가",
        "addr": "경기 이천시 모가면 사실로 979-10 B동 2층 (모가면 신갈리)",
        "lat": 37.19781987,
        "lng": 127.44581266,
        "type": "PLACE",
        "key": "183988718"
      },
      {
        "name": "미솥지음",
        "addr": "경기 이천시 모가면 사실로 979-10 B동 1층 (모가면 신갈리)",
        "lat": 37.1978271,
        "lng": 127.44580819,
        "type": "PLACE",
        "key": "699599122"
      },
      {
        "name": "이천쌀빵심빵",
        "addr": "경기 이천시 모가면 사실로 1005 1층 (모가면 신갈리)",
        "lat": 37.19944116,
        "lng": 127.44692605,
        "type": "PLACE",
        "key": "909836156"
      },
      {
        "name": "태루미앞",
        "addr": "경기 이천시 모가면",
        "lat": 37.19855574,
        "lng": 127.44636977,
        "type": "BUSSTOP",
        "key": "BS85400"
      },
      {
        "name": "신갈1리",
        "addr": "경기 이천시 모가면",
        "lat": 37.19801201,
        "lng": 127.44617422,
        "type": "BUSSTOP",
        "key": "BS85399"
      },
      {
        "name": "이천농업테마공원",
        "addr": "경기 이천시 모가면 공원로 48 (모가면 어농리)",
        "lat": 37.17936347,
        "lng": 127.44468619,
        "type": "PLACE",
        "key": "994649647"
      },
      {
        "name": "라이스카페",
        "addr": "경기 이천시 모가면 공원로 48 이천농업테마공원 1층 (모가면 어농리)",
        "lat": 37.1776252,
        "lng": 127.44592593,
        "type": "PLACE",
        "key": "1757443201"
      }
    ]
  }
};

// Global cache for initialized map instances
window.kakaoMapInstances = window.kakaoMapInstances || {};
window.activeMapMarkers = window.activeMapMarkers || [];
window.activeCourseKey = null;

/**
 * Ensure Kakao Maps SDK is loaded and execute callback
 */
function ensureKakaoMapsLoaded(callback) {
  if (window.kakao && window.kakao.maps && window.kakao.maps.Map) {
    callback();
    return;
  }

  const existingScript = document.querySelector('script[src*="dapi.kakao.com/v2/maps/sdk.js"]');
  if (existingScript) {
    if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
      window.kakao.maps.load(callback);
    } else {
      existingScript.addEventListener('load', () => {
        window.kakao.maps.load(callback);
      });
    }
    return;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`;
  script.onload = () => {
    window.kakao.maps.load(callback);
  };
  script.onerror = () => {
    console.error('카카오 지도 SDK 로드에 실패했습니다. 도메인 등록(http://localhost:8080)을 확인해주세요.');
  };
  document.head.appendChild(script);
}

/**
 * Render interactive Kakao Map with User's Bookmarks
 */
function renderKakaoCourseMap(containerId, courseKey) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const config = COURSE_MAP_CONFIG[courseKey];
  const bmData = COURSE_BOOKMARKS[courseKey];
  if (!config || !bmData) return;

  window.activeCourseKey = courseKey;

  ensureKakaoMapsLoaded(() => {
    let mapObj = window.kakaoMapInstances[containerId];
    let map = null;

    if (!mapObj) {
      const firstBm = bmData.bookmarks[0];
      const mapCenter = new kakao.maps.LatLng(firstBm.lat, firstBm.lng);

      map = new kakao.maps.Map(container, {
        center: mapCenter,
        level: 5
      });

      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      mapObj = { map: map, bounds: null };
      window.kakaoMapInstances[containerId] = mapObj;
    } else {
      map = mapObj.map;
    }

    // Clean up existing markers & polyline
    if (window.activeMapMarkers && window.activeMapMarkers.length > 0) {
      window.activeMapMarkers.forEach(m => {
        if (m.overlay) m.overlay.setMap(null);
        if (m.infoOverlay) m.infoOverlay.setMap(null);
      });
    }
    window.activeMapMarkers = [];

    if (window.activeCoursePolyline) {
      window.activeCoursePolyline.setMap(null);
      window.activeCoursePolyline = null;
    }

    const bounds = new kakao.maps.LatLngBounds();
    const routePoints = [];
    const markerList = [];
    let currentOpenOverlay = null;

    // Process all bookmarks
    bmData.bookmarks.forEach((bm) => {
      const pos = new kakao.maps.LatLng(bm.lat, bm.lng);
      bounds.extend(pos);

      // Metadata lookup
      const meta = config.placeMeta[bm.name] || {};
      const isRoute = meta.num !== undefined;
      const num = meta.num || null;
      const cat = meta.cat || (bm.type === 'BUSSTOP' ? '버스정류장' : (bm.type === 'SUBWAYSTATION' ? '전철역' : '로컬 스팟'));
      const icon = meta.icon || (bm.type === 'BUSSTOP' ? '🚏' : (meta.tag === 'spot' ? '🏛️' : '⭐️'));
      const memo = meta.memo || bm.addr;
      const tag = meta.tag || (bm.type === 'BUSSTOP' ? 'transit' : (bm.type === 'SUBWAYSTATION' ? 'transit' : 'spot'));

      if (isRoute) {
        routePoints.push({ num: num, pos: pos, name: bm.name });
      }

      // Marker DOM Element
      const markerEl = document.createElement('div');
      markerEl.className = 'kakao-custom-marker';
      markerEl.setAttribute('data-tag', tag);
      markerEl.setAttribute('data-name', bm.name);
      // Fixed: Removed transform: translate(-50%, -100%) to align precisely with xAnchor: 0.5, yAnchor: 1.0
      markerEl.style.cssText = `
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.15s ease;
        z-index: ${isRoute ? '20' : '10'};
      `;

      if (isRoute) {
        // Numbered pin for sequential route stops
        markerEl.innerHTML = `
          <div style="background: ${config.themeColor}; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; border: 2.5px solid #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13.5px; font-family: 'DM Sans', sans-serif;">
            ${num}
          </div>
          <div style="background: rgba(36,30,25,0.92); backdrop-filter: blur(4px); color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; margin-top: 3px; white-space: nowrap; box-shadow: 0 2px 6px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.18);">
            ${bm.name}
          </div>
        `;
      } else {
        // Star / Category pin for bookmarked favorite spots
        const isTransit = tag === 'transit';
        const isCultural = tag === 'spot';
        const pinBg = isTransit ? '#4b5563' : (isCultural ? '#0284c7' : '#d97706');
        const pinIcon = isTransit ? '🚏' : (isCultural ? '🏛️' : '★');
        markerEl.innerHTML = `
          <div style="background: ${pinBg}; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; border: 2px solid #ffffff; box-shadow: 0 3px 8px rgba(0,0,0,0.22); display: flex; align-items: center; justify-content: center; font-size: 11.5px;">
            ${pinIcon}
          </div>
          <div style="background: #ffffff; color: #241e19; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 6px; margin-top: 2px; white-space: nowrap; box-shadow: 0 2px 6px rgba(0,0,0,0.15); border: 1px solid #ebdccb;">
            ${bm.name}
          </div>
        `;
      }

      // Precise Anchoring
      const overlay = new kakao.maps.CustomOverlay({
        position: pos,
        content: markerEl,
        xAnchor: 0.5,
        yAnchor: 1.0,
        zIndex: isRoute ? 20 : 10
      });
      overlay.setMap(map);

      // Info Card Popover
      const infoCard = document.createElement('div');
      infoCard.style.cssText = `
        background: #ffffff;
        border: 1.5px solid #dfd4c4;
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(36,30,25,0.25);
        padding: 16px 18px 14px;
        width: 270px;
        font-family: 'Noto Sans KR', sans-serif;
        position: relative;
        z-index: 60;
      `;
      infoCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            ${isRoute ? `<span style="background: ${config.themeColor}; color: #fff; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">코스 0${num}</span>` : `<span style="background: #fef3c7; color: #92400e; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; border: 1px solid #fde68a;">⭐️ 즐겨찾기</span>`}
            <span style="font-size: 11px; color: #7a6d61; font-weight: 700;">${cat}</span>
          </div>
          <button type="button" class="close-card-btn" aria-label="닫기" style="background:none; border:none; color:#888; font-size:18px; line-height:1; cursor:pointer; padding:0 4px;">&times;</button>
        </div>
        <h4 style="font-size: 15px; font-weight: 800; color: #241e19; margin: 0 0 3px;">${icon} ${bm.name}</h4>
        <div style="font-size: 11.5px; color: #8c786a; margin-bottom: 8px;">📍 ${bm.addr}</div>
        <p style="font-size: 12px; color: #524438; line-height: 1.45; margin: 0 0 12px; background: #faf7f2; padding: 8px 10px; border-radius: 8px; border: 1px solid #f0ebe1;">${memo}</p>
        <div style="display: flex; gap: 6px;">
          <a href="https://map.kakao.com/link/to/${encodeURIComponent(bm.name)},${bm.lat},${bm.lng}" target="_blank" rel="noopener noreferrer" style="flex: 1; text-align: center; background: #fae100; color: #371d1e; text-decoration: none; font-size: 11.5px; font-weight: 800; padding: 7px 8px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
            카카오맵 길찾기 ↗
          </a>
          <a href="https://map.kakao.com/link/map/${encodeURIComponent(bm.name)},${bm.lat},${bm.lng}" target="_blank" rel="noopener noreferrer" style="flex: 1; text-align: center; background: #f3eee7; color: #403429; text-decoration: none; font-size: 11.5px; font-weight: 700; padding: 7px 8px; border-radius: 8px;">
            크게 보기
          </a>
        </div>
      `;

      const infoOverlay = new kakao.maps.CustomOverlay({
        position: pos,
        content: infoCard,
        xAnchor: 0.5,
        yAnchor: 1.18,
        zIndex: 60
      });

      const closeBtn = infoCard.querySelector('.close-card-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          infoOverlay.setMap(null);
          currentOpenOverlay = null;
        });
      }

      function openThisOverlay() {
        if (currentOpenOverlay) currentOpenOverlay.setMap(null);
        infoOverlay.setMap(map);
        currentOpenOverlay = infoOverlay;
        map.panTo(pos);
      }

      markerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentOpenOverlay === infoOverlay) {
          infoOverlay.setMap(null);
          currentOpenOverlay = null;
        } else {
          openThisOverlay();
        }
      });

      markerList.push({
        name: bm.name,
        tag: tag,
        isRoute: isRoute,
        markerEl: markerEl,
        overlay: overlay,
        infoOverlay: infoOverlay,
        open: openThisOverlay,
        pos: pos
      });
    });

    window.activeMapMarkers = markerList;

    // Draw route polyline connecting sequential route points
    routePoints.sort((a, b) => a.num - b.num);
    if (routePoints.length > 1) {
      const polyline = new kakao.maps.Polyline({
        path: routePoints.map(r => r.pos),
        strokeWeight: 4,
        strokeColor: config.lineColor,
        strokeOpacity: 0.88,
        strokeStyle: 'shortdash'
      });
      polyline.setMap(map);
      window.activeCoursePolyline = polyline;
    }

    // Set map bounds to show all bookmarked pins nicely
    map.setBounds(bounds);
    mapObj.bounds = bounds;

    // Close open popup on map click
    kakao.maps.event.addListener(map, 'click', () => {
      if (currentOpenOverlay) {
        currentOpenOverlay.setMap(null);
        currentOpenOverlay = null;
      }
    });

    // Populate the Bookmarks Drawer below the map
    populateBookmarksDrawer(courseKey, markerList);

    // Reset filter chips to 'all'
    resetFilterChips();

    setTimeout(() => {
      map.relayout();
      map.setBounds(bounds);
    }, 120);
  });
}

/**
 * Reset filter chips UI to 'all'
 */
function resetFilterChips() {
  const chips = document.querySelectorAll('.kko-map-filter-bar .filter-chip');
  chips.forEach(c => {
    if (c.getAttribute('data-filter') === 'all') {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
}

/**
 * Populate interactive drawer list of bookmarked places below map
 */
function populateBookmarksDrawer(courseKey, markerList) {
  const drawer = document.getElementById('kko-bookmarks-drawer');
  if (!drawer) return;

  const config = COURSE_MAP_CONFIG[courseKey];
  const bmData = COURSE_BOOKMARKS[courseKey];
  if (!config || !bmData) return;

  drawer.innerHTML = '';
  
  bmData.bookmarks.forEach((bm) => {
    const meta = config.placeMeta[bm.name] || {};
    const isRoute = meta.num !== undefined;
    const cat = meta.cat || (bm.type === 'BUSSTOP' ? '정류장' : '로컬');
    const icon = meta.icon || (bm.type === 'BUSSTOP' ? '🚏' : (meta.tag === 'spot' ? '🏛️' : '⭐️'));
    const markerObj = markerList.find(m => m.name === bm.name);

    const item = document.createElement('div');
    item.className = 'drawer-item';
    item.setAttribute('data-name', bm.name);
    item.setAttribute('data-tag', meta.tag || (bm.type === 'BUSSTOP' ? 'transit' : 'spot'));
    item.setAttribute('data-route', isRoute ? 'true' : 'false');
    item.style.cssText = `
      flex: 0 0 auto;
      width: 220px;
      background: #ffffff;
      border: 1px solid #ebdccb;
      border-radius: 14px;
      padding: 12px 14px;
      cursor: pointer;
      transition: all 0.18s ease;
      box-shadow: 0 2px 6px rgba(36,30,25,0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    item.innerHTML = `
      <div>
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
          <span style="font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; ${isRoute ? `background: ${config.themeColor}; color: #fff;` : `background: #fef3c7; color: #92400e; border: 1px solid #fde68a;`}">
            ${isRoute ? `0${meta.num} 코스` : '⭐️ 즐겨찾기'}
          </span>
          <span style="font-size: 10.5px; color: #8c786a; font-weight: 600;">${cat}</span>
        </div>
        <div style="font-size: 13.5px; font-weight: 800; color: #241e19; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${icon} ${bm.name}
        </div>
        <div style="font-size: 11px; color: #887a6d; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${bm.addr}
        </div>
      </div>
    `;

    item.addEventListener('mouseenter', () => {
      item.style.borderColor = config.themeColor;
      item.style.transform = 'translateY(-2px)';
      item.style.boxShadow = '0 6px 16px rgba(36,30,25,0.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.borderColor = '#ebdccb';
      item.style.transform = 'translateY(0)';
      item.style.boxShadow = '0 2px 6px rgba(36,30,25,0.04)';
    });

    item.addEventListener('click', () => {
      if (markerObj) {
        markerObj.open();
      }
    });

    drawer.appendChild(item);
  });
}

/**
 * Filter markers on map by category (5 categories)
 * Features: fitBounds, polyline sync, flex drawer preservation, live badge update
 */
function filterMapMarkers(filterType) {
  const chips = document.querySelectorAll('.kko-map-filter-bar .filter-chip');
  chips.forEach(c => c.classList.remove('active'));

  const activeBtn = document.querySelector(`.kko-map-filter-bar button[data-filter="${filterType}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const markers = window.activeMapMarkers || [];
  const drawerItems = document.querySelectorAll('#kko-bookmarks-drawer .drawer-item');
  const mapObj = window.kakaoMapInstances['kakao-map-canvas-detail'];

  const filteredBounds = new kakao.maps.LatLngBounds();
  let visibleCount = 0;

  markers.forEach(m => {
    let show = true;
    if (filterType === 'route') show = m.isRoute;
    else if (filterType === 'spot') show = (m.tag === 'spot');
    else if (filterType === 'food') show = (m.tag === 'food');
    else if (filterType === 'transit') show = (m.tag === 'transit');

    if (show) {
      if (mapObj && mapObj.map) m.overlay.setMap(mapObj.map);
      filteredBounds.extend(m.pos);
      visibleCount++;
    } else {
      m.overlay.setMap(null);
      if (m.infoOverlay) m.infoOverlay.setMap(null);
    }
  });

  // Polyline sync: show only for 'all' and 'route'
  if (window.activeCoursePolyline && mapObj && mapObj.map) {
    const showPolyline = (filterType === 'all' || filterType === 'route');
    window.activeCoursePolyline.setMap(showPolyline ? mapObj.map : null);
  }

  // Dynamic map bounds adjustment (fitBounds)
  if (visibleCount > 0 && mapObj && mapObj.map) {
    mapObj.map.setBounds(filteredBounds);
  }

  // Filter drawer items while preserving flexbox layout
  drawerItems.forEach(d => {
    const name = d.getAttribute('data-name');
    const m = markers.find(item => item.name === name);
    if (!m) return;
    let show = true;
    if (filterType === 'route') show = m.isRoute;
    else if (filterType === 'spot') show = (m.tag === 'spot');
    else if (filterType === 'food') show = (m.tag === 'food');
    else if (filterType === 'transit') show = (m.tag === 'transit');

    d.style.display = show ? '' : 'none'; // Fixed: preserve flexbox
  });

  // Update top counter badge
  const countBadge = document.getElementById('modal-bm-count');
  if (countBadge) {
    const filterNames = {
      all: '장소 전체',
      route: '추천 동선',
      spot: '볼거리·문화',
      food: '맛집·카페',
      transit: '대중교통'
    };
    countBadge.textContent = `${visibleCount}개 ${filterNames[filterType] || '장소'} 동기화`;
  }
}

/**
 * Open detail course modal and trigger Kakao Map render
 */
function openDetailMap(courseKey) {
  const dialog = document.getElementById('map-dialog');
  if (!dialog) return;

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  }

  // Update modal header links and count if elements exist
  const config = COURSE_MAP_CONFIG[courseKey];
  const bmData = COURSE_BOOKMARKS[courseKey];
  if (config && bmData) {
    const titleEl = document.getElementById('map-title');
    if (titleEl) titleEl.textContent = `${config.title} 즐겨찾기 지도`;

    const countBadge = document.getElementById('modal-bm-count');
    if (countBadge) countBadge.textContent = `${bmData.count}개 장소 동기화`;

    const kkoAppBtn = document.getElementById('btn-open-kko-folder');
    if (kkoAppBtn) {
      kkoAppBtn.href = config.shortUrl;
    }
  }

  // Allow dialog reflow to settle before rendering map
  setTimeout(() => {
    renderKakaoCourseMap('kakao-map-canvas-detail', courseKey);
  }, 80);
}

// Window resize handler
window.addEventListener('resize', () => {
  Object.keys(window.kakaoMapInstances || {}).forEach((id) => {
    const obj = window.kakaoMapInstances[id];
    if (obj && obj.map && obj.bounds) {
      obj.map.relayout();
      obj.map.setBounds(obj.bounds);
    }
  });
});

// Global exposures
window.renderKakaoCourseMap = renderKakaoCourseMap;
window.filterMapMarkers = filterMapMarkers;
window.openDetailMap = openDetailMap;

/**
 * 입력값 검증 유틸리티
 *
 * 로그인과 결과 확인 페이지에서 공통으로 사용
 * 인스타 ID와 본인확인 숫자를 검증하고 포맷팅
 */

// 로그인할 수 없는 금지 ID 목록
const BLACK_LIST_IDS = [
  "@likelion_inu",
  "@insta",
  "@instagram",
  "@likelion",
  "@likelion.inu",
];

/**
 * 인스타 ID 검증 및 포맷팅
 *
 * 처리:
 * 1. 소문자로 변환
 * 2. 특수문자 제거 (영소문자, 숫자, _, .만 허용)
 * 3. 연속된 점 제거
 * 4. @ 기호 고정
 * 5. 최대 30자 제한
 */
export const validateAndFormatInstaId = (value) => {
  // 소문자 + 허용된 문자만 남기기
  let filtered = value.toLowerCase().replace(/[^a-z0-9._@]|\s/g, "");

  // 연속된 . 방지
  if (filtered.includes("..")) return value;

  // @ 기호 고정
  if (filtered.startsWith("@")) {
    filtered = "@" + filtered.slice(1).replace(/@/g, "");
  } else {
    filtered = "@" + filtered.replace(/@/g, "");
  }

  // 최대 길이
  return filtered.slice(0, 30);
};

/** 로그인 불가능한 ID인지 확인 */
export const isBlackListedId = (instaId) => {
  return BLACK_LIST_IDS.includes(instaId);
};

export const isValidInstaId = (instaId) => {
  return (
    instaId.length >= 3 && instaId.length <= 30 && !isBlackListedId(instaId)
  );
};

export const isValidVerificationPin = (pin) => {
  return pin.length === 4 && /^\d+$/.test(pin);
};

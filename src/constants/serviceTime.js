// 서비스 시간에 따른 단계 반환 함수
export const getPhase = () => {
  const h = new Date().getHours();
  if (h >= 0 && h < 11) return "PREPARING"; // 오픈 준비
  if (h >= 11 && h < 17) return "SURVEY"; // 설문
  if (h >= 17 && h < 18) return "AGGREGATING"; // 집계 중
  return "RESULT"; // 결과 (18시~24시)
};

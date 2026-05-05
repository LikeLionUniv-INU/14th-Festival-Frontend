/**
 * 현재 시간에 따른 서비스 단계 반환
 * 0-11시:  PREPARING    (오픈 준비 중)
 * 11-17시: SURVEY       (설문 참여)
 * 17-18시: AGGREGATING  (결과 집계 중)
 * 18-24시: RESULT       (결과 확인)
 */
export const getPhase = () => {
  const h = new Date().getHours();
  if (h >= 0 && h < 11) return "PREPARING";
  if (h >= 11 && h < 17) return "SURVEY";
  if (h >= 17 && h < 18) return "AGGREGATING";
  return "RESULT";
};

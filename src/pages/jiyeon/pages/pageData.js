// 비슷한 페이지끼리 묶어서 관리할 데이터

export const selectPages = [
  {
    path: "/complete",
    title: "작성 완료!",
    button: "다음",
  },
  {
    path: "/ready",
    title: "선택 완료!",
    button: "다음",
  },
];

export const questionPages = [
  {
    path: "/about-me",
    title: "질문에 대한\n답변을 선택해줘!",
    fontSize: "2rem",
    button: "시작하기",
  },
  {
    path: "/about-you",
    title: "이제 내가 원하는\n상대를 골라보자!",
    fontSize: "2rem",
    button: "다음",
  },
];

export const resultPages = [
  {
    path: "/waiting",
    title: "결과는 18시에\n나와요!",
    fontSize: "2rem",
  },
  {
    path: "/match-success",
    title: "매칭 성공!",
    lion: "bigheart",
    button: "결과 확인하기",
  },
  {
    path: "/match-fail",
    title: "매칭 실패!",
    lion: "crying",
    button: "끝내기",
  },
];
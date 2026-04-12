// 비슷한 페이지끼리 묶어서 관리할 데이터

export const selectPages = [
  {
    path: "/choice-done",
    title: "작성 완료!",
    button: "다음",
  },
];

export const questionPages = [
  {
    path: "/lets-choice",
    title: "질문에 대한\n답변을 선택해줘!",
    fontSize: "2rem",
    button: "시작하기",
  },
];

export const resultPages = [
  {
    path: "/match-success",
    title: "매칭 성공!",
    lion: "bigheart",
    button: "결과 확인하기",
    isSuccess: "true",
  },
  {
    path: "/match-fail",
    title: "매칭 실패!",
    lion: "crying",
    button: "끝내기",
  },
];

// match-success, match-fail 페이지 묶음

import Complete from "../Complete";

export default function ResultPage({ title, lion, button }) {
  return (
    <Complete
      title={title}
      fontSize="40px"
      lion={lion}
      button={button}
    />
  );
}
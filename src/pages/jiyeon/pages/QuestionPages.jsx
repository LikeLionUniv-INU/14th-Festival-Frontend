//lets-choice 페이지 묶음

import Complete from "../Complete";

export default function QuestionPage({ title, button }) {
  return (
    <Complete
      title={title}
      fontSize="2rem"
      button={button}
      animation="typewriter"
    />
  );
}

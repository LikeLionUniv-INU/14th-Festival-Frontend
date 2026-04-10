//about-me, about-you 페이지 묶음

import { Route } from "react-router-dom";
import Complete from "../Complete";
import { questionPages } from "./pageData";

export default function QuestionPage({ title, button }) {
  return <Complete title={title} fontSize="2rem" button={button} />;
}
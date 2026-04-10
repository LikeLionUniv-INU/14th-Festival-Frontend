//complete, ready 페이지 묶음

import { Route } from "react-router-dom";
import Complete from "../Complete";
import { selectPages } from "./pageData";

export default function SelectPage({ title, button }) {
  return <Complete title={title} button={button} />;
}
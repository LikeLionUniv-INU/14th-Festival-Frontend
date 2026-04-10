import { Route } from "react-router-dom";
import Complete from "../Complete";
import { resultPages } from "./pageData";

export default function ResultPage({ title, lion, button }) {
  return (
    <Complete
      title={title}
      fontSize="2rem"
      lion={lion}
      button={button}
    />
  );
}
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const SurveyContext = createContext();

// 답변 초기값
const initialState = {
  gender: null,
  animalType: [],
  interests: [],
  movieGenres: [],
  preferredAnimals: [],
};

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useLocalStorage("survey_data", initialState);

  // 특정 항목만 업데이트
  const updateAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const resetAnswers = () => {
    setAnswers(initialState);
  };

  return (
    <SurveyContext.Provider value={{ answers, updateAnswer, resetAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);

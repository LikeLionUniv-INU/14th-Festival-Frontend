// 설문 답변 저장하는 곳
import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    gender: null,
    animalType: [],
    interests: [],
    moviGenres: [],
    preferredAnimals: [],
  });

  // 특정 항목만 업데이트
  const updateAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const resetAnswers = () => {
    setAnswers({
      gender: null,
      animalType: null,
      interests: [],
      moviGenres: [],
      preferredAnimals: [],
    });
  };

  return (
    <SurveyContext.Provider value={{ answers, updateAnswer, resetAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);

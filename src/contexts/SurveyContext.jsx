/**
 * 설문 응답 전역 상태 관리
 * 
 * 역할:
 * - 사용자가 작성한 설문 답변을 전역 상태로 관리
 * - 로컬스토리지에 자동 저장하여 새로고침 후에도 유지
 * - 모든 설문 페이지에서 접근 가능 (마지막 응답 후 한 번에 보내기)
 */

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
  // 로컬스토리지에 답변 저장
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

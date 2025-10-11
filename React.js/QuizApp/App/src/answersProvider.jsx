import { useContext, createContext, useState } from "react";
import Question from "./components/question";

const AnswersContext = createContext();
export default function useAnswers() {
  return useContext(AnswersContext);
}

export function AnswersProvider({ children }) {
  const [answers, setAnswers] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  function SetAnswer(answer) {
    setAnswers([...answers, answer]);
  }

  function SetSkipped(SkippedQuestion) {
    setSkippedQuestions([...skippedQuestions, SkippedQuestion]);
  }

  return (
    <AnswersContext.Provider
      value={{ SetAnswer, SetSkipped, answers, skippedQuestions }}
    >
      {children}
    </AnswersContext.Provider>
  );
}

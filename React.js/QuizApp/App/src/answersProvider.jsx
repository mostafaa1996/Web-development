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
  function ReadAnswer(index) {
    return answers[index];
  }
  function SetSkipped(SkippedQuestion) {
    setSkippedQuestions([...skippedQuestions, SkippedQuestion]);
  }
  function ReadSkipped(index) {
    return skippedQuestions[index];
  }
  return (
    <AnswersContext.Provider
      value={{ SetAnswer, ReadAnswer, SetSkipped, ReadSkipped , answers , skippedQuestions}}
    >
      {children}
    </AnswersContext.Provider>
  );
}

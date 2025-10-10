import { useEffect, useRef, useState, useReducer } from "react";

import Question from "./question";
import QuizBar from "./QuizBar";
import Answer from "./answer";
import ConfirmButton from "./ConfirmButton";
import questions from "../questions";
import SkipButton from "./SkipButton";
import useAnswers from "../answersProvider";
import DecisionReducer from "../DecisionReducer";

export default function Quiz() {
  const { SetAnswer, ReadAnswer, SetSkipped, ReadSkipped } = useAnswers();

  const [currentQuestion, setCurrentQuestion] = useState({
    id: questions[0].id,
    question: questions[0].text,
  });

  const [Decision, dispatch] = useReducer(DecisionReducer, {
    hasAchoiceBeenSelected: false,
    confirmed: false,
    skipped: false,
    answer: null,
  });

  let MyQuestion = useRef(null);

  
  function handleConfirm(choice) {
    dispatch({ type: "Confirm", payload: { choice: choice } });
  }

  function handleChoiceSelection({ choice }) {
    dispatch({ type: "ChoiceSelection", payload: { choice: choice } });
  }

  function handleSkip() {
    dispatch({ type: "Skip" });
  }
  function NextQuestion() {
    const currentIndex = questions.findIndex(
      (question) => question.id === currentQuestion.id
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex === questions.length) {
      return;
    }
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      id: questions[nextIndex].id,
      question: questions[nextIndex].text,
    }));
  }

  MyQuestion = `${currentQuestion.id}` + " - " + `${currentQuestion.question}`;

  useEffect(() => {
    if (Decision.confirmed) {
      let answerObject = {
        id: currentQuestion.id,
        question: currentQuestion.text,
        answer: Decision.answer,
      };
      SetAnswer(answerObject);
    } else if (Decision.skipped === true) {
      SetSkipped(currentQuestion);
    }
    if (Decision.confirmed || Decision.skipped) {
      NextQuestion();
      dispatch({ type: "ResetDescision" });
    }
  }, [Decision.confirmed, Decision.skipped]);

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-3 items-center justify-center w-[50%] h-auto bg-[#291C4A] rounded-3xl py-8">
        <Question question={MyQuestion} />
        <QuizBar Time_InSeconds={25} currentQuestion={currentQuestion} onTimeEnd={handleSkip} />

        {questions.map((question) => {
          if (question.id === currentQuestion.id) {
            return (
              <ul
                key={question.id}
                className="w-[70%] flex flex-col gap-3 items-center justify-center"
              >
                {question.answers.map((answer, index) => {
                  return (
                    <li key={index} className="w-full">
                      <Answer
                        choice={answer}
                        decision={Decision}
                        handleChoiceSelection={handleChoiceSelection}
                      />
                    </li>
                  );
                })}
              </ul>
            );
          }
        })}
        <span className="flex flex-row items-center justify-center w-[60%] gap-2">
          <ConfirmButton decision={Decision} handleConfirm={handleConfirm} />
          <SkipButton handleSkip={handleSkip} />
        </span>
      </section>
    </div>
  );
}

import ResultHeader from "./ResultHeader";
import Percentage from "./Percentage";
import Details from "./Details";
import useAnswers from "../../answersProvider";
import questions from "../../questions";

export default function Result() {
  const { answers, skippedQuestions } = useAnswers();
  let CorrectAnswerCount = 0;
  let IncorrectAnswerCount = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].rightAnswer === answers[i].answer) {
      CorrectAnswerCount += 1;
    } else {
      IncorrectAnswerCount += 1;
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-10 w-[60%] h-auto bg-[#896CCB] rounded-xl m-[20%]">
      <ResultHeader />
      <span className="flex justify-center gap-10 mt-20 mb-10">
        <Percentage
          value={((skippedQuestions.length / questions.length) * 100).toFixed(
            1
          )}
          text={"Skipped"}
        />
        <Percentage
          value={((CorrectAnswerCount / questions.length) * 100).toFixed(1)}
          text={"Asnwered Correctly"}
        />
        <Percentage
          value={((IncorrectAnswerCount / questions.length) * 100).toFixed(1)}
          text={"Asnwered INCorrectly"}
        />
      </span>
      <div className="bg-[#291645] h-1 w-[60%] mb-10"></div>
      <ul className="flex flex-col items-center gap-10 mb-20">
        {answers.map((answer, index) => (
          <li key={index}>
            <Details
              Index={index + 1}
              Question={answer.question}
              Answer={answer.answer}
              IsCorrectAnswer={answer.rightAnswer === answer.answer}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

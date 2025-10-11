import ResultHeader from "./ResultHeader";
import Percentage from "./Percentage";
import Details from "./Details";
import useAnswers from "../../answersProvider";

export default function Result() {
    const { answers , skippedQuestions , ReadAnswer , ReadSkipped } = useAnswers();
    return(
      <div className="flex flex-col items-center gap-2 mt-10 w-[60%] h-auto bg-[#896CCB] rounded-xl m-[20%]">
        <ResultHeader />
        <span className="flex justify-center gap-10 mt-20 mb-10">
          <Percentage value={30} text={"Asnwered Correctly"} />
          <Percentage value={45} text={"Skipped"} />
          <Percentage value={25} text={"Asnwered INCorrectly"} />
        </span>
        <div className="bg-[#291645] h-1 w-[60%] mb-10"></div>
        <ul>
          {answers.map((answer , index) => <li key={index}>
            <Details 
              Index={index + 1} 
              Question={answer.question} 
              Answer={answer.answer} 
              IsCorrectAnswer={answer.rightAnswer === answer.answer} 
            />
          </li>
          )}
        </ul>
      </div>
    );
}

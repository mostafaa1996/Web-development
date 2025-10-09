import Question from "./question";
import QuizBar from "./QuizBar";
import Answer from "./answer";

export default function Quiz() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-3 items-center justify-center w-[50%] h-auto bg-[#291C4A] rounded-3xl py-8">
        <Question question="Q1 - Which of the following definitions best describes React.js?" />
        <QuizBar Time_InSeconds={25} />
        <Answer choice="A library to build user interfaces with help of declarative code." />
        <Answer choice="A library to build user interfaces with help of declarative code." />
        <Answer choice="A library to build user interfaces with help of declarative code." />
        <Answer choice="A library to build user interfaces with help of declarative code." />
      </section>
    </div>
  );
}

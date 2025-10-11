import Header from "./components/header";
import Quiz from "./components/Quiz";
import Result from "./components/Result/Result";
import useAnswers  from "./answersProvider";
import questions from "./questions";
import { useState , useEffect} from "react";

function App() {
  const {answers , skippedQuestions} = useAnswers();
  const [QuizCompleted, setQuizCompleted] = useState(false);

  //using useEffect saved code from re-render loop
  useEffect(() => {
    if (answers.length + skippedQuestions.length === questions.length) setQuizCompleted(true);
  }, [answers.length, skippedQuestions.length]);


  //if (answers.length + skippedQuestions.length === questions.length) setQuizCompleted(true);

  return (
    <>
      <Header />
      {!QuizCompleted && <Quiz />}
      {QuizCompleted && <Result />}
    </>
  );
}

export default App;

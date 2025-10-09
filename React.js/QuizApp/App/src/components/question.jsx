export default function Question({ question }) {
  const questionCssClasses = "text-xl m-1 text-center text-white";
  return <h2 className={questionCssClasses}>{question}</h2>;
}

import quiz_complete from "../../assets/quiz-complete.png";
export default function ResultHeader() {
  return (
    <div className="flex flex-col items-center gap-3 mt-20">
      <div className="w-[9rem] h-[9rem] rounded-full border-4 border-[#291645] shadow-lg flex justify-center bg-[#886BCA] mb-10">
        <img className="w-[65%] h-[100%] py-5" src={quiz_complete} alt="the image of comletion" />
      </div>
      <h1 className="text-5xl font-bold text-center text-[#291645] w-full font-roboto ">QUIZ COMPLETED!</h1>
    </div>
  );
}

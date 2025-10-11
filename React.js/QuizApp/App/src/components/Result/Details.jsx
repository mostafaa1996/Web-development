export default function Details({Index , Question , Answer , IsCorrectAnswer}){
    const AnswerCssClasses = `text-2xl w-full text-center ${IsCorrectAnswer ? "text-green-600" : "text-red-600"}` ;
    return(
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className="bg-black h-[3rem] w-[3rem] rounded-full text-white flex justify-center text-5xl text-center">{Index}</div>
            <p className="text-2xl text-white w-full text-center">{Question}</p>
            <p className= {AnswerCssClasses}>{Answer}</p>
        </div>
    )
}
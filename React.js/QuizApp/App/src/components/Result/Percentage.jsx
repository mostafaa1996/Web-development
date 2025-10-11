function Percentage({value , text}){
    return(
        <div className="flex flex-col items-center w-[12rem] h-auto gap-2">
            <p className="text-7xl text-[#463168] w-full h-1/2 uppercase text-center">{value}%</p>
            <p className="text-3xl text-[#463168] w-full h-1/2 uppercase text-center">{text}</p>
        </div>
    );
}


export default Percentage;
import { FaCheck } from "react-icons/fa";
export function UnitsMenuDivision({Header, option1 , option2 , useImperialUnits}){
    return(
      <div className="w-full h-auto rounded-l bg-[#25253F] px-3">
        <p className="text-[#8B8CA0] justify-self-start text-sm">{Header}</p>
        <ul>
           <li className={`flex flex-row items-center justify-between text-[white] w-full h-8 rounded-l bg-[#25253F] px-2  ${!useImperialUnits ? "bg-[#2f2f49]" : ""}`}>
              <p>{option1}</p>
              {!useImperialUnits &&<FaCheck className="text-[white] text-sm"/>}
           </li>
           <li className={`flex flex-row items-center justify-between text-[white] w-full h-8 rounded-l bg-[#25253F] px-2  ${useImperialUnits ? "bg-[#2f2f49]" : ""}`}>
              <p>{option2}</p>
              {useImperialUnits &&<FaCheck className="text-[white] text-sm"/>}
           </li>
        </ul>
      </div> 
    );
}
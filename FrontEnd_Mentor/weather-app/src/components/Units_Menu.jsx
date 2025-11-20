import { UnitsMenuDivision } from "./Units_MenuDivision";
import { useImperialUnitsContext } from "../ImperialUnitsContext";
export function UnitsMenu (){
    const {imperialUnits:useImperialUnits, toggleImperialUnits } = useImperialUnitsContext();
    return(
        <div className="flex flex-col items-center justify-between gap-2 w-full rounded-xl bg-[#25253F] mx-4 py-2 ">
           <button onClick={toggleImperialUnits} className={`w-[95%] h-10 rounded-xl text-white text-start px-2 bg-[#25253F] hover:bg-[#2f2f49] ${useImperialUnits ? "border border-[#DDDDF5]" : ""}`}>Switch to Imperial</button>
           <UnitsMenuDivision Header="Temperature" option1="Celsius(°C)" option2="Fahrenheit(°F)" useImperialUnits={useImperialUnits} />
           <hr class="border-t-[0.2px] border-neutral-500 w-[90%] opacity-50"/>
           <UnitsMenuDivision Header="Wind Speed" option1="km/h" option2="m/s" useImperialUnits={useImperialUnits}/>
           <hr class="border-t-[0.2px] border-neutral-500 w-[90%] opacity-50" />
           <UnitsMenuDivision Header="Precipitation" option1="mm"  option2="inches" useImperialUnits={useImperialUnits}/>
        </div>
    );
}
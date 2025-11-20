import {createContext , useContext , useState } from "react";

const ImperialUnitsContext = createContext();

export function useImperialUnitsContext() {
    return useContext(ImperialUnitsContext);
}


export default function ImperialUnitsContextProvider({ children }){
   const [imperialUnits , setImperialUnits] = useState(false);
   function toggleImperialUnits() {
       setImperialUnits(!imperialUnits);
   }
    return (
        <ImperialUnitsContext.Provider value={{imperialUnits , toggleImperialUnits}}>
            {children}
        </ImperialUnitsContext.Provider>
    );
}
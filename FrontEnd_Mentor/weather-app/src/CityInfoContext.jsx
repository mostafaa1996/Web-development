import {useState , useContext , createContext } from "react";


const CityInfoContext = createContext(null);

function useCityContext() {
    return useContext(CityInfoContext);
}

export default function CityInfoProvider({ children }) {
    const [cityInfo, setCityInfo] = useState('');
    return (
        <CityInfoContext.Provider value={{cityInfo, setCityInfo}}>
            {children}
        </CityInfoContext.Provider>
    );
}

export {useCityContext};

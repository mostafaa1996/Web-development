import ToggleUnits from "./ToggleUnits";
import { UnitsMenu } from "./Units_Menu";
import { useState } from "react";
export default function Header() {
  const [UnitsMenuState, setShowUnitsMenu] = useState(false);
  function ShowUnitsMenu() {
    setShowUnitsMenu(!UnitsMenuState);
  }
  return (
    <header className="flex flex-col items-center justify-center gap-10 relative">
      <section className="flex flex-row justify-between items-center w-full">
          <img src="src/assets/images/Logo.svg" alt="the weather app logo" />
          <ToggleUnits ShowUnitsMenuFN={ShowUnitsMenu}/>
          {UnitsMenuState &&<div  className="absolute top-0 translate-y-[+12%] right-4 z-10 w-[16%] ">
            <UnitsMenu  />
          </div>}
      </section>
      <section className="text-center w-full py-2">
        <h1 className="text-5xl text-white ">How&apos;s the sky looking today?</h1>
      </section>
    </header>
  );
}

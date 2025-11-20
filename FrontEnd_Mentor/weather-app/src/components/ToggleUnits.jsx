export default function ToggleUnits({ShowUnitsMenuFN}) {
  return (
    <div className="flex flex-row justify-items items-align gap-2 bg-[#25253F] px-2 py-1 rounded-lg">
      <img
        src="src/assets/images/icon-units.svg"
        alt="settings icon for units"
      />
      <p className="text-xl text-white ">Units</p>
      <button onClick={ShowUnitsMenuFN}><img src="src/assets/images/icon-dropdown.svg" alt="dropdown icon" /></button>
    </div>
  );
}

import ToggleUnits from "./ToggleUnits";
export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-10 ">
      <section className="flex flex-row justify-between items-center w-full">
          <img src="src/assets/images/Logo.svg" alt="the weather app logo" />
          <ToggleUnits/>
      </section>
      <section className="text-center w-full py-4">
        <h1 className="text-5xl text-white ">How&apos;s the sky looking today?</h1>
      </section>
    </header>
  );
}

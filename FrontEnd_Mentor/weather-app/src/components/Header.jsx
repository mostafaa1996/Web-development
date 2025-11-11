export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-10 ">
      <section className="flex flex-row justify-between items-center w-full">
          <img src="src/assets/images/Logo.svg" alt="the weather app logo" />
          <div className="flex flex-row justify-items items-align gap-2 bg-neutral-800 px-2 py-1 rounded-lg">
            <img src="src/assets/images/icon-units.svg" alt="settings icon for units" />
            <p className="text-xl text-white ">Units</p>
            <img src="src/assets/images/icon-dropdown.svg" alt="dropdown icon" />
          </div>
      </section>
      <section className="text-center w-full py-4">
        <h1 className="text-5xl text-white ">How&apos;s the sky looking today?</h1>
      </section>
    </header>
  );
}

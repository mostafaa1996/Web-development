import { useOrderList } from "../orderListProvider";
export default function Header({ TextOfLogo, ImageOfLogo , OrderListDialogRef}) {
  const { cartCount } = useOrderList();
  function openOrderList() {
    OrderListDialogRef.current.open();
  };

  return (
    <header className="flex flex-row justify-between items-center ">
      <span className="flex flex-row items-center gap-3 w-[15rem] sm:m-[2rem]  m-[1rem]">
        <img
          className="w-[3rem] h-[3rem] rounded-full border-2 border-yellow-400"
          src={ImageOfLogo}
          alt="logo"
        />
        <h1 className="text-2xl">{TextOfLogo}</h1>
      </span>
      <div className="sm:m-[2rem] m-[1rem] text-xl text-yellow-400">
        <button onClick={openOrderList}>Cart ( {cartCount} )</button>
      </div>
    </header>
  );
}

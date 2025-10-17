export default function Header({CartCount , TextOfLogo , ImageOfLogo}){
    return (
        <header className="flex flex-row justify-between items-center">
            <span className="flex flex-row items-center gap-3 w-[20rem] h-[3rem] m-[3rem] ">
                <img className="w-[3rem] h-[3rem] rounded-full border-2 border-yellow-400" src={ImageOfLogo} alt="logo" />
                <h1 className="text-2xl">{TextOfLogo}</h1>
            </span>
            <div className="m-[3rem] text-xl text-yellow-400">
                <button>Cart ( {CartCount} )</button>
            </div>
            
        </header>
    );
}
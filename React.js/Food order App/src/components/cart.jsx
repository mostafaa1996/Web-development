export default function Cart({item}){
    return (
        <div className="rounded-xl  flex flex-col items-center hover:shadow-2xl bg-[#110F0D] w-[20%] h-auto min-w-[10rem]">
            <img className="rounded-t-xl w-full h-[50%]" src={item.Image} alt="" />
            <div className="flex flex-col items-center gap-3 h-[50%]">
                <h2 className="text-base mt-2">{item.Name}</h2>
                <p className="text-sm text-center bg-[#312C1D] w-[20%] text-yellow-400">{item.Price}$</p>
                <p className="text-sm text-center">{item.Description}</p>
                <button className="bg-yellow-400 px-4 py-2 rounded-md mt-2 text-[#110F0D] mb-4">Add to Cart</button>
            </div>
        </div>
    );
}
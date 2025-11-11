export default function SmallHourlyForcastContainer() {
    return (
        <div className="flex flex-row items-center justify-between text-white w-[90%] h-20 bg-[#2f2f49] rounded-xl my-2 gap-2">
            <div className="flex flex-row items-center justify-center gap-1 w-[20%] m-2">
                <img className="w-[70%]" src="src/assets/images/icon-storm.webp" alt="Storm icon" />
                <p className="whitespace-nowrap text-l w-auto">3 PM</p>
            </div>
            <p className="text-l w-[10%] m-2">20°</p>
        </div>
    );
}
export default function DailyForecastContainer() {
    return (
        <div className="flex flex-col items-center justify-center my-4 w-[10%] h-auto bg-[#25253F] rounded-xl text-white">
           
                <p className="text-l p-2">Tue</p>
                <img className="p-4 w-[90%] h-[70%]" src="src/assets/images/icon-storm.webp" alt="storm icon" />
                <div className="flex flex-row justify-between px-1 w-full">
                    <p className="text-l p-2">20°</p>
                    <p className="text-l p-2">14°</p>
                </div>
        </div>
    );
}
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center md:w-[10%] sm:w-[20%] w-[50%] bg-[#110F0D] rounded-xl h-[10rem]">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400"></div>
      <p className="mt-4 text-2xl text-yellow-400">Loading...</p>
    </div>
  );
}

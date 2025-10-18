export default function Error({ error }) {
  return (
    <p className="flex  justify-center items-center w-full bg-[#110F0D] rounded-xl h-[5rem] text-2xl text-yellow-400">
      {error}
    </p>
  );
}

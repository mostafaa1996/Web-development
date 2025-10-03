export default function Input({ Label, InputType, ...props }) {
  const StyleClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {Label}
      </label>
      {InputType === "textarea" && (
        <textarea className={StyleClasses} {...props} type="text" />
      )}
      {InputType === "input" && (
        <input className={StyleClasses} {...props} type="text" />
      )}
    </p>
  );
}

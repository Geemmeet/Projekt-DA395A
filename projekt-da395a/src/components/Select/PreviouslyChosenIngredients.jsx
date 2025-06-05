export default function PreviouslyChosenIngredients ({ingredients}) {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-2 mt-4">
            {ingredients.map((ingredient, index) => (
            <span
            key={index}
            className="capitalize inline-flex items-center bg-[#DAD5F3] rounded-full px-3 py-2 my-1 text-md font-medium text-black ring-1 ring-indigo-700/10 ring-inset">
            {ingredient}
            </span>
        ))}
        </div>
  );
}
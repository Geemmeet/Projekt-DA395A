import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

export default function ({ ingredients, instructions }) {
  return (
    <>
      <div className="flex justify-evenly flex-wrap-reverse container px-5 mx-auto">
        <IngredientList ingredients={ingredients} />
        <InstructionList instructions={instructions} />
      </div>
    </>
  );
}

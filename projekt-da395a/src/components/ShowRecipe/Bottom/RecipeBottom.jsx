import RecipeIngredients from "./RecipeIngredients";
import ReceipeInstructions from "./RecipeInstructions";

export default function () {
    return (
        <>
            <div className="flex justify-between">
                <RecipeIngredients />
                <ReceipeInstructions />
            </div>
        </>
        

    )
}
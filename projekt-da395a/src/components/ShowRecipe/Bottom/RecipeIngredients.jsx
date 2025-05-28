import RecipeIngredient from "./RecipeIngredient";
import {List} from "flowbite-react";

export default function RecipeIngredients ({ingredients = [{id: 1, type: "smör", amount: "20 g"}, {id: 2, type: "ost", amount: "4 st"}, {id: 3, type: "mjölk", amount: "2 dl"}]}){


    return (
        <>
            <div className="flex-col w-100">
                <h4 className="text-3xl mb-8">Ingredienser</h4> 
                <List unstyled className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                    {ingredients.map((ingredient) => <RecipeIngredient key={ingredient.id} ingredient = {ingredient}/>)}

                </List>
            </div>
        </>


    )

}




import Ingredient from "./Ingredient";
import { List } from "flowbite-react";

export default function IngredientList({ ingredients }) {
  console.log(ingredients);

  return (
    <>
      <div className="flex-col w-100 lg:w-80 pt-20">
        <h4 className="londrina_solid text-3xl mb-8">Ingredients</h4>
        <List
          unstyled
          className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={index}
              name={ingredient.name}
              amount={ingredient.amount}
              unit={ingredient.unit}/>
          ))}
        </List>
      </div>
    </>
  );
}

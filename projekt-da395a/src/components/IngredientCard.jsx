import { Card } from "flowbite-react";

//funktion ska hämta upp text och bild

export default function IngredientCard({ ingredients = {name: "apricots", image : "dried-apricots.jpg"}, onClick}) {

  return (
    
    <Card
      onClick={onClick}
      className="max-w-sm w-1/2"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={"https://img.spoonacular.com/ingredients_100x100/" + ingredients.image}
      >

      <h5 className="capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer">
        {ingredients.name}
      </h5>
    </Card>
  );
}
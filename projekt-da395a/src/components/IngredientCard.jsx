import { Card } from "flowbite-react";

//funktion ska hämta upp text och bild

export default function IngredientCard({ ingredients = {name: "apricots", image : "dried-apricots.jpg"}, onClick}) {

  return (
    
    <Card
      onClick={onClick}
      className="max-w-sm w-1/2"
      >

      <h5 className="capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer text-center">
        {ingredients.name}
      </h5>
    </Card>
  );
}
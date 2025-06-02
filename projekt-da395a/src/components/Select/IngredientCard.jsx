import { Card } from "flowbite-react";

//funktion ska hämta upp text och bild
// la en tillfällig placeholder bild och sparade det ursprunliga här: imgSrc={"https://img.spoonacular.com/ingredients_100x100/" + ingredients.image}
export default function IngredientCard({ ingredients, onClick}) {

  return (
    
    <Card
      onClick={onClick}
      className="max-w-sm mx-auto w-1/2 text-center delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl">
      <h5 className="capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer text-center">
        {ingredients.name}
      </h5>
    </Card>
  );
}
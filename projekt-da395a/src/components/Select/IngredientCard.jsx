import { Card } from "flowbite-react";

export default function IngredientCard({ ingredient, onClick}) {

  return (
    
    <Card
      onClick={onClick}
      className="bg-[#DAD5F3] max-w-sm mx-auto w-1/2 text-center delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl">

      <h5 className="londrina_solid capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer text-center">
        {ingredient || "Not found"}
      </h5>
    </Card>
  );
}
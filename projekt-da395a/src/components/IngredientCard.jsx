import {useState} from 'react';

import { Card } from "flowbite-react";
import { getIngredients } from "@/lib/randomUtils/getIngredients.js";

//funktion ska hämta upp text och bild


export function IngredientCard() {
  const [ingredients, setIngredients] = useState([]);

  async function handleIngredients () {
    const result = await getIngredients();
    console.log(result);

  }

  return (
    <Card
      onClick={handleIngredients}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc=""
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        ""
      </h5>
    </Card>
  );
}
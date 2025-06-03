import RecipeBottom from "./Bottom/RecipeBottom";
import RecipeTop from "./Top/RecipeTop";
import { useEffect, useState } from "react";

export default function Recipe({ recipeId }) {
    //Defining useStates
    //https://react.dev/reference/react/useState
    const [title, setTitle] = useState('');
    const [facts, setFacts] = useState([]);
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const fetchUrl = `/api/?type=recipeInfo&id=${recipeId}`
    //Making sure that the function runs only when the url changes through useEffect
    //The change of the URL is dependent on the recipeId recieved by the Recipe function
    //https://react.dev/reference/react/useEffect
    useEffect(() => {
        async function getRecipe() {
            try {
                const response = await fetch(fetchUrl);
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('API error response:', errorData);
                    throw new Error(`API returned status ${response.status}`);
                }

        const data = await response.json();
        console.log(data);

        //Title
        setTitle(data.title);

        //Facts
        const factList = [data.servings, data.readyInMinutes];

        const diets = data.diets;
        diets.map((diet) => factList.push(diet));

        setFacts(factList);

        //Image
        setImage(data.image);

        //Ingredients
        const ingredientList = [];

        data.extendedIngredients.map((ingredient) =>
          ingredientList.push({
            name: ingredient.name,
            amount: ingredient.measures.metric.amount,
            unit: ingredient.measures.metric.unitShort,
          })
        );

        setIngredients(ingredientList);

        //Instructions
        const instructionList = [];

        //Map through steps

        const instructions = data.analyzedInstructions[0].steps;

        if (instructions !== null) {
          instructions.map((instruction) =>
            instructionList.push({
              number: instruction.number,
              step: instruction.step,
            })
          );
        }
        setInstructions(instructionList);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }
    getRecipe();
  }, [fetchUrl]);

  return (
    <div>
      <RecipeTop
        title={title}
        facts={facts}
        image={image}
        recipeId={recipeId}
      />
      <div className="flex justify-end me-5"></div>

      <RecipeBottom ingredients={ingredients} instructions={instructions} />
    </div>
  );
}

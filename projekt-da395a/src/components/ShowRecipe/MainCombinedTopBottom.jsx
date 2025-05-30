import RecipeBottom from "./Bottom/RecipeBottom";
import RecipeTop from "./Top/RecipeTop";
import { useEffect, useState } from "react";

export default function Recipe ({recipeId}) {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information`
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    
    //Fetch Spoonacular API
    const fetchUrl = `${url}?apiKey=${apiKey}`

    //Defining useStates
    //https://react.dev/reference/react/useState
    const [title, setTitle] = useState(null);
    const [facts, setFacts] = useState(null);
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [instructions, setInstructions] = useState(null);
    const [summary, setSummary] = useState(null);


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
                console.log(data)

                //Title
                setTitle(data.title)

                //Facts
                const factList = [data.servings, data.readyInMinutes, data.diets]
                setFacts(factList)
                
                //Image
                setImage(data.image)
                
                //Summary
                setSummary(data.summary)
                
                //Ingredients
                const ingredientList = []

                data.extendedIngredients.map(ingredient => 
                ingredientList.push({name: ingredient.name, amount: ingredient.measures.metric.amount, unit: ingredient.measures.metric.unitShort}))

                setIngredients(ingredientList)
                
                //Instructions
                const instructionList = []

                //Map through steps

                const instructions = data.analyzedInstructions[0].steps;

                if (instructions !== null) {
                    instructions.map(instruction => 
                    instructionList.push({number: instruction.number, step: instruction.step}))

                } 
                setInstructions(instructionList)

            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        }
        getRecipe();
    }, [fetchUrl]);

    console.log("title:", title);
    console.log("facts:", facts);
    console.log("image:", image);
    console.log("ingredients:", ingredients);
    console.log("instructions:", instructions);
    console.log("summary:", summary);

    return (
        <div className="h-110 ">
            <div className="container mx-auto p-8">
                <RecipeTop 
                title = {title}
                facts = {facts}
                image = {image}
                />
                <RecipeBottom />
            </div>
        </div>
    )
}
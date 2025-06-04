
import { useState } from 'react';
import { ModalComponent } from '@/components/Select/ModalComponent'

const RecipeSuggestions = ({ recipes }) => {
    //Modal explanation
    // Step 1: Keep track of chosen recipe (null = no choice made, else: a recipe object)
    
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center my-8 hover:cursor-pointer" >
            {recipes && recipes.map((recipe) => (
                <div 
                key={recipe.id}
                className="w-95 lg:w-72 bg-white rounded-lg shadow-md p-4 flex flex-col items-center"

                //Step 2: Save the recipe in useState onClick to keep track of which recipe the modal is showing
                onClick={() => setSelectedRecipe(recipe)}>

                    <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-40 object-cover rounded-md mb-2"/>

                    <h2 className="londrina_solid text-md text-gray-700 font-semibold text-center mb-1">{recipe.title}</h2>

                    <div className="flex flex-row gap-2 mt-2 mb-6">
                        <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                            ⏱ {recipe.readyInMinutes} min
                        </span>
                        <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                            🍽 {recipe.servings} pers
                        </span>
                        <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium ${recipe.vegetarian ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                            {recipe.vegetarian ? "Vegetarian" : "Non-veg"}
                        </span>
                    </div>
                </div>

            ))}
            {/* Step 3: Show the modal if a recipe is clicked*/}
            {selectedRecipe && (
                <ModalComponent
                show={true}
                recipe={selectedRecipe}
                onClose={() => setSelectedRecipe(null)} //Step 4: When the modal is closed
                />
            )}
        </div>
    )
}

export default RecipeSuggestions;
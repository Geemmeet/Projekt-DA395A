
import { useState } from 'react';
import { ModalComponent } from '@/components/Select/ModalComponent'

const RecipeSummary = ({ recipes }) => {
    // HUr modalen funkar -> steg 1: Håll koll på valt recept (null = inget valt, annars: ett receptobjekt)
    
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <div className="flex flex-row flex-wrap gap-6 justify-center mt-8 mb-8 hover:cursor-pointer" >
            {recipes && recipes.map((recipe) => (
                <div key={recipe.id}
                    className="w-72 bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                    onClick={() => setSelectedRecipe(recipe)} // Steg 2: När man klickar — spara receptet i useState för att hålla koll på vilket recept modalen ska visa
                >
                    <img src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <h2 className="text-md text-gray-700 font-semibold text-center mb-1">{recipe.title}</h2>

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
            {/* Steg 3: Visa modalen om ett recept är valt */}
            {selectedRecipe && (
                <ModalComponent
                    show={true}
                    recipe={selectedRecipe}
                    onClose={() => setSelectedRecipe(null)} // Steg 4: När man stänger modalen
                />
            )}
        </div>
    )
}

export default RecipeSummary;
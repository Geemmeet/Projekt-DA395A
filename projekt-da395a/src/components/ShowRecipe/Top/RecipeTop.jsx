"use client";
import { storageFunctionality } from "@/lib/localstorageFunctionality/savedRecipesContext";


export default function RecipeFacts({ image, title, facts, recipeId }) {
  const ending = ["servings", "min"];

  //Gets the saveRecipe function from context to be able to use usestate globally
  const { saveRecipe, savedRecipes } = storageFunctionality();
  let fillHeart = "none"
  
  if (savedRecipes.some(recipe => recipe.recipeId === recipeId )
  ) {
  fillHeart = "red"
}

  


  return (
    <div className="bg-[#E7E4F7] flex flex-row justify-center content-center flex-wrap-reverse py-10">
      <div className="flex flex-col">
        <img
          src={image || "/imageatm.png"}
          alt={title || "Bilden är inte tillgänglig"}
          className="lg:me-20 mt-10 mb-5 lg:mt-0 w-[350px] h-[350px] object-cover object-center rounded-xl shadow-lg"/>

        <button
          className="londrina_solid inline-flex hover:cursor-pointer hover:text-gray-500"
          id={recipeId}
          title={title}
          onClick={() => saveRecipe({ recipeId, title })}>
          <span>Save recipe</span>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white hover:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill={fillHeart}
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
          </svg>
        </button>
      </div>
      <div>
        <h3 className="londrina_solid text-4xl mb-10 text-center">
          {title || "Titel är inte tillgänglig"}
        </h3>
        <div className="flex flex-wrap justify-evenly">
          {facts
            ? facts.slice(0, 4).map((fact, i) => (
                <div
                  key={i}
                  className="fraunces bg-[#9B92CD] text-lg my-5 mx-1 rounded-[2vw] w-1/3 p-5 text-center flex items-center justify-center">
                  {typeof fact === "string"
                    ? fact[0].toUpperCase() + fact.slice(1)
                    : fact}{" "}
                  {ending[i] || ""}
                </div>
              ))
            : "Ej tillgängligt"}
        </div>
      </div>
    </div>
  );
}

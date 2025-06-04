import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";

import { storageFunctionality } from "@/lib/localstorageFunctionality/savedRecipesContext";

export default function DesignOfSavedRecipe({ item, index }) {
  const router = useRouter();

  const { removeRecipe } = storageFunctionality();

  return item ? (
    <div
      key={item.id ?? index} //fallback if id is missing
      className="flex flex-col m-5 p-2 hover:cursor-pointer"
      onClick={() => {
        router.push(`/recipe/${item.recipeId}`);
      }}>
      <div className="flex justify-between items-center w-full">
        <p className="londrina_solid text-gray-800 hover:text-gray-500">{item.title}</p>
        

        
        <button type="button" 
        className="w-5 h-5 rounded-full flex items-center justify-center 
             hover:ring-2 hover:ring-red-600 
             focus:outline-none focus:ring-4 focus:ring-red-300 hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            removeRecipe(item.recipeId);
          }}>
         
        <svg
            className="w-3 h-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"/>
          </svg>
        <span className="sr-only">Delete recipe</span>
        </button>
      </div>
    </div>
  ) : null;
}

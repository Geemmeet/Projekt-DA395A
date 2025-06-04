"use client";

import { storageFunctionality } from "@/lib/localstorageFunctionality/savedRecipesContext";
import DesignOfSavedRecipe from "./DesignOfSavedRecipe";

export default function ShowSavedRecipes() {
  // Get savedRecipes from context (handling useEffect and useState)
  const { savedRecipes } = storageFunctionality();

  return (
    <div>
      {savedRecipes.length === 0 && <p>No saved recipes yet.</p>}

      {/*Map the recipes*/}
      {savedRecipes.map((item, index) => (
        <DesignOfSavedRecipe key={item.id ?? index} item={item} index={index} />
      ))}
    </div>
  );
}

'use client';

const RecipeList = ({ chosenIngredients }) => {
    
    return (
        <ul>
            {chosenIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
        </ul>
    );
}
export default RecipeList;
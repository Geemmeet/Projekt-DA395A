'use client';
import React from 'react';
import {useState} from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export default function RecipeByIngredientFetcher() {
    const [inputValue, setInputValue] = useState('');
    const [recipes, setRecipes] = useState([]);
    const handleSearch = async function() {
        try {
            console.log(apiKey);
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?&ingredients=${inputValue}&number=3&apiKey=${apiKey}`);
            const data = await response.json();
            setRecipes(data);
            console.log(data);
        } catch (error) {
            console.log(error.response)
        }
        
    };
    
    return (
        <div>
            <input className="btn" type="text" value={inputValue} onChange={function(e) {setInputValue(e.target.value)}}/>
            <button onClick={handleSearch}>Sök recept</button>
        </div>
    );
}
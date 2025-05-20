'use client';
import React from 'react';
import {useState} from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export default function RecipeByIngredientFetcher() {
    const [inputValue, setInputValue] = useState('');
    const [recipes, setRecipes] = useState([]);
    const handleSearch = async function() {
        try {
            const response = await fetch(`/api/recipe?type=byIngredients&ingredients=${inputValue}`)
            const data = await response.json();
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
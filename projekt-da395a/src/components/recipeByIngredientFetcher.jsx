'use client';

import {useState} from 'react';

export default function RecipeByIngredientFetcher() {
    const [inputValue, setInputValue] = useState('');
    const [recipes, setRecipes] = useState([]);
    const handleSearch = async function() {
        const response = await fetch(`/api/recipes?ingredients=${inputValue}`);
        const data = await response.json();
        setRecipes(data);
    };
    
    return (
        <div>
            <input className="btn" type="text" value={inputValue} onChange={function(e) {setInputValue(e.target.value)}}/>
            <button onClick={handleSearch}>Sök recept</button>  
        </div>
    );
}
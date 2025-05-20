'use client';
import React from 'react';
import {useState} from 'react';
export default function RecipeByIngredientFetcher() {

    /*
    !!UTDATERAD KOMPONENT!!
    användes endast för att testa api-anropen.
    !!UTDATERAD KOMPONENT!!
    */
    const [inputValue, setInputValue] = useState('');
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
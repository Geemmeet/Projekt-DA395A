'use client';
import React from 'react';
import {useState} from 'react';
import ingredients from '../lib/ingredientsCategorized'

export default function GetIngredient() {
    const [ingredient, setIngredient] = useState("");


    const handleSearch = async function() {
        try {
                const response = await fetch(`/api/recipe?type=ingrID&id=15117`)
                const data = await response.json();
                console.log(data);
                handleCreate(data);
            } catch (error) {
                console.log(error.response)
            }
    };

    const handleCreate = (data) => {
        setIngredient(data);
    }
    
    return (
        <div>
            <button onClick={handleSearch}>
                Knapp
            </button>
            <ul>
            <li>{ingredient.name}</li>
            </ul>
            <img src={"https://img.spoonacular.com/ingredients_100x100/" + ingredient.image}></img>
        </div>
    );
}
'use client';
import React from 'react';
import {useState} from 'react';
import { filterByCategory } from '../lib/spoonacularUtils/filterByCategory'
import { randomizer } from '../lib/randomUtils/randomizer';


export default function GetIngredient() {
    const [ingredient, setIngredient] = useState([]);

    const handleSearch = async function() {
        const filtered = filterByCategory("protein");
        const selected = randomizer({ array: filtered, count: 2 });
        const ids = selected.map((item) => item.id);
        try {
                const responses = await Promise.all(ids.map((id) =>
                    fetch(`/api/recipe?type=ingrID&id=${id}`).then((res) => res.json())
                )
            );
            console.log(responses);
            setIngredient(responses);
            } catch (error) {
                console.log(error.response)
            }
    };
    
    return (
        <div>
            <button onClick={handleSearch}>
                Knapp
            </button>
            <ul>
            {ingredient.map((item, index) => (
                <li key={index}>
                    {item.name} ID: {item.id}
                    <span>
                        <img src={"https://img.spoonacular.com/ingredients_100x100/" + item.image}></img> 
                        </span>
                </li>
            ))}
            </ul>
        </div>
    );
}
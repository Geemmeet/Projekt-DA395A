import { filterByCategory } from '../spoonacularUtils/filterByCategory.js'
import { randomizer } from './randomizer.js';

export async function getIngredients() {
    /*
    Här sköter vi api-anropet för att hämta ingrediensinformation för 2 ingredienser. 
    filterByCategory returnerar en lista med ingredienser (från vår lista) baserat på vilken kategori vi skickar med.
    randomizer tar den filtrerade listan, slumpar den och returnerar 2 ingredienser.
    vi hämtar id:na genom .map()
    Vi använder Promise.all och map() på id:na för att skicka flera api:anrop samtidigt
    till slut uppdaterar vi vår ingredient till det vi får tillbaka.
    */
    const filtered = filterByCategory("carb");
    const selected = randomizer({ array: filtered, count: 2 });
    const ids = selected.map((item) => item.id);

    try {
        const responses = await Promise.all(ids.map((id) =>
        fetch(`/api/recipe?type=ingrID&id=${id}`).then((res) => res.json())));
        console.log(responses);
        return responses;
        
        } catch (error) {
            console.log(error.response)
            return [];
            }
    };
    
    /*
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
    
    */

{/*
}[}]
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
        */}
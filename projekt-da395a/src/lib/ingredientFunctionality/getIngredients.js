import { filterByCategory } from './filterByCategory.js'
import { randomizer } from '../randomUtils/randomizer.js';



export async function getIngredients(cat) {
    /*
    Function that accepts a category string and returns a random selection of two ingredients.
    */
    const filtered = filterByCategory(cat);
    const selected = randomizer({ array: filtered, count: 2 });
    return selected;
};

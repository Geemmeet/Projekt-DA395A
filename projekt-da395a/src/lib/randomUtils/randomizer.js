export function randomizer({ array = [], count}) {
    /*
    Accepts an array and a count, shuffles the array, and returns a new array with the
    specified number of randomly selected elements from the original array.
    */

    const shuffled = [...array].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    return selected;
}
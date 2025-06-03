export function randomizer({ array = [], count}) {
    /*
    tar emot ett objekt som parameter, innehållande en lista(arr) och count(int).
    använder .sort() med math.random för att slumpa listan, plockar sedan ut count antal
    saker ur listan och returnerar dessa.
    */
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return selected;
}
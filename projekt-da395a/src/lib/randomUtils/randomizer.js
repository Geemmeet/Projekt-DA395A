export function Randomizer({ array = [], count}) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    return selected;
}
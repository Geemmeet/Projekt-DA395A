export function categorizeIngredients(name) {
    /*
    Funktionen kategoriserar ingredienser baserat på nyckelord, returnerar sedan kategorin som en sträng.
    */
    const lower = name.toLowerCase();
    if (/(chicken|beef|pork|tuna|tofu|egg)/.test(lower)) return "protein";
    if (/(pasta|bread|potato|rice|flour)/.test(lower)) return "carb";
    if (/(milk|cheese|butter|cream|yogurt)/.test(lower)) return "dairy";
    if (/(apple|banana|lemon|berry|orange)/.test(lower)) return "fruit";
    if (/(squash|lettuce|broccoli|spinach)/.test(lower)) return "vegetable";
    if (/(pepper|cinnamon|cumin|paprika)/.test(lower)) return "spice";
    if (/(sauce|ketchup|mustard|mayo)/.test(lower)) return "condiment";
    if (/(sugar|syrup|honey|nectar)/.test(lower)) return "sweetener";
    if (/(coffee|tea|wine|juice|soda)/.test(lower)) return "beverage";

    return null;
}
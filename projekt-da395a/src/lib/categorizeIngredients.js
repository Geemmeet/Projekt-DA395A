export function categorizeIngredients(name) {
    /*
    Funktionen kategoriserar ingredienser baserat på nyckelord, returnerar sedan kategorin som en sträng.
    */
    const lower = name.toLowerCase();
    if (/(chicken|beef|pork|tuna|tofu|egg|sausage|ribs|bacon|ham|meat)/.test(lower)) return "protein";
    if (/(pasta|bread|potato|rice|bulgur|quinoa|couscous)/.test(lower)) return "carb";
    if (/(milk|cheese|butter|cream|yogurt)/.test(lower)) return "dairy";
    if (/(apple|banana|lemon|berry|orange|apricot|pear|berries|berry|cherries)/.test(lower)) return "fruit";
    if (/(squash|lettuce|broccoli|spinach|artichoke|aragula|asparagus|avocado|carrot|corn|beets|cabbage|onion|mushroom)/.test(lower)) return "vegetable";
    if (/(pepper|cinnamon|cumin|paprika|seasoning|curry)/.test(lower)) return "spice";
    if (/(sauce|ketchup|mustard|mayo|dressing)/.test(lower)) return "condiment";
    if (/(sugar|syrup|honey|nectar)/.test(lower)) return "sweetener";
    if (/(candy|caramel|cake|cookie|chocolate|ice cream|dessert)/.test(lower)) return "dessert";
    if (/(coffee|tea|wine|juice|beer|cola|diet pop)/.test(lower)) return "beverage";

    return null;
}
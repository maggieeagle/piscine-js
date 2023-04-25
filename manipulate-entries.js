function filterEntries(nutrients, condition) {
    let filtered = Object.entries(nutrients).filter(entry => condition(entry));
    return Object.fromEntries(filtered)
}

function mapEntries(nutrients, func) {
    let modified = Object.entries(nutrients).map(([key, value]) => func([key, value]));
    return Object.fromEntries(modified)
}

function reduceEntries(nutrients, func, init) {
    let summ = Object.entries(nutrients).reduce(func, init);
    return summ
}

function totalCalories(cart) {
    const cartItemsWithNutrition = filterEntries(nutritionDB, ([item]) => item in cart);
    const calories = Object.entries(cartItemsWithNutrition).reduce((total, [item, nutrientValues]) => {
        const itemQuantity = cart[item];
        const itemCalories = nutrientValues.calories;
        return total + itemCalories/100 * itemQuantity;
    }, 0);

    return calories.toFixed(1);
}

function lowCarbs(cart) {
    const lowCarbsItems = filterEntries(cart, ([item]) => nutritionDB[item].carbs*cart[item]/100 < 50);
    return lowCarbsItems;
}

function totalCart(cart) {
    const cartItemsWithNutrition = filterEntries(nutritionDB, ([item]) => item in cart);
    Object.entries(cartItemsWithNutrition).forEach(product => {
        let newProduct = mapEntries(product[1], ([key, value]) => [key, cart[product[0]]*value/100])
        cart[product[0]] = newProduct
    });
    return cart
}

// const nutritionDB = {
//     tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
//     vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
//     oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//     onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//     garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
//     sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
//     orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
// }


// const groceriesCart = { oil: 500, onion: 230, garlic: 220, paprika: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutional facts:')
// console.log(totalCart(groceriesCart))

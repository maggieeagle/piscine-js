function filterValues(nutrients, condition) {
    let filtered = Object.entries(nutrients).filter(entry => condition(entry[1]));
    return Object.fromEntries(filtered)
}

function mapValues(nutrients, func) {
    let modified = Object.entries(nutrients).map(entry => [entry[0], func(entry[1])]);
    return Object.fromEntries(modified)
}

function reduceValues(nutrients, func) {
    let summ = Object.values(nutrients).reduce(func);
    return summ
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// console.log(mapValues(nutrients, (v) => v+1))
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))


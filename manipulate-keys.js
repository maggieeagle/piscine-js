function filterKeys(nutrients, condition) {
    let filtered = Object.entries(nutrients).filter(entry => condition(entry[0]));
    return Object.fromEntries(filtered)
}

function mapKeys(nutrients, func) {
    let modified = Object.entries(nutrients).map(entry => [func(entry[0]), entry[1]]);
    return Object.fromEntries(modified)
}

function reduceKeys(nutrients, func) {
    let summ = Object.keys(nutrients).reduce(func);
    return summ
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
console.log(mapKeys(nutrients, (k) => `-${k}`))
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))


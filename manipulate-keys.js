function filterKeys(nutrients, condition) {
    let filtered = Object.entries(nutrients).filter(entry => condition(entry[0]));
    return Object.fromEntries(filtered)
}

function mapKeys(nutrients, func) {
    let modified = Object.entries(nutrients).map(entry => [func(entry[0]), entry[1]]);
    return Object.fromEntries(modified)
}

function reduceKeys(nutrients, func, init) {
    let summ = init==null?Object.keys(nutrients).reduce(func):Object.keys(nutrients).reduce(func, init);
    return summ
}


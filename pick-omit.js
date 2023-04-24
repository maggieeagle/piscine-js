function pick(obj, keys) {
    let arr = Object.entries(obj).filter(pair => typeof keys != 'string'?keys.join(',').includes(pair[0]):keys==pair[0])
    return Object.fromEntries(arr)
}

function omit(obj, keys) {
    let arr = Object.entries(obj).filter(pair => typeof keys != 'string'?!keys.join(',').includes(pair[0]):keys!=pair[0])
    return Object.fromEntries(arr)
}

console.log(pick({age: 32, ageVerified: false}, 'age'))
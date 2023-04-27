function fusion(obj1, obj2) {
    let arr = Object.entries(obj1).map(([key, value]) => [key, newValue(key, value)])
    arr = arr.concat(omit(obj2, Object.keys(obj1)))
    return Object.fromEntries(arr)

    function newValue(key, value) {
        if (obj2[key] == undefined) return obj1[key]
        if (typeOf(value) == typeOf(obj2[key]) && typeOf(value) == 'array') return key, value.concat(obj2[key])
        if (typeOf(value) == typeOf(obj2[key]) && typeOf(value) == 'string') return value.concat(' ' + obj2[key])
        if (typeOf(value) == typeOf(obj2[key]) && typeOf(value) == 'number') return value + obj2[key]
        if (typeOf(value) == typeOf(obj2[key]) && typeOf(value) == 'object') return fusion(value, obj2[key])
        if (typeOf(value) != typeOf(obj2[key])) return obj2[key]
    }
}

function typeOf(data) {
    if (Array.isArray(data)) return 'array';
    if (typeof data === 'string') return 'string';
    if (typeof data === 'number') return 'number';
    if (typeof data === 'object') return 'object';
    return null;
}

function omit(obj, keys) {
    let arr = Object.entries(obj).filter(pair => !keys.join(',').includes(pair[0]))
    return arr 
}

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }))
// console.log(fusion({ str: "salem" }, { str: "alem" }))
// console.log(fusion({ str: "salem" }, { str: "" }))
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))
// console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }))
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }))
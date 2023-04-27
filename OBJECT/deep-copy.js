function deepCopy(data) {
    let res = Array.isArray(data) ? [] : {}
    for (let i in data) {
        if (typeof data[i] == 'object') {
            if (data[i] instanceof RegExp) {
                res[i] = new RegExp(data[i])
            } else {
                res[i] = deepCopy(data[i])
            }
        } else {
            if (typeof data[i] == 'function') {
                res[i] = data[i]
                continue;
            }
            res[i] = data[i]
        }
    }
    return res
}

// console.log(deepCopy({ user: 'mika', age: 37 }))
// console.log(deepCopy([1, 'a']))
// console.log(deepCopy([console.log, /hello/]))
// console.log(deepCopy({ a: { b: { c: 1 } } }))
// console.log(deepCopy([1, [2, [true]]]))
// console.log(deepCopy([{ a: () => { } }, ['b', { b: [3] }]]))
// console.log(deepCopy({ undef: undefined }))

function deepCopy(data) {
    let res = Array.isArray(data) ? [] : {}
    for (i in data) {
        if (typeof data[i] == 'object') {
            if (data[i] instanceof RegExp) {
                console.log('regexp', data[i])
                res[i] = new RegExp(data[i])
            } else {
                console.log('object', data[i])
                res[i] = deepCopy(data[i])
            }
        } else {
            if (typeof data[i] == 'function') {
                console.log('function', data[i])
                res[i] = data[i]
                continue;
            }
            console.log('number or string', data[i])
            res[i] = data[i]
        }
    }
    console.log('returning value', res)
    return res
}

// console.log(deepCopy({ user: 'mika', age: 37 }))
// console.log(deepCopy([1, 'a']))
// console.log(deepCopy([console.log, /hello/]))
// console.log(deepCopy({ a: { b: { c: 1 } } }))
// console.log(deepCopy([1, [2, [true]]]))
// console.log(deepCopy([{ a: () => { } }, ['b', { b: [3] }]]))
// console.log(deepCopy({ undef: undefined }))

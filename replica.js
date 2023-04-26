function replica(...dataAll) {
    let res = {}
    dataAll.forEach(data => {
        // console.log('data', data)
        for (let i in data) {
            if (typeof data[i] == 'object' && !Array.isArray(data[i])) {
                if (data[i] instanceof RegExp) {
                    // console.log('regexp', data[i])
                    res[i] = new RegExp(data[i])
                } else {
                    // console.log('object', data[i])
                    if (typeof res[i] == 'object' && !Array.isArray(res[i]))
                    res[i] = replica(res[i],data[i])
                    else res[i] = replica(data[i])
                }
            }
            else {
                if (typeof data[i] == 'function') {
                    // console.log('function', data[i])
                    res[i] = data[i]
                    continue;
                }
                // console.log('number or string', data[i])
                res[i] = data[i]
            }
        }
    });
    // console.log('returning value', res)
    return res
}

// console.log(replica({ con: console.log }, { reg: /hello/ }))
// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b)
// console.log(replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }).a.b.c)
// console.log(replica({ a: 2 }, { a: [4] }).a)
// console.log(replica({ a: { b: [2] } }, { a: [4] }).a)
// console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }).a)
// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }))
// console.log(replica(
//     {},
//     { a: { b1: 1, c1: 2 } },
//     { a: { b1: { d2: 1, e2: 2 } } },
//     { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
//     { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } }
//   ))

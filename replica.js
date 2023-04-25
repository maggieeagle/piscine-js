function replica(data) {
    return Object.assign({}, data)
}

// console.log(replica({ con: console.log }, { reg: /hello/ }))
// console.log(replica(replica({ a: 4 }, { a: { b: 1 } }).a.b, 1))
// console.log(replica(replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }).a.b.c,
// '1'
// ))
// console.log(replica(replica({ a: 2 }, { a: [4] }).a, [4]))

function arrToSet(arr) {
    return new Set(arr)
}

function arrToStr(arr) {
    return arr.join('')
}

function setToArr(set) {
    return Array.from(set)
}

function setToStr(set) {
    return arrToStr(setToArr(set))
}

function strToArr(str) {
    return str.split('')
}

function strToSet(str) {
    return arrToSet(strToArr(str))
}

function mapToObj(map) {
    return  Object.fromEntries(map)
}

function objToArr(obj) {
    return  Object.values(obj)
}

function objToMap(obj) {
    return  new Map(Object.entries(obj))
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return arrToObj(strToArr(str))
}

function superTypeOf(n) {
    if (n === null) return 'null'
    if (typeof n != 'object') return capitalize(typeof n)
    else {
        if (n instanceof Map) return 'Map'
        if (n instanceof Set) return 'Set'
        if (Array.isArray(n)) return 'Array'
        if (n instanceof Function) return 'Function'
        if (n instanceof Object) return 'Object'
    }
}

function capitalize(s) {
    return s[0].toUpperCase() + s.substr(1, s.length - 1).toLowerCase()
}

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(superTypeOf(map)) //         -> 'Map'
console.log(superTypeOf(set)) //         -> 'Set'
console.log(superTypeOf(obj)) //         -> 'Object'
console.log(superTypeOf(str)) //         -> 'String'
console.log(superTypeOf(666)) //         -> 'Number'
console.log(superTypeOf(NaN)) //         -> 'Number'
console.log(superTypeOf(arr)) //         -> 'Array'
console.log(superTypeOf(null)) //        -> 'null'
console.log(superTypeOf(undefined)) //   -> 'undefined'
console.log(superTypeOf('')) // -> 'Function'
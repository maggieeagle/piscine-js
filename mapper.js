function map(arr, f) {
    res=[]
    for(let i = 0; i < arr.length; i++){
        res.push(f(arr[i], i))
    }
    return res
}

function flatMap(arr, f) {
    return map(arr, f).flat(1)
}

const add1 = (el) => el + 1
const numbers = [10, -10, 20, -95, 86, 102, 35, 89, 110]
const mixed = [[10], -10, 20, -95, 86, [102], [35, 89], 110]
const posValsIndex = (el, i) => (el >= 0 ? `${i}: ${el}` : undefined)

console.log(flatMap(mixed, posValsIndex))
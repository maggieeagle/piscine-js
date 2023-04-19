function fold(arr, f, acc) {
    let res = acc==null?0:acc
    for(let i = 0; i < arr.length; i++){
        res = f(res, arr[i])
    }
    return res
}

function foldRight(arr, f, acc) {
    return fold(structuredClone(arr).reverse(), f, acc)
}

function reduce(arr, f) {
    if (arr.length < 1) return 'Error'
    let res = arr[0]
    for(let i = 1; i < arr.length; i++){
        res = f(res, arr[i])
    }
    return res
}

function reduceRight(arr, f) {
    return reduce(structuredClone(arr).reverse(), f)
}

const num1 = [3, 10, 26, 0]
const adder = (a, b) => a + b
console.log(foldRight(num1, adder, 0))
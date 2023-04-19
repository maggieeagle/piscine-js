function fold(arr, f, acc) {
    let res = acc==null?0:acc
    for(let i = 0; i < arr.length; i++){
        res = f(res, arr[i])
    }
    return res
}

function foldRight(arr, f, acc) {
    return fold(arr.reverse(), f, acc)
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
    return reduce(arr.reverse(), f)
}
function map(arr, f) {
    let res=[]
    for(let i = 0; i < arr.length; i++){
        res.push(f(arr[i], i, arr))
    }
    return res
}

function flatMap(arr, f) {
    return map(arr, f).flat(1)
}
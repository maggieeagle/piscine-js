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
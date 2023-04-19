function map(arr, f) {
    let res=[]
    for(let i = 0; i < arr.length; i++){
        res.push(f(arr[i], i, arr))
    }
    return res
}

function flatMap(arr, f) {
    return makeFlat(map(arr, f),1)
}

function makeFlat(arr, depth) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && (depth > 0 || depth == null)) {
            res = res.concat(makeFlat(arr[i], depth-1))
        } else {
            res.push(arr[i])
        }
    }
    return res
}
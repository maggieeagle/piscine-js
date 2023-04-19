function map(arr, f) {
    let res=[]
    for(let i = 0; i < arr.length; i++){
        res.push(f(arr[i], i, arr))
    }
    return res
}

function makeFlat(arr, depth) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && (depth > 0 || depth == null)) {
            res = res.concat(flat(arr[i], depth-1))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

function flatMap(arr, f) {
    return map(arr, f).makeFlat(1)
}
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

function flat(arr, depth) {
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
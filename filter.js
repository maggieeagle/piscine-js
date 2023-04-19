function filter(arr, f) {
    let res=[]
    for(let i = 0; i < arr.length; i++){
        if (f(arr[i], i, arr)) res.push(arr[i])
    }
    return res
}

function reject(arr, f) {
    let res=[]
    for(let i = 0; i < arr.length; i++){
        if (!f(arr[i], i, arr)) res.push(arr[i])
    }
    return res
}

function partition(arr, f) {
    let res1=[], res2=[]
    for(let i = 0; i < arr.length; i++){
        if (f(arr[i]), i, arr) res1.push(arr[i])
        else res2.push(arr[i])
    }
    return [res1, res2]
}
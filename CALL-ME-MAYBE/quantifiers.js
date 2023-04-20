function every(arr, f) {
    for(let i = 0; i < arr.length; i++){
        if(!f(arr[i], arr, i)) return false
    }
    return true
}

function some(arr, f) {
    for(let i = 0; i < arr.length; i++){
        if(f(arr[i], arr, i)) return true
    }
    return false
}

function none(arr, f) {
    return !some(arr, f)
}
function invert(obj) {
    let arr = Object.entries(obj).map(([key,value])=>[value,key])
    return Object.fromEntries(arr)
}
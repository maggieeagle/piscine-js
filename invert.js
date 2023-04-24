function invert(obj) {
    let arr = Object.entries(obj).map(([key,value])=>[value,key])
    console.log(arr)
    return Object.fromEntries(arr)
}

console.log(invert({ brand: 'ford', motor: 'v8', year: 2000, fast: true, eco: true }))
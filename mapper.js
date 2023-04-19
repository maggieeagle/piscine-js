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

const indexValsArray = (el, i, arr) =>
  `${el} is at index: ${i} out of ${arr.length - 1}`
  const numbers = [10, -10, 20, -95, 86, 102, 35, 89, 110]
console.log(map(numbers, indexValsArray))
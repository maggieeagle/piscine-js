function forEach(arr, f) {
    for (let i = 0; i<arr.length; i++){
        f(arr[i], i, arr)
    }
}

const arr = [1, 2, 3, 4, 5, Math.random(), 7, 10, -10, 20, -95]

const result = []
forEach(arr, (_, index) => result.push(index))
console.log(result)
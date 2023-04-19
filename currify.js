function currify(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(null, args)
        }
        return function (...args2) {
            return curried.apply(null, args.concat(args2))
        }
    }
}

// const mult2 = (el1, el2) => el1 * el2
// console.log(mult2(2, 2)) // result expected 4

// const mult2Curried = currify(mult2)

// console.log(mult2Curried(2)(2))
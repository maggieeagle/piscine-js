function debounce(func, delay) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

function opDebounce(func, delay, leading = undefined) {
    let timerId
    return function (...args) {
        if (leading != undefined && !timerId) {
            func.apply(this, args)
        }
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            if (leading == undefined) {
                func.apply(this, args)
            }
        }, delay);
    }
}

// console.log(await Promise.all([
//     run(debounce(add, 50), { delay: 100, count: 5 }),
//     run(debounce(add, 20), { delay: 50, count: 10 }),
//   ]))

// console.log(opDebounce(console.log, 20000))
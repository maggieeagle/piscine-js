function debounce(func, delay) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

function opDebounce(func, delay, leading) {
    if (leading == undefined) {
        return func
    }
    else return debounce(func, delay)
}

// console.log(await Promise.all([
//     run(debounce(add, 50), { delay: 100, count: 5 }),
//     run(debounce(add, 20), { delay: 50, count: 10 }),
//   ]))

opDebounce(console.log, 10)
function debounce(func, delay) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

function opDebounce(func, delay, leading = false) {
    if (!leading) debounce(func, delay)
    else return function(...args) {
        func.apply(this, args)
    }
}

// console.log(await Promise.all([
//     run(debounce(add, 50), { delay: 100, count: 5 }),
//     run(debounce(add, 20), { delay: 50, count: 10 }),
//   ]))
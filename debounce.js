function debounce(func, delay) {
    let timerId
    clearTimeout(timerId)
    timerId = setTimeout(() => {
        return func(...args)
    }, delay);
}

function opDebounce(func, delay, leading = false) {
    if (!leading) debounce(func, delay)
    else return func(...args)
}

// console.log(await Promise.all([
//     run(debounce(add, 50), { delay: 100, count: 5 }),
//     run(debounce(add, 20), { delay: 50, count: 10 }),
//   ]))
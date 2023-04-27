function debounce(func, delay) {
    let timerId
    clearTimeout(timerId)
    timerId = setTimeout(() => {
        return func.call()
    }, delay);
}

function opDebounce(func, delay, leading = false) {
    if (!leading) debounce(func, delay)
    else return func.call()
}

// console.log(await Promise.all([
//     run(debounce(add, 50), { delay: 100, count: 5 }),
//     run(debounce(add, 20), { delay: 50, count: 10 }),
//   ]))
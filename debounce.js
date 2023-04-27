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
        if (timerId) {
            clearTimeout(timerId);
        }
        if (leading != undefined && !timerId) {
            console.log('not waiting')
            return func.apply(this, args)
        }
        console.log('waiting')
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            timerId = null;
            if (leading == undefined) {
                return func.apply(this, args)
            }
        }, delay);
    }
}

// console.log(await Promise.all([
//     run(debounce(add, 50), { delay: 100, count: 5 }),
//     run(debounce(add, 20), { delay: 50, count: 10 }),
//   ]))

// console.log(opDebounce(console.log, 20000))
function debounce(func, delay) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func(args)
        }, delay);
    }
}

function opDebounce(func, delay, leading = false) {
    if (!leading) debounce(func, delay)
    else return function(...args) {
        func(args)
    }
}
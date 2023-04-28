function throttle(func, wait) {
    let lastTime = 0
    return function(...args) {
        let now = Date.now()
        if (now - lastTime <= wait) {
            func.apply(this, ...args)
            lastTime = now
        }
    }
}

function opThrottle(func, wait, options = {}) {
    let lastCall, timerId
    const {leading = true, trailing = true} = options
    return function(...args) {
        let now = Date.now()

        if (leading && !timerId) {
            func.apply(this, args)
            lastCall = now
        } else {
            timeLeft = wait - (now - lastCall)

            if (timeLeft < 0) {
                clearTimeout(timerId)
                timerId = null
                func.apply(this, args)
                lastCall = now
            } else if(trailing && !timerId) {
                timerId = setTimeout(() => {
                    func.spply(this, args)
                    lastCall = Date.now()
                    timerId = null
                }, timeLeft)
            }
        }
    }
}
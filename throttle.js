function throttle(func, wait) {
    let lastTime = 0, timerId
    return function (...args) {
        let now = Date.now()
        if (now - lastTime >= wait) {
            func.apply(this, args)
            lastTime = now
        } else {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                func.apply(this, args)
                lastTime = Date.now()
            }, wait - (now - lastTime))
        }
    }
}

function opThrottle(func, wait, options) {
    let lastCall = 0, timerId = null
    const defaultOptions = { leading: true, trailing: true }
    options = Object.assign({}, defaultOptions, options)
    // console.log(options)
    return function (...args) {
        let now = Date.now()

        if (options.leading && !timerId) {
            func.apply(this, args)
            lastCall = now
            timerId = setTimeout(() => {
                timerId = null
                if (options.trailing) {
                  func(...args)
                  lastCall = Date.now()
                }
              }, wait)
        } else {
            let timeLeft = wait - (now - lastCall)

            if (timeLeft < 0) {
                clearTimeout(timerId)
                timerId = null
                func.apply(this, args)
                lastCall = now
            } else if (options.trailing && !timerId) {
                timerId = setTimeout(() => {
                    func.apply(this, args)
                    lastCall = Date.now()
                    timerId = null
                }, timeLeft)
            }
        }
    }
}

opThrottle(console.log, 200, { trailing: true })
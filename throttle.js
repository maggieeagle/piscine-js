function throttle(func, wait) {
    let lastTime = 0, timerId
    return function(...args) {
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
    if (options == undefined) options = {leading: true, trailing: true}
    if (options.leading == undefined) options.leading = true
    if (options.trailing == undefined) options.trailing = true
    console.log(options)
    return function(...args) {
        let now = Date.now()

        if (options.leading && !timerId) {
            func.apply(this, args)
            lastCall = now
        } else {
            let timeLeft = wait - (now - lastCall)

            if (timeLeft < 0) {
                clearTimeout(timerId)
                timerId = null
                func.apply(this, args)
                lastCall = now
            } else if(options.trailing && !timerId) {
                timerId = setTimeout(() => {
                    func.apply(this, args)
                    lastCall = Date.now()
                    timerId = null
                }, timeLeft)
            }
        }
    }
}

opThrottle(console.log, 200, {trailing: false})
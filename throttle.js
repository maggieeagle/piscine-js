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
    let lastCall = 0, timerId = null;
    const defaultOptions = { leading: false, trailing: false };
    options = Object.assign({}, defaultOptions, options);
    // console.log(options)
    return function (...args) {
        let now = Date.now();
        let elapsed = now - (lastCall+wait);

        if (elapsed >= 0) {
            clearTimeout(timerId);
            lastCall = now;
            func.apply(this, args);
            if (options.trailing) {
                timerId = setTimeout(() => {
                    lastCall = now;
                    func.apply(this, args);
                    timerId = null;
                }, wait-elapsed);
            }
        } else {
            if (options.leading && lastCall === 0) {
                lastCall = now;
                func.apply(this, args);
            } 
                if (options.trailing && !timerId) {
                    timerId = setTimeout(() => {
                        lastCall = now;
                        elapsed = now - (lastCall+wait);
                        func.apply(this, args);
                        timerId = null;
                    }, wait-elapsed);
                }
            
        }
    }
}

opThrottle(console.log, 200, { trailing: true })
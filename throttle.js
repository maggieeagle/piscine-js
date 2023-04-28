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
    let lastCall = 0, timerId = null, lastArgs = null;
    const defaultOptions = { leading: true, trailing: true };
    options = Object.assign({}, defaultOptions, options);
    // console.log(options)
    return function (...args) {
        let now = Date.now();
        let elapsed = now - lastCall;

        if (elapsed >= wait) {
            clearTimeout(timerId);
            lastCall = now;
            func.apply(this, args);
            lastArgs = null;
        } else {
            if (options.leading && lastCall === 0) {
                lastCall = now;
                func.apply(this, args);
                lastArgs = null;
            }
            if (options.trailing) {
                lastArgs = args;
                if (!timerId) {
                    timerId = setTimeout(() => {
                        lastCall = Date.now();
                        func.apply(this, lastArgs);
                        lastArgs = null;
                        timerId = null;
                    }, wait - elapsed);
                }
            }
        }
    }
}

opThrottle(console.log, 200, { trailing: true })
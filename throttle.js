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

const opThrottle = (func, delay, options = { leading: true, trailing: false }) => {
    if (options == undefined) options = {leading: false, trailing: false}
    let timer = null,
      lastRan = null,
      trailingArgs = null;
  
    return function (...args) {
  
      if (timer) {
        lastRan = this;
        trailingArgs = args;
        return;
      } 
  
      if (options.leading) {
        func.call(this, ...args)
      } else {
        lastRan = this;
        trailingArgs = args
      }
  
      const coolDownPeriodComplete = () => {
        if (options.trailing && trailingArgs) {
          func.call(lastRan, ...trailingArgs);
          lastRan = null;
          trailingArgs = null;
          timer = setTimeout(coolDownPeriodComplete, delay)
        } else {
          timer = null;
        }
      }
  
      timer = setTimeout(coolDownPeriodComplete, delay);
    }
  }
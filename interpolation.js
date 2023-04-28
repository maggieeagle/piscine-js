function interpolation(obj) {
    const stepValue = (obj.end - obj.start) / obj.step, timeout = obj.duration / obj.step
    for (let i = 0; i < obj.step; i++) {
        setTimeout(() => {
            obj.callback([stepValue*i, timout*i])
        }, timeout)
    }
}
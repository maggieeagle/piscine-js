function interpolation(obj, step = 0) {
    if (step >= obj.step) {
        return;
    }
    const stepValue = (obj.end - obj.start) / obj.step
    const timeout = obj.duration / obj.step
    setTimeout(() => {
        obj.callback([(obj.start+stepValue) * step, timeout * (step + 1)])
        interpolation(obj, step + 1);
    }, timeout)
}
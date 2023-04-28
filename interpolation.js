function interpolation(obj, step = 0) {
    if (currentStep >= obj.step) {
        return;
    }
    const stepValue = (obj.end - obj.start) / obj.step
    const timeout = obj.duration / obj.step
    setTimeout(() => {
        obj.callback([stepValue * step, timeout * (step + 1)])
        interpolation(obj, step + 1);
    }, timeout)
}
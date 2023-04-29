async function race(promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(resolve).catch(reject);
        }
    });
}

async function some(promises, count) {
    if (promises == [] || count == 0) return undefined
    let res = []
    for (let i = 0; i < count; i++) {
        let first = race(promises)
        res.push(first)
        promises.splice(promises.indexOf(first, 1))
    }
    return res
}
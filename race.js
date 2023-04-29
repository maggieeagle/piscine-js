async function race(promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(resolve).catch(reject);
        }
    });
}

async function some(promises, count) {
    if (promises.length == 0 || count == 0) return
    let res = []
    for (let i = 0; i < count; i++) {
        let first = race(promises)
        res.push(first)
        promises.splice(promises.indexOf(first, 1))
    }
    return res
}

console.log(some([], 10))
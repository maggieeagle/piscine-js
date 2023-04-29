async function race(promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(resolve).catch(reject);
        }
    });
}

async function some(promises, count) {
    if (promises.length == 0 || count == 0) return []
    // let res = []
    // console.log(typeof promises)
    // for (let i = 0; i < count; i++) {
    //     res.push(race([promises[i]]))
    // }
    let all = await race(promises)
    const resolved= all
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value)
    .slice(0, n);
    return resolved
}

// console.log(some([Promise.resolve(2), 1], 10))
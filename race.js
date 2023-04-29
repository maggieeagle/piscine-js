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

    // let all = await Promise.all(promises)
    // console.log(all)
    // return all.slice(0, count)
    let results = []

    let settled = 0;

    for (let i = 0; i < promises.length; i++) {
      let result = await Promise.race([promises[i], new Promise((resolve) => setTimeout(resolve, 0))]);
      if (result !== undefined) {
        results.push(result);
        settled++;
        if (settled >= count) break;
      }
    }
    return results
}

const promise = new Promise((resolve, reject) => {
    // This promise will never resolve because the resolve function is never called
});

console.log(some([Promise.resolve(2), Promise.resolve(2), promise], 2))
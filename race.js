async function race(promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(resolve).catch(reject);
        }
    });
}

async function some(promises, count) {
    if (promises.length == 0 || count == 0) return []

    let results = []
    let resolvedValues = new Array(promises.length).fill(null);
    let indexes = promises.map((_, i) => i);

    while (results.length < count && indexes.length > 0) {
        let index
        try {
            index = await Promise.race(indexes.map((i) => promises[i].then(() => i)));
            resolvedValues[index] = await promises[index];
        } catch (err) {
            console.error(err);
        }
        indexes = indexes.filter((i) => i !== index);
    }

    for (let i = 0; i < resolvedValues.length && results.length < count; i++) {
        if (resolvedValues[i] !== null) {
            results.push(resolvedValues[i]);
        }
    }

    console.log(results);
    return results;
}

const promise = new Promise((resolve, reject) => {
    // This promise will never resolve because the resolve function is never called
});

console.log(some([Promise.resolve(2), Promise.resolve(5), promise], 2))
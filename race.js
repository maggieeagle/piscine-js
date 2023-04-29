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
    let indexes = promises.map((_, i) => i);

while (results.length < count && indexes.length > 0) {
    let index;
    try {
        index = await Promise.race(indexes.map((i) => promises[i].then(() => i)));
        results[index] = await promises[index];
    } catch (err) {
        console.error(err);
        results[index] = undefined;
    }
    indexes.splice(indexes.indexOf(index), 1);
}

let orderedResults = [];
for (let i = 0; i < promises.length; i++) {
    if (results[i] !== undefined) {
        orderedResults.push(results[i]);
    }
}

console.log(orderedResults);
return orderedResults;
}

const promise = new Promise((resolve, reject) => {
    // This promise will never resolve because the resolve function is never called
});

console.log(some([Promise.resolve(2), Promise.resolve(5), promise], 2))
async function series(asyncFunctions) {
    const promises = [];
    for (const func of asyncFunctions) {
        const result = await func();
        promises.push(result);
    }
    let results = await Promise.all(promises);
    return results;
}

// console.log(awaitseries([() => Promise.resolve(1), () => Promise.resolve(true)]))
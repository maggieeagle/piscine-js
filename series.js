async function series(asyncFunctions) {
    let promises = asyncFunctions.map(func => {
        let value = await func()
        return value
    });
    let results = await Promise.all(promises);
    return results;
}

// console.log(awaitseries([() => Promise.resolve(1), () => Promise.resolve(true)]))
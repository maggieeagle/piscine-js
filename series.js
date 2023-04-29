async function series(asyncFunctions) {
    let promises = asyncFunctions.map(func => await func());
    let results = await Promise.all(promises);
    return results;
  }

// console.log(awaitseries([() => Promise.resolve(1), () => Promise.resolve(true)]))
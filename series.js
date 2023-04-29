async function series(asyncFunctions) {
    let promises = asyncFunctions.map(func => func());
    let results = await Promise.all(promises);
    return results;
  }

// console.log(awaitseries([() => Promise.resolve(1), () => Promise.resolve(true)]))
function series(asyncFunctions) {
    let res = []
    asyncFunctions.forEach(func => {
        res.push(await func)
    });
}
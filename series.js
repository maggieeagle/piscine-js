function series(asyncFunctions) {
    res = []
    asyncFunctions.forEach(func => {
        res.push(await func)
    });
}
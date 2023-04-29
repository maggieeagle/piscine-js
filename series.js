function series(asyncFunctions) {
    let res = []
    asyncFunctions.forEach(func => {
        let output = await func()
        res.push(output)
    });
    return res
}
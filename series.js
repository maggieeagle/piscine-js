function series(asyncFunctions) {
    let res = []
    asyncFunctions.forEach(func => {
        let output = func()
        res.push(output)
    });
    return res
}
function flow(functions) {
    return function(...args){
        let res = functions[0].apply(null, args)
        for (let i = 1; i < functions.length; i++) {
            res = functions[i](res)
        }
        return res
    }
}
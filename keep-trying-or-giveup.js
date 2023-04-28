function retry(count, callback) {
    return function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                return callback(args)[0]
            } catch (error) {
                retries++
                if (retries > count) throw new Error()
            }
        }
    }
}

function timeout(delay, callback) {

}
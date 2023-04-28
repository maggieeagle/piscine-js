function retry(count, callback) {
    return async function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                return await Promise.race(callback(args))
            } catch (error) {
                retries++
                if (retries > count) throw new Error()
            }
        }
    }
}

function timeout(delay, callback) {

}
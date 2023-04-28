function retry(count, callback) {
    return async function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                return await callback(args).join('')
            } catch (error) {
                retries++
                if (retries > count) throw new Error()
            }
        }
    }
}

function timeout(delay, callback) {

}
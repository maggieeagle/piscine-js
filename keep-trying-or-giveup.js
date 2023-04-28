function retry(count, callback) {
    return async function(...args) {
        let retries = 0
        while (retries <= count) {
            let value
            try {
                value = await callback(...args)
                return value
            } catch (error) {
                if (retries > count) throw value
                retries++
            }
        }
    }
}

function timeout(delay, callback) {

}
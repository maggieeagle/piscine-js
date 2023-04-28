async function retry(count, callback) {
    return async function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                const [value] = await callback(args)
                return value
            } catch (error) {
                retries++
                if (retries > count) throw new Error()
            }
        }
    }
}

function timeout(delay, callback) {

}
function retry(count, callback) {
    return async function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                const value = await callback(...args)
                console.log(value)
                return value
            } catch (error) {
                if (retries > count) throw new Error('Error')
                retries++
            }
        }
    }
}

function timeout(delay, callback) {

}
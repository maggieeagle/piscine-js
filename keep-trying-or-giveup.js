function retry(count, callback) {
    return async function (...args) {
        let retries = 0
        while (retries <= count) {
            try {
                let value = await callback(...args)
                console.log(value)
                return value
            } catch (error) {
                if (retries > count+1) throw Promise.reject('Error')
                retries++
            }
        }
    }
}

function timeout(delay, callback) {

}
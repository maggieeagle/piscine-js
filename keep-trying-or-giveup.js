function retry(count, callback) {
    return async function (...args) {
        let retries = 0
        while (retries <= count) {
            try {
                let value = await callback(...args)
                console.log(value)
                return value
            } catch (error) {
                if (retries >= count) throw error
                retries++
            }
        }
    }
}

function timeout(delay, callback) {
    return async function (...args) {
        let value = callback(...args)
        setTimeout(() => {
            console.log(value)
            if (value == undefined) return value
            else return Error('timeout')
        }, delay);
    }
}
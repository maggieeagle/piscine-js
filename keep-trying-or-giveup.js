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
        let value = await callback(...args)
        setTimeout(() => {
            console.log(value)
            if (value == undefined) value =  Error('timeout')
        }, delay);
        return value
    }
}
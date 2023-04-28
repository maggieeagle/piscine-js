function retry(count, callback) {
    return function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                return await callback(args)
            } catch (error) {
                retries++
                if (retries > count) throw new Error()
                retry(count, callback)(args)
            }
        }
    }
}
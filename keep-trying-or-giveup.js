async function retry(count, callback) {
    return async function(...args) {
        let retries = 0
        while (retries <= count) {
            try {
                return await callback(...args)
            } catch (error) {
                retries++
                if (retries > count) throw new Error()
            }
        }
    }
}

function timeout(delay, callback) {

}

export const setup = () => ({
    r: Math.random().toString(36).slice(2),
    failNTimes: (n) => async (...v) =>
      --n < 0 ? v : Promise.reject(Error(`x:${v}`)),
    delayed: (delay) => (...v) => new Promise((s) => setTimeout(s, delay, v)),
  })
  
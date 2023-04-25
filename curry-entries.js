function defaultCurry(obj1) {
    return function curried(obj2) {
        let arr = Object.entries(obj1).map(([key, value]) => [key, newValue(key, value)])
        arr = arr.concat(omit(obj2, Object.keys(obj1)))
        return Object.fromEntries(arr)

        function newValue(key, value) {
            if (obj2[key] != null && obj1[key] != null) return obj2[key]
            return obj1[key]
        }

        function omit(obj, keys) {
            let arr = Object.entries(obj).filter(pair => !keys.join(',').includes(pair[0]))
            return arr
        }
    }
}

function mapCurry(func) {
    return function curried(obj) {
        let modified = Object.entries(obj).map(([key, value]) => func([key, value]));
        return Object.fromEntries(modified)
    }
}

function reduceCurry(func) {
    return function curried(obj, init) {
        return Object.entries(obj).reduce(func, init==null?0:init);
    }
}

function filterCurry(condition) {
    return function curried(obj) {
        let filtered = Object.entries(obj).filter(entry => condition(entry));
        return Object.fromEntries(filtered)
    }
}

function reduceScore(personnel, init) {
    let forceUsers = filterCurry(([k, v]) => v.isForceUser)(personnel)
    return reduceCurry((acc, [k, v]) => (acc += v.pilotingScore + v.shootingScore))(forceUsers, init)
}

function filterForce(personnel) {
    return filterCurry(([k, v]) => v.shootingScore >= 80)(personnel)
}

function mapAverage(personnel, init) {
    return mapCurry(([k, v]) => {
        v.averageScore = (v.pilotingScore + v.shootingScore) / 2
        return [k, v]
    })(personnel, init)
}

// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
// })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
// })
// )

// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// }

// // console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))

// // console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0))

// // console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
// //     str: 'string',
// //     nbr: 1,
// //     arr: [1, 2],
// //   })
// //   )

// console.log(filterForce(personnel))
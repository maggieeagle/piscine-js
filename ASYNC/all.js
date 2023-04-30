// async function all(obj) {
//     if (Object.entries(obj).length == 0) return {}
//     let resolved = Object.entries(obj).map(([key, value]) => {
//         let newKey, newValue
//         // if (key instanceof Promise) newKey = key.then(function(result){return result})
//         /* else*/ newKey = key
//         console.log(value instanceof Promise)
//         if (value instanceof Promise) {
//             return value.then(function (result) {
//                 console.log('result', result)
//                 return result
//             })
//         }
//         else newValue = value
//         return [newKey, newValue]
//     })
// }

// async function resolveValue(value) {

// }

console.log(all({
    a: 1,
    b: Promise.resolve(true),
}))

function all(obj) {
    if (Object.entries(obj).length == 0) return {}
    return resolve(obj).then((result) => {
        console.log(result); // { a: 1, b: true }
        return result
    });
}

async function resolve(obj) {
    const promises = Object.values(obj);
    const keys = Object.keys(obj);
    const result = {};
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
      keys.forEach((key, index) => {
        const value = promises[index];
        if (value instanceof Promise) {
          value
            .then((resolvedValue) => {
              result[key] = resolvedValue;
              resolvedCount++;
              if (resolvedCount === promises.length) {
                resolve(result);
              }
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          result[key] = value;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(result);
          }
        }
      });
    });
}
// async function all(obj) {
//     if (Object.entries(obj).length == 0) return {}
//     let resolved = Object.entries(obj).map(([key, value]) => {
//         let newKey, newValue
//         // if (key instanceof Promise) newKey = key.then(function(result){return result})
//         /* else*/ newKey = key
//         console.log(value instanceof Promise)
//         if (value instanceof Promise) {
//             newValue = resolveValue(value)
//         }
//         else newValue = value
//         return [newKey, newValue]
//     })
// }

// async function resolveValue(value) {
//     return value.then(function (result) {
//         console.log('result', result)
//         return result
//     })
// }

// console.log(all({
//     a: Promise.resolve(1),
//     b: Promise.resolve(true),
// }))

function all(obj) {
    const keys = Object.keys(obj);
    const promises = keys.map(key => obj[key]);
    return Promise.all(promises).then(results => {
      return keys.reduce((acc, key, index) => {
        acc[key] = results[index];
        return acc;
      }, {});
    });
  }
  

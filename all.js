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
    return resolve(obj).then((result) => {
        console.log(result); // { a: 1, b: true }
        return result
      });
  }

async function resolve(obj) {
    const promises = Object.values(obj);
    const keys = Object.keys(obj);
    return Promise.all(promises).then((resolvedValues) => {
      const result = {};
      for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = resolvedValues[i];
      }
      return result;
    });
}
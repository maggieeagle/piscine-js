function adder(arr, init) {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, init==null?0:init
    );
}

function sumOrMul(arr, init) {
    let initialValue
    if (init == null) initialValue = arr[0]
    % 2 == 0 ? 1 : 0
    else initialValue = init
    return arr.reduce(
        (acc, current) => current % 2 == 0 ? acc * current : acc + current, initialValue);
}

function funcExec(arr, init) {
    return arr.reduce((accumulator, currentFunc) => {
            return currentFunc(accumulator);
          }, init==null?0:init);
}

console.log(funcExec([
    (x) => x + 20,
    (x) => x * 3,
    (x) => {
      return {
        result: x,
        isOdd: x % 2 === 0,
      }
    },
  ]))
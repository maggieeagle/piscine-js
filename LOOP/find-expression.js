const add4 = '+4'
const mul2 = '*2'

function findExpression(number) {
    if (number <= 0) return undefined
    if (number == 1) return '1'
    if (findExpression(number/2) != undefined) return findExpression(number/2) + ' ' + mul2
    if (findExpression(number-4) != undefined) return findExpression(number-4) + ' ' + add4
}

console.log(findExpression(12))
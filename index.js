let localA = 0 // global scope
let localB = 0 // global scope
function calculate(num1, num2, operator) {
    localA = 10 // local scope
    localB = 20 // local scope
    let result = 0

    switch (operator) {
        case 'sub':
            result = num1 && num2 ? num1 - num2 : localA - localB
            break;
        case 'mul':
            result = num1 && num2 ? num1 * num2 : localA * localB
            break;
        case 'div':
            result = num1 && num2 ? num1 / num2 : localA / localB
            break;
        default:
            result = num1 && num2 ? num1 + num2 : localA + localB
            break;
    }

    return result
}
console.log(calculate(4, 6))
console.log(calculate(4, 6, 'sub'))
console.log(calculate(4, 6, 'mul'))
console.log(calculate(4, 6, 'div'))
console.log(calculate())
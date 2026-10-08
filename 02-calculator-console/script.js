const num1 = +prompt("Введите число:")
const operator = prompt("Введите операцию, например + или - :")
const num2 = +prompt("Введите второе число:")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let result

switch (operator) {
    case "+":
        result = add(num1, num2)
        break
    case "-":
        result = subtract(num1, num2)
        break
    case "*":
        result = multiply(num1, num2)
        break
    case "/":
        result = divide(num1, num2)
        break
    default:
        result = "Неизвестная операция"
}
console.log("Результат: ", result)

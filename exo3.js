button.addEventListener("click", action)
const multiply = (number1, number2) => number1 * number2;
function action() {
    let p = document.createElement("p")
    p.innerText = multiply(number1.value, number2.value)
    document.body.append(p)
}
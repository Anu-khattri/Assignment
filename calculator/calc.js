function calculate(operator) {
    const n1 = parseFloat(document.getElementById("num1").value);
    console.log(n1);
    const n2 = parseFloat(document.getElementById("num2").value);
    console.log(n2);
    let result;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            result = "invalid";
    }

    console.log(result);
    document.getElementById("result").value = result;
}

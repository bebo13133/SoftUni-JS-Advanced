function calculator() {
    const html = {
        selector1: "",
        selector2: "",
        result: "",

    }
    const operands = { "+": (a, b) => Number(a) + Number(b), "-": (a, b) => Number(a) - Number(b) }


    function cal(sl1, sl2, operand) {

        return operands[operand](sl1, sl2)
    }


    return {
        init: (selector1, selector2, resultSelector) => {
            html.selector1 = document.querySelector(selector1);
            html.selector2 = document.querySelector(selector2);
            html.result = document.querySelector(resultSelector);
        },
        add: () => { html.result.value = cal(html.selector1.value, html.selector2.value, "+") },
        subtract: () => { html.result.value = cal(html.selector1.value, html.selector2.value, "-") }
    }
}




//Вариант 2 

function calculator() {
    let firsInput;
    let secondInput;
    let resultInpt;

    function init(selector1, selector2, resultSelector) {
        firsInput = document.querySelector(selector1)
        secondInput = document.querySelector(selector2)
        resultInpt = document.querySelector(resultSelector)
    }
    function add() {
        resultInpt.value = Number(firsInput.value) + Number(secondInput.value)
    }
    function subtract() {
        resultInpt.value = Number(firsInput.value) - Number(secondInput.value)
    }
    return { init, add, subtract }

}
const  calculate = calculator(); calculate.init('#num1', '#num2', '#result');
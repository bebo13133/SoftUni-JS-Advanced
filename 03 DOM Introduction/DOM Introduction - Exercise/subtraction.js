function subtract() {
    const num1 = document.getElementById("firstNumber").value
    const num2 = document.getElementById("secondNumber").value
   
   const divResult = document.getElementById("result")
   divResult.textContent = Number(num1) - Number(num2)
   }
function toggle() {

    let textElement = document.querySelector("#extra")
    let buttonElement = document.querySelector('.button')

    buttonElement.textContent === "More" ? (buttonElement.textContent = "Less", textElement.style.display = "block") :

    (buttonElement.textContent = 'More', textElement.style.display = 'none')

}
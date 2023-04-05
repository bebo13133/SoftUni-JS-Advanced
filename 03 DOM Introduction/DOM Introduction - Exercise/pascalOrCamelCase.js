function solve() {
    const input = document.getElementById("text").value
    const convention = document.getElementById("naming-convention").value
    const resultElement = document.getElementById("result")
  
    const toPascal = (text) =>
      text
        .split(" ")
        .map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
        .join("");
  
    const toLower = (text) => {
      text = toPascal(text)
      return text[0].toLowerCase() + text.slice(1)
    }
    if (convention === "Pascal Case") {
      resultElement.textContent = toPascal(input)
    } else if (convention === "Camel Case") {
      resultElement.textContent = toLower(input)
    } else {
      resultElement.textContent = "Error!"
    }
  }
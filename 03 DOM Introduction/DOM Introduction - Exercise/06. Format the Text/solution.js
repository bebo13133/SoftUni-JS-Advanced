function solve() {

  let input = document.getElementById('input')
  let text = input.value.split('.').filter(x => x.length > 1)
  let result = document.getElementById('output')

  while (text.length > 0) {
    let searchText = text.splice(0, 3).join('. ')
    let p = document.createElement('p')
    p.textContent = searchText + "."
   result.appendChild('p')
  }
}

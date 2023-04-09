function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let inputElement = document.getElementById('searchField')
      let rows = document.querySelectorAll('tbody tr')
   function onClick() {
   
      for (let row of rows) {
         row.classList.remove('select')
         if (inputElement.value !== "" && row.innerHTML.includes(inputElement.value)) {
            row.className = "select"
         }
      }
      inputElement.value = ""
   }
}
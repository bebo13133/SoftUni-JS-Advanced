function search() {
   let listElements = Array.from(document.querySelectorAll("#towns li"))
   let searchElement = document.querySelector('#searchText').value
   let matchElements = document.getElementById('result')
   let counter = 0
   listElements.forEach((word, i) => {
      (word.textContent).includes(searchElement) && searchElement !== '' ? (counter++, word.style.textDecoration = 'underline',
         word.style.fontWeight = 'bold')
         : (word.style.textDecoration = 'none', word.style.fontWeight = 'normal')
   });
   matchElements.textContent = `${counter} matches found`
}

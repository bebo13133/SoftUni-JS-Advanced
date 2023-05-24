function addItem() {
   let inputElements = document.getElementById('newItemText')
   let itemsElements = document.getElementById('items');

   let newLi = document.createElement('li')
   newLi.textContent = inputElements.value;
   if(inputElements.value!==""){

    itemsElements.appendChild(newLi)
   }
   inputElements.value = ""
}
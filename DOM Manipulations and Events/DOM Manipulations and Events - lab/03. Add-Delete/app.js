function addItem() {
    let inputElements = document.getElementById('newItemText')
    let itemsElements = document.getElementById('items');
 
    let newLi = document.createElement('li');
    
    newLi.textContent = inputElements.value;
    if(inputElements.value!==""){
 
     itemsElements.appendChild(newLi)
    }

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent="[Delete]"
    deleteBtn.addEventListener('click', (e)=>newLi.remove());
    newLi.appendChild(deleteBtn);

    inputElements.value = "";
}
function addItem() {
    const text = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const optionField = document.createElement('option')
    optionField.text = text.value;
    optionField.value = inputValue.value;
    document.getElementById('menu')
    .appendChild(optionField)
    text.value = '';
    inputValue.value = '';
}
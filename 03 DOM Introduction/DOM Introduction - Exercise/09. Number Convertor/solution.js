function solve() {
    function solve() {

        const inputNumber = document.getElementById('input');
        const selectMenuTo = document.getElementById('selectMenuTo');
        const resultInput = document.getElementById('result');
        const binary = document.createElement('option');
        binary.value = 'binary';
        binary.textContent = 'Binary';
        const hexa = document.createElement('option');
        hexa.value = 'hexadecimal';
        hexa.textContent = 'Hexadecimal';
    
        selectMenuTo.appendChild(binary);
        selectMenuTo.appendChild(hexa);
    
        const convertBtn = document.getElementsByTagName('button')[0];
        convertBtn.addEventListener('click', onConvert);
    
        function onConvert() {
    
            if (selectMenuTo.value === 'binary') {
                resultInput.value = Number(inputNumber.value).toString(2);
            } else if (selectMenuTo.value === 'hexadecimal') {
                resultInput.value = Number(inputNumber.value).toString(16).toUpperCase();
            }
        }
    }
}
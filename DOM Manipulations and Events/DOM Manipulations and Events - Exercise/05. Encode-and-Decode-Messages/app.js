function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = [...document.querySelectorAll('button')].forEach(button => button.addEventListener('click', onClick));
    function onClick(event) {
        const inputText = event.target.parentElement.querySelector('textarea');
        if (inputText.value != '') {
            if (event.target.textContent === 'Encode and send it') {
                console.log("decodeText")
                const decodeText = (inputText.value).split('').reduce((acc, char) => {
                    acc += String.fromCharCode(char.charCodeAt(0) + 1)
                  return acc
                }, "");
                textAreas[1].value = decodeText
                textAreas[0].value = "";
                return;
            }
            const encodeText = (inputText.value).split('').reduce((acc, char) => {
                acc += String.fromCharCode(char.charCodeAt(0) - 1)
              return acc}, "");
            textAreas[1].value = encodeText
        }
    }
}
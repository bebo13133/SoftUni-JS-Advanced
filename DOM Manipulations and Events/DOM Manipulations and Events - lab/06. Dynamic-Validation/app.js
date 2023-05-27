function validate() {
 const inputField = document.getElementById('email')

 inputField.addEventListener('change', onChanged)
 function onChanged(event){
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    (pattern.test(this.value))? this.classList.remove('error'): this.classList.add('error')
    }
 }

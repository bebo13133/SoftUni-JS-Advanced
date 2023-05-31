function validate() {
const validEmail = document.getElementById('email')
validEmail.addEventListener('change', (e)=>{
    const {target} = e;
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g
    const operation = pattern.test(target.value)? "remove":"add"
    target.classList[operation]("error")
})
}
function validate() {
    const validEmail = document.getElementById('email')
    validEmail.addEventListener('change', (e)=>{     
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g
        const operation = pattern.test(e.target.value)? "remove":"add"
        e.target.classList[operation]("error")
    })
    }
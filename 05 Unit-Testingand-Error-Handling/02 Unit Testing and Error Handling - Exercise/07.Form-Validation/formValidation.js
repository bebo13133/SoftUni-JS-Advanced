function validate() {
    document.getElementById('company').addEventListener('change', (e) => {
        let companyInfo = document.getElementById('companyInfo');
        document.getElementById('company').cheked == false ? companyInfo.style.display = 'none' : companyInfo.style.display = 'block'
    });
    document.getElementById('submit').addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();
        const inValid = [];
        const checkBox = document.querySelector('#company');
        const userName = document.getElementById('username');

        if (!/^[A-Za-z0-9]{3,20}$/.test(userName.value)) inValid.push(userName);
        // /^[^@.]+@[^@]*\.[^@]+$/;
        const mailField = document.getElementById('email');

        if (!/^[^@.]+@[^@]*\.[^@]*$/.test(mailField.value)) inValid.push(mailField);
        const pass = document.getElementById('password');
        const confirmPass = document.getElementById('confirm-password');

        if (!/^[\w]{5,15}$/.test(pass.value) || confirmPass.value !== pass.value || confirmPass.value === '')
            (inValid.push(pass)), (inValid.push(confirmPass));

        if (checkBox.checked) {
            const copmanyId = document.getElementById('companyNumber');
            if (!/^[0-9]{4}$/.test(copmanyId.value)) inValid.push(copmanyId);
        };

        inValid.forEach(field => field.style.borderColor = 'red');
        !inValid.length ? document.querySelector('#valid').style.display = 'block' : document.querySelector('#valid').style.display = 'none';
    }
}
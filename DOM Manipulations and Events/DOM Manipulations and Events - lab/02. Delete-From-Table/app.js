function deleteByEmail() {
 let inputEmail = document.querySelector('input[name="email"]');
 const emailsNames = document.querySelectorAll('tr td:nth-of-type(even)');
 const result = document.getElementById('result');

 const arrEmails= Array.from(emailsNames);
 const searchEmails = arrEmails.find(mail=> mail.textContent === inputEmail.value);

 if(searchEmails){
    searchEmails.parentElement.remove();
    result.textContent = 'Delete.'

 }else{
    result.textContent= 'Not found.'
 }
 inputEmail.value=''
}
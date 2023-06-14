function solve() {

const recepientInput = document.getElementById('recipientName')
const titleInput = document.getElementById('title')
const messagesInpt= document.getElementById('message');
const ulSentMails = document.querySelector('.sent-list')
const ulMails = document.getElementById('list')
const addBtn = document.getElementById('add');
const resetBtn = document.getElementById('reset');
const deleteList = document.querySelector('.delete-list')

addBtn.addEventListener('click',onAdd)
resetBtn.addEventListener('click',onClear)
function onClear(e){
 e.preventDefault()
 recepientInput.value =""
 titleInput.value =""
 messagesInpt.value =""     

}
function onAdd(e){
    e.preventDefault();
const recepient = recepientInput.value
const title = titleInput.value
const messages = messagesInpt.value
if(!recepient || !title || !messages)return;

const adding = onAdding(recepient,title,messages)
ulMails.appendChild(adding)
recepientInput.value =""
titleInput.value =""
messagesInpt.value =""  
}
function onAdding(recepient,title,messages){

const li = createElement('li', '', '')
const h4Element = createElement('h4',`Title: ${title}`,'')
const h4Recepient = createElement('h4',`Recipient Name: ${recepient}`,'')
const span = createElement('span', messages, '' )
const divEl = createElement('div','','list-action')
const sendBtn = createElement('button','Send','')
sendBtn.addEventListener('click',onSend)
sendBtn.id = 'send'
divEl.appendChild(sendBtn)
const deleteBtn = createElement('button', "Delete",'')
deleteBtn.addEventListener('click', ()=>{
    li.remove();

    const liListDelete = document.createElement('li');

    const spanListDelete = document.createElement('span');
    spanListDelete.textContent = `To: ${recepient}`;

    const spanListDelete2 = document.createElement('span');
    spanListDelete2.textContent = `Title: ${title}`;

    liListDelete.appendChild(spanListDelete);
    liListDelete.appendChild(spanListDelete2);

    deleteList.appendChild(liListDelete);
})
deleteBtn.id = 'delete'
divEl.appendChild(deleteBtn)
li.appendChild(h4Element)
li.appendChild(h4Recepient)
li.appendChild(span)
li.appendChild(divEl)
function onSend(e){
    const currentLi=e.target.parentElement;
    currentLi.parentElement.remove();
    const liMail = createElement('li', "","")
    ulSentMails.appendChild(liMail)
    const spanSend = createElement('span',`To: ${recepient}`,'')
    const spanTitle = createElement('span', `Title: ${title}`); 
    const divSend = createElement('div','', "btn")
    const delBtn = createElement('button', 'Delete', 'delete')
    delBtn.addEventListener('click',onDelSent)
    divSend.appendChild(delBtn)
    liMail.appendChild(spanSend)
    liMail.appendChild(spanTitle)
    liMail.appendChild(divSend)    
   }
   function onDelSent(e){
   let currentLi = e.target.parentElement.parentElement;
   deleteList.appendChild(currentLi)[0]
 const button = currentLi.querySelector('button')
    button.remove()
} 
return li 
}
    function createElement(type, value, className) {
        let el = document.createElement(type);
        className ? el.classList.add(className) : '';
        value ? el.textContent = value : '';
        return el;
      } 
}
solve()
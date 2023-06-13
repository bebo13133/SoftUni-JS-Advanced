window.addEventListener("load", solve);

function solve() {
const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('genderSelect');
const textAreaInput = document.getElementById('task');
const count = document.getElementById('progress-count')
const formBtm = document.getElementById('form-btn')
const elementUl = document.getElementById('in-progress');
const finshedUl =document.getElementById('finished')
const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', (e)=>{
  finshedUl.textContent = "";
})
formBtm.addEventListener('click', onAction)
function onAction(e){
  e.preventDefault();
  let firstName = firstNameInput.value
  let lastName = lastNameInput.value
  let age = ageInput.value
  let gender = genderInput.value
  let textArea = textAreaInput.value
  
 if(!firstName|| !lastName|| !age|| !gender|| !textArea) return;

let progress = onCreate(firstName,lastName,age,gender,textArea)
elementUl.appendChild(progress)
count.textContent = Number(count.textContent)+1
clearEl()

}
function clearEl(e){
  firstNameInput.value="";
  lastNameInput.value="";
  ageInput.value="";
  genderInput.value="";
  textAreaInput.value="";
}

function onCreate(firstName,lastName,age,gender,textArea){

  const li = document.createElement('li');
  li.classList.add('each-line');

  const article = document.createElement('article');
 li.appendChild(article);
  const h4 = document.createElement('h4');
  h4.textContent= `${firstName} ${lastName}`
  article.appendChild(h4)

  const p1 = document.createElement('p')
  p1.textContent = `${gender}, ${age}`;
  article.appendChild(p1);

  const pText = document.createElement('p')
  pText.textContent = `Dish description: ${textArea}`;
  article.appendChild(pText);

  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-btn');
editBtn.textContent = 'Edit'
  li.appendChild(editBtn);
  editBtn.addEventListener('click', (e)=>{

    let currnetLi = e.target.parentElement;
    let buttons = Array.from(currnetLi.querySelectorAll('button'))
    buttons.forEach(x=>x.remove())
    currnetLi.remove()
    firstNameInput.value=firstName
    lastNameInput.value=lastName
    ageInput.value=age
    genderInput.value=gender
    textAreaInput.value=textArea

    count.textContent = Number(count.textContent)-1
  })

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.textContent = "Mark as complete"
completeBtn.addEventListener('click', onComplete)
  li.appendChild(completeBtn)
return li;
}

function onComplete(e){
let currnetLi = e.target.parentElement;
let buttons = Array.from(currnetLi.querySelectorAll('button'))
buttons.forEach(x=>x.remove())
currnetLi.remove()
finshedUl.appendChild(currnetLi)
count.textContent = Number(count.textContent)-1


}

}

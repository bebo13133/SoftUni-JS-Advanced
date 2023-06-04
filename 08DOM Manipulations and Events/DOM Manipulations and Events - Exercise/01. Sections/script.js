function create(words) {
 const parent = document.getElementById('content')
 words.forEach(element => {
  const div  = document.createElement('div');
  const par = document.createElement('p');  
par.textContent = element
par.style.display = 'none' 
div.appendChild(par);

div.addEventListener('click',(event)=>{
   event.target.children[0].style.display ="block"
})
parent.appendChild(div)
});
}
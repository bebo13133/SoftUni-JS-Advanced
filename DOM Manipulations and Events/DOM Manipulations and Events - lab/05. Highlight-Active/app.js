function focused() {
 const inputFileds= Array.from(document.querySelectorAll('input'))
 .map(x=>{x.addEventListener('focus', (e)=>{ e.target.parentElement.classList.add("focused")
});
x.addEventListener('blur', (e)=>{
    e.target.parentElement.classList.remove("focused")});
});
}
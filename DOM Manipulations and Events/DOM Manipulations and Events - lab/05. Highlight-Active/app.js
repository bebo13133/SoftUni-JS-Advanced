function focused() {
 const inputFileds= Array.from(document.querySelectorAll('input'))
 .map(x=>{x.addEventListener('focus', (e)=>{ e.target.parentElement.classList.add("focused")
});
x.addEventListener('blur', (e)=>{
    e.target.parentElement.classList.remove("focused")});
});
}



// function focused() {
// const parent = document.querySelector('div');

// parent.addEventListener('focusin', add);
// parent.addEventListener('focusout', remove);

// function add(event) {


//         event.target.parentElement.classList.add("focused")
    
// }

// function remove(event) {

//     // if(event.taget.tagName = "INPUT"){} - не е необходима , focusin и out работят само върху input
//     event.target.parentElement.classList.remove('focused');
// }

// }

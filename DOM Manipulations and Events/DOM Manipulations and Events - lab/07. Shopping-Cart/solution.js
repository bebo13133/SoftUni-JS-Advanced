function solve() {
//capter element 
document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
document.getElementsByClassName('checkout')[0].addEventListener('click', onCheckOut);


const cart= [];
const output = document.getElementsByTagName('textarea')[0];
output.value = "";

function onClick(event){

   if (event.target.tagName === "BUTTON" && event.target.classList.contains('add-product')){
   const product = event.target.parentElement.parentElement;
   
   const nameProduct = product.querySelector('.product-title').textContent;
   const price = Number(product.querySelector('.product-line-price').textContent);
   cart.push({
      nameProduct, 
      price,
   });
   output.value+= `Added ${nameProduct} for ${price.toFixed(2)} to the cart.\n`;
}
}

function onCheckOut(){
   const allProducts = new Set()
   cart.forEach(product=> allProducts.add(product.nameProduct));
   const totalPrice = cart.reduce((a,b)=> a+b.price,0);
   output.value+= `You bought ${[...allProducts.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`;
   Array.from(document.querySelectorAll('button')).forEach(button=> button.disabled = true);
}
}
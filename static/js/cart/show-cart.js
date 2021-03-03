const toggleBtn = document.querySelector(".cart-toggle");
const togglePBtn = document.querySelector(".p-cart-toggle");
const cartCloseBtn = document.querySelector(".cart-close");
const cartbar = document.querySelector(".cart-bar");

toggleBtn.addEventListener("click", function(){
 
    cartbar.classList.toggle("show-cart");
})
cartCloseBtn.addEventListener("click", function(){
    cartbar.classList.remove("show-cart");
})
togglePBtn.addEventListener("click", function(){
    console.log('hi')
    cartbar.classList.toggle("show-cart");
})
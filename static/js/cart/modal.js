

const  modalBtn = document.querySelector(".modal-btn");
const  modal = document.querySelector(".modal-overlay");
const  closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click",function(){
    modal.classList.add("open-modal");
});

closeBtn.addEventListener("click",function(){
    modal.classList.remove("open-modal");
});

// const  modalBtn2 = document.querySelector(".modal-btn2");
// const  modal2 = document.querySelector(".modal-overlay2");
// const  closeBtn2 = document.querySelector(".close-btn2");

// modalBtn2.addEventListener("click",function(){
//     modal2.classList.add("open-modal2");
// });
// closeBtn2.addEventListener("click",function(){
//     modal2.classList.remove("open-modal2");
// });

// const  discountBtn = document.querySelector(".m-discount-btn");
// const  discount = document.querySelector(".m-discount-overlay");
// const  backBtn = document.querySelector(".back-btn");
// const  disCloseBtn = document.querySelector(".m-close-btn");

// discountBtn.addEventListener("click",function(){
//     discount.classList.add("open-modal");
// });
// disCloseBtn.addEventListener("click",function(){
//     discount.classList.remove("open-modal");
// });
// backBtn.addEventListener("click",function(){
//     discount.classList.remove("open-modal");
// });


// // ----------------





// const  moreBtn = document.querySelector(".more-btn");
// const  moreModal = document.querySelector(".m-discount-overlay2");
// const  moreCloseBtn = document.querySelector(".m-close-btn2");

// moreBtn.addEventListener("click",function(){
//     moreModal.classList.add("m-open-modal2");
//     // console.log('click')
// });
// moreCloseBtn.addEventListener("click",function(){
//     moreModal.classList.remove("m-open-modal2");
// });
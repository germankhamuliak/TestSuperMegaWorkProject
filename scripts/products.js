const productCards = document.querySelectorAll(".products__card")
const productWindow = document.querySelector(".modal-product")
const productClose = document.querySelectorAll(".product-close")
const productCardsText = document.querySelector(".modal-product-content")




productCards.forEach(e=>{
    e.addEventListener("click",()=>{
            productWindow.classList.add("active-product")
            const viewImg = e.querySelector('svg');
            let viewImgModal = viewImg.cloneNode(true);
            const viewText = e.querySelector('.product__card__textContent');
            let viewTextModal = viewText.cloneNode(true);
            productCardsText.append(viewImgModal);
            productCardsText.append(viewTextModal);
          }
 ) })


productClose.forEach(e=>{
    e.addEventListener("click",()=>{
    productCloseWindow()
})
})


export const productCloseWindow = () =>{
    productWindow.classList.remove("active-product")
    productCardsText.innerHTML="";
}
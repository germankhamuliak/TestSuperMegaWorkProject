const reviewsCardsLinks = document.querySelectorAll(".person-link")
const reviewsWindow = document.querySelector(".modal-product")
const reviewsClose = document.querySelector(".reviews-close")
const modalCardsText = document.querySelector(".modal-product-content")
const reviewsMore = document.querySelector(".more")
const reviewsCards = document.querySelectorAll(".reviews__slid")


reviewsCardsLinks.forEach(e=>{
    
    e.addEventListener("click",(z)=>{
            z.preventDefault();
            reviewsWindow.classList.add("active-product")
            const reviewsCard = e.closest(".reviews__msg").querySelector('.reviews__text')
            let reviewsTextModal = reviewsCard.cloneNode(true);
            modalCardsText.append(reviewsTextModal);
          }
 ) })


 reviewsMore.addEventListener("click",(z)=>{
    z.preventDefault()
    reviewsMore.style.visibility = "hidden"
    reviewsCards.forEach(e=>{
        e.classList.add("reviews__slid-active")
    })
    
 })
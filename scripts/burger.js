const burger = document.querySelector('.burger-menu')
const burgerList = document.querySelector('.burger-list ')
const burgerLinks = document.querySelectorAll('.burger__link ')


burger.addEventListener('click',()=>{
    burger.classList.toggle("burger-active")
    burgerList.classList.toggle("burger-list-active")
})

burgerLinks.forEach(e=>{
    e.addEventListener("click",()=>{
        burger.classList.remove("burger-active")
        burgerList.classList.remove("burger-list-active")
    })
})
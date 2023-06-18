const modalWindow = document.querySelector(".modal")
const modalBtns = document.querySelectorAll(".modalBtn")
const modalCloseBtns = document.querySelectorAll(".modaCloselBtn")
const body = document.querySelector("body")
import {closeConsultation} from "./conasultation.js"
import {testWindowsClose} from "./testPeriod.js"
import {productCloseWindow} from "./products.js"

modalBtns.forEach(e=>{
    e.addEventListener("click", ()=>{
        modalWindow.classList.add("modal-active")
        body.classList.add('body-modal')
        setTimeout(bodyIn,400) 
    })
})
modalCloseBtns.forEach(e=>{
    e.addEventListener("click", ()=>{
        setTimeout(bodyOut,400) 
        modalWindow.classList.remove("modal-active")
    })
})



function bodyIn(){
    body.classList.add('body-modal')
}

function bodyOut(){
    body.classList.remove('body-modal')
}

modalWindow.addEventListener("click",()=>{
    if(modalWindow.classList.contains("modal-active")){
    setTimeout(bodyOut,400)   
    modalWindow.classList.remove("modal-active")
    closeConsultation()
    testWindowsClose()
    productCloseWindow()
  }  
})



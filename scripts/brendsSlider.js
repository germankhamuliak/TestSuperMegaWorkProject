const nextSlide = document.querySelector(".brands-next")
const prevSlide = document.querySelector(".brands-prev")
const slider = document.querySelectorAll(".logo-item")

let x =0;
let i =0;

const activOrNotBtns = ()=>{

    if(i==0){
        prevSlide.classList.add("not-active") 
    }else{
        prevSlide.classList.remove("not-active") 
    }
    if(window.innerWidth>992){
        if(x >= 2240){
            nextSlide.classList.add("not-active") 
        }else{
            nextSlide.classList.remove("not-active") 
        }
    }
    if(window.innerWidth>1200){
        if(x >= 1920){
            nextSlide.classList.add("not-active") 
        }else{
            nextSlide.classList.remove("not-active") 
        }
    }
    if(window.innerWidth>1600){
        if(x >= 1000){
            nextSlide.classList.add("not-active") 
        }else{
            nextSlide.classList.remove("not-active") 
        }
    }
    
    
}
activOrNotBtns()
nextSlide.addEventListener("click",()=>{  
    if(!nextSlide.classList.contains("not-active")){
    x+=320;
    i+=1
    slider.forEach(e=>{
        e.style.left= `-${x}px`;
    }) 
    }  
    activOrNotBtns()
    
})
prevSlide.addEventListener("click",()=>{  
    if(!prevSlide.classList.contains("not-active")){
    i-=1    
    x-=320;
    slider.forEach(e=>{
        e.style.left= `${-x}px`;
    })     
    }
    activOrNotBtns()
})

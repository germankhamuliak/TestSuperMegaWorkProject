const nextSlide = document.querySelector(".awards-next")
const prevSlide = document.querySelector(".awards-prev")
const slider = document.querySelectorAll(".awards__slide")




let x =0;
let i =0;

const activOrNotBtns = ()=>{
    if(i==0){
        nextSlide.classList.add("not-active") 
    }else{
        nextSlide.classList.remove("not-active") 
    }
    if(i==(slider.length-1)){
        prevSlide.classList.add("not-active") 
    }else{
        prevSlide.classList.remove("not-active") 
    }
}
activOrNotBtns()
nextSlide.addEventListener("click",()=>{  
    if(!nextSlide.classList.contains("not-active")){
    x-=100;
    i-=1
    slider.forEach(e=>{
        e.style.left= `-${x}%`;
    }) 
    }  
    activOrNotBtns()
    
})
prevSlide.addEventListener("click",()=>{  
    if(!prevSlide.classList.contains("not-active")){
    i+=1    
    x+=100;
    slider.forEach(e=>{
        e.style.left= `${-x}%`;
    })     
    }
    activOrNotBtns()
})
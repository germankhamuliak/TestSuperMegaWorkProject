const nextSlide = document.querySelector(".reviews-next")
const prevSlide = document.querySelector(".reviews-prev")
const slider = document.querySelectorAll(".reviews__slid")
const revDots = document.querySelectorAll(".reviews__controler .dot")



let x = 0;
let i =0;
const activOrNotBtns = ()=>{
if(x==0){
  prevSlide.classList.remove("active-btn") 
}else{
    prevSlide.classList.add("active-btn") 
}
if(x==(slider.length-1)*50){
    nextSlide.classList.remove("active-btn") 
}else{
    nextSlide.classList.add("active-btn") 
}
revDots.forEach((e,index)=>{
    if(index<slider.length){
    e.classList.remove("dot-active")
    e.addEventListener("click",()=>{
        revDots.forEach((e)=>{
            e.classList.remove("dot-active")  
        })
        e.classList.add("dot-active")
        x=50;
        slider.forEach(ev=>{
        ev.style.left= `-${x*index}%`;
    }) 
    })
    }
})
revDots[i].classList.add("dot-active")
}

activOrNotBtns()
nextSlide.addEventListener("click",()=>{  
    if(nextSlide.classList.contains("active-btn")){
    x+=50;
    i++
    slider.forEach(e=>{
        e.style.left= `-${x}%`;
    })   
    activOrNotBtns()
}
})
prevSlide.addEventListener("click",()=>{  
    if(prevSlide.classList.contains("active-btn")){
     x-=50;
        i--
    slider.forEach(e=>{
        e.style.left= `${-x}%`;
    })    
    activOrNotBtns()   
    }
})
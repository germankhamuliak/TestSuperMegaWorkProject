const couruselNext = document.querySelector(".carodel-next")
const couruselPrev = document.querySelector(".carodel-prev")
const couruselItem = document.querySelectorAll(".carousel-item")
const couruselBg = document.querySelectorAll(".slide_bg")

let i=2;
let x = 0;
let z= -200;
couruselNext.addEventListener("click",()=>{
    if(i<couruselItem.length-1){
     i+=1
     x-=25;
     z-=100;
     console.log(i)
    couruselItem.forEach(e=>{
        e.classList.remove("carousel-item-active")
        e.style.left= `${x}%`;
        numbersVisible()
    })   
    couruselBg.forEach(e=>{
        e.style.left= `${z}%`;
        numbersVisible()
    })   
    couruselItem[i].classList.add("carousel-item-active")
    }
})

couruselPrev.addEventListener("click",()=>{
    console.log(i)
    if(i>0){
    console.log(i)
     i-=1   
     x+=25; 
     z+=100;  
    couruselItem.forEach(e=>{
        e.classList.remove("carousel-item-active")
        couruselItem[i].classList.add("carousel-item-active")
        e.style.left= `${x}%`;
        numbersVisible()
    })
    couruselBg.forEach(e=>{
        e.style.left= `${z}%`;
        numbersVisible()
    }) }
})

const numbersVisible= ()=>{
    couruselItem.forEach((e,index)=>{
        if(index>i+1||index<i-1){
            e.style.visibility = "hidden"
        }else{
            e.style.visibility = "visible"
        }

})}
numbersVisible()
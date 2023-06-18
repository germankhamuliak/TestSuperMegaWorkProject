const cards = document.querySelectorAll('.intro__card ')

cards.forEach(e=>{
    e.addEventListener("mouseover",()=>{
        cards.forEach(ev=>{
            ev.classList.remove("active-card") 
        })
        e.classList.add("active-card")
    })
})
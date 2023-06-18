const list = document.querySelectorAll('h3+ul')
list.forEach(e=>{
   const li = e.querySelectorAll('li');
   li.forEach(e=>{
    e.addEventListener("mouseover",()=>{
        li.forEach(e=>{
            e.classList.remove("link-active")
        })  
       e.classList.add("link-active") 
    })
   })
})


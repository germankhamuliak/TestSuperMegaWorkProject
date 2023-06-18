const testBtns = document.querySelectorAll(".testBtn");
const closeTestBtns = document.querySelectorAll(".close-test");
const testWindows = document.querySelectorAll(".period-window");
const nextTestWindow = document.querySelector(".period-window .next-period-window")
const impotantInputs = document.querySelectorAll(".period-window .impotant")
const testInputs = document.querySelectorAll(".period-window input")
const burger = document.querySelector('.burger-menu')
const burgerList = document.querySelector('.burger-list ')

let i =0;

testBtns.forEach(e=>{
    e.addEventListener("click",()=>{
        testWindows.forEach(e=>{
            e.classList.remove("active-window")
        })
        i = 0;
        testWindows[i].classList.add("active-window")
        burger.classList.remove("burger-active")
            burgerList.classList.remove("burger-list-active")
    })
            

})

    nextTestWindow.addEventListener("click",()=>{ 
       let impotant=0
        impotantInputs.forEach(e=>{
            if(!e.value){
                e.classList.add("active-worng")
                impotant++
            } else {
                e.classList.remove("active-worng")
            }}
            )  
            if(impotant==0){
                i++
                windowTestCarusel()    
            }
        } )

        const windowTestCarusel = () =>{
            if(i<testWindows.length){
              testWindows.forEach(e=>{
                e.classList.remove("active-window")
            })
            testWindows[i].classList.add("active-window")  
            }
            
        }

        closeTestBtns.forEach(e=>{
            e.addEventListener("click", ()=>{
            testWindowsClose();
        })
        })

export const testWindowsClose = () =>{
     testWindows.forEach(e=>{
            e.classList.remove("active-window")
        })
        testInputs.forEach(e=>{
            e.value=""
        })

}       
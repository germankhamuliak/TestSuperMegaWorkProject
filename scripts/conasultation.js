const consultationBtn = document.querySelectorAll(".consultationBtn");
const consultationWindows = document.querySelectorAll(".consultation-window");
const nextConsultationWindow = document.querySelectorAll(".next-window");
const prevConsultationWindow = document.querySelectorAll(".prev-window");
const impotantIputs = document.querySelectorAll(".consultation-window .impotant");
const impotantIputsSecctoin = document.querySelectorAll(".consultation .consultation__form .impotant");
const impotantIputsAll = document.querySelectorAll(".impotant");
const consultationInputs = document.querySelectorAll(".consultation-window input");
const consultationRadioInputs = document.querySelectorAll(".consultation-window .radio");
const other = document.querySelector(".other");
const consultationBtn2 = document.querySelectorAll(".consultBtn");
const consultationCloseBtn = document.querySelectorAll(".close-consultation");
const modalWindow = document.querySelector(".modal");
const burger = document.querySelector('.burger-menu')
const burgerList = document.querySelector('.burger-list ')

let i;
let impotant1 = 0;
let impotant2 = 0;

const inputsCopy = () => {
  for (let j = 0; j < impotantIputs.length; j++) {
    if (impotantIputs[j].value) {
      impotantIputsSecctoin[j].value = impotantIputs[j].value;
    } else if (impotantIputsSecctoin[j].value) {
      impotantIputs[j].value = impotantIputsSecctoin[j].value;
    }
  }
};

consultationBtn.forEach((e) => {
  e.addEventListener("click", () => {
    consultationWindows.forEach((e) => {
      e.classList.remove("window-active");
    });
    i = 0;
    consultationWindows[i].classList.add("window-active");
    burger.classList.remove("burger-active")
        burgerList.classList.remove("burger-list-active")
  });
        
});

nextConsultationWindow.forEach((e) => {
  e.addEventListener("click", () => {
    impotant1 = 0;
    impotantIputs.forEach((e) => {
      if (!e.value) {
        e.classList.add("active-worng");
        impotant1 += 1;
      } else {
        e.classList.remove("active-worng");
      }
    });

    if (impotant1 == 0) {
      console.log(impotant1);
      if (i < consultationWindows.length - 1) {
        i++;
        windowConsultationCarusel();
        return;
      }
    }
  });
});

consultationBtn2.forEach((e) => {
  e.addEventListener("click", () => {
    impotant2 = 0;
    impotantIputsSecctoin.forEach((e) => {
      if (!e.value) {
        e.classList.add("active-worng");
        impotant2 += 1;
      } else {
        e.classList.remove("active-worng");
      }
    });
    if (impotant2 == 0) {
      inputsCopy();
      i = 1;
      windowConsultationCarusel();
      modalWindow.classList.add("modal-active");
    }
  });
});

prevConsultationWindow.forEach((e) => {
  e.addEventListener("click", () => {
    i--;
    windowConsultationCarusel();
  });
});

const windowConsultationCarusel = () => {
  if (i < consultationWindows.length) {
    consultationWindows.forEach((e) => {
      e.classList.remove("window-active");
    });
    consultationWindows[i].classList.add("window-active");
  }
};

export const closeConsultation = () => {
  consultationWindows.forEach((e) => {
    e.classList.remove("window-active");
  });
  consultationInputs.forEach((e) => {
    e.value = "";
  });
  impotantIputsSecctoin.forEach((e) => {
    e.value = "";
  });
  impotantIputsAll.forEach((e) => {
    e.classList.remove("active-worng");
  });
  i = 0;
};

consultationRadioInputs.forEach((e) => {
  const consultationRadioInputsBtn = e.querySelectorAll(
    ".consultation-window .radio-btn"
  );
  consultationRadioInputsBtn.forEach((e, index) => {
    e.addEventListener("click", () => {
      consultationRadioInputsBtn.forEach((ev) => {
        ev.classList.remove("radio-active");
      });
      e.classList.add("radio-active");
      if (index == 4) {
        other.classList.add("window-active");
      } else {
        other.classList.remove("window-active");
      }
    });
  });
});

consultationCloseBtn.forEach(e=>{
  e.addEventListener("click",()=>{
    closeConsultation();
  })
})
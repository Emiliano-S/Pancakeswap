
// Funzione per aumentare i numeri nella card section-prizes
let lotteryValueAmount = 130043;

/* Funzione che si occupa di convertire la variabile lotteryValueAmount in string, aggiunge la
   virgola e poi effettua il display nel sito
*/
function displayCardValues(value){
    const lotteryValue = document.getElementById("lotteryValue");
    value = String(value);
    value = value.slice(0,3) + "," + value.slice(3);

    lotteryValue.textContent = value;
}

// Funzione che si occuppa di aggiungere un range random da aumentare a lotteryValueAmount

async function changeCardValues(){
    let amountToChange = Math.round((Math.random() + 1) * 10);

    for(let i = 0; i < amountToChange; i++){
        let numberChanger = await promiseChangeCardValue();
        displayCardValues(numberChanger);
    }
}

function promiseChangeCardValue(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            lotteryValueAmount += 1;
            resolve(lotteryValueAmount);
        },100);
    })
}

setInterval(changeCardValues,30000);
window.addEventListener("DOMContentLoaded", displayCardValues(lotteryValueAmount));

function countdown(){
    let now = new Date();
    let eventDate = new Date(2023, 11, 25);

    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTiime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}

countdown();


let slideIndex = 0;
showSlides();

let timer = setTimeout(showSlides, 5000);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner-container");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex - 1].classList.remove("hide");
//   dots[slideIndex - 1].className += " active";
}


document.getElementById('btnBannerR').addEventListener('click', ()=>{
    const banner02 = document.getElementById('banner02');
    const banner01 = document.getElementById('banner01');

    if(banner02.classList.contains('hide')){
      banner02.classList.remove('hide');
      banner01.classList.add('hide');
      clearTimeout(timer);
      setInterval(()=>{
        timer = setTimeout(showSlides, 5000);
      }, 5000)
    }
})

document.getElementById('btnBannerL').addEventListener('click', ()=>{
  const banner02 = document.getElementById('banner02');
  const banner01 = document.getElementById('banner01');

  if(banner01.classList.contains('hide')){
    banner01.classList.remove('hide');
    banner02.classList.add('hide');
    clearTimeout(timer);
    setInterval(()=>{
      timer = setTimeout(showSlides, 5000);
    }, 5000)
  }
})

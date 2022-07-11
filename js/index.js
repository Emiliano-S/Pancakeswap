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

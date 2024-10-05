let img = document.querySelectorAll(".home-page .image-slider img");
let indexImage = 0;
setInterval(() => {
  if (indexImage > img.length -1) {
    indexImage = 0;
  }
    document.querySelector(".image-slider img.active").classList.remove("active");
    img[indexImage].classList.add("active");
    indexImage++;
}, 3000);

let groomInfo = document.querySelector('.infor-click button:nth-child(1)')
let brideInfo = document.querySelector('.infor-click button:nth-child(2)')
groomInfo.addEventListener('click', ()=>{
  document.querySelector('.each-info .active').classList.remove('active')
  document.querySelector('.each-info .groom-content-info').classList.add('active')
})

brideInfo.addEventListener('click', ()=>{
  document.querySelector('.each-info .active').classList.remove('active')
  document.querySelector('.each-info .bride-content-info').classList.add('active')
})

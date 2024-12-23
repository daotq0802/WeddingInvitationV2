let img = document.querySelectorAll(".home-page .image-slider img");
let indexImage = 0;
setInterval(() => {
    if (indexImage > img.length - 1) {
        indexImage = 0;
    }
    document
        .querySelector(".image-slider img.active")
        .classList.remove("active");
    img[indexImage].classList.add("active");
    indexImage++;
}, 3000);

let groomInfo = document.querySelector(".infor-click button:nth-child(1)");
let brideInfo = document.querySelector(".infor-click button:nth-child(2)");
groomInfo.addEventListener("click", () => {
    document.querySelector(".each-info .active").classList.remove("active");
    document
        .querySelector(".each-info .groom-content-info")
        .classList.add("active");
});

brideInfo.addEventListener("click", () => {
    document.querySelector(".each-info .active").classList.remove("active");
    document
        .querySelector(".each-info .bride-content-info")
        .classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
    new FlipDown(1735092000, "bride-countdown").start().ifEnded(() => {
        document
            .querySelector(".timer .change-location .active")
            .classList.remove("active");
        document.querySelector(".change-location").style.display = "none";
        document.querySelector(".bride-timer").classList.remove("active");
        document.querySelector("#groom-time").classList.add("active");
        document.querySelector(".groom-timer").classList.add("active");
        document.querySelector(".flipdown").innerHTML = `<h2>Timer End</h2>`;
    });
    new FlipDown(1736042400, "groom-countdown").start().ifEnded(() => {
        document.querySelector(".flipdown").innerHTML = `<h2>Timer End</h2>`;
    });
});

let brideTime = document.getElementById("bride-time");
let groomTime = document.getElementById("groom-time");
brideTime.addEventListener("click", () => {
    document
        .querySelector(".timer .change-location .active")
        .classList.remove("active");
    document.querySelector(".groom-timer").classList.remove("active");
    document.querySelector("#bride-time").classList.add("active");
    document.querySelector(".bride-timer").classList.add("active");
});
groomTime.addEventListener("click", () => {
    document
        .querySelector(".timer .change-location .active")
        .classList.remove("active");
    document.querySelector(".bride-timer").classList.remove("active");
    document.querySelector("#groom-time").classList.add("active");
    document.querySelector(".groom-timer").classList.add("active");
});
window.onload = function () {
    let originalTitle = document.title;

    setInterval(function () {
        document.title =
            document.title === originalTitle
                ? "We Are Getting Married!"
                : originalTitle;
    }, 3000);
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

function goToTop() {
    window.scrollTo(0, 0);
}

document.querySelector(".nav-toggle").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("active");
});

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav_link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        if (link.href.includes(current)) {
            document.querySelector("ul li a.active").classList.remove("active");
            link.classList.add("active");
        }
    });
});

let acceptRadio = document.getElementById('accepts')
let declineRadio = document.getElementById('decline')
acceptRadio.addEventListener('change', ()=>{
  document.querySelector('.guestFrag').style.display = 'flex'
  document.querySelector('.gift-page').classList.remove('active')
})
declineRadio.addEventListener('change', ()=>{
  document.querySelector('.guestFrag').style.display = 'none'
})

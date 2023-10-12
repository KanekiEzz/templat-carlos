// ---------------- preloader -------------------- //

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// ---------------- back to top button -------------------- //

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let porogressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue =  Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#f7dac2 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload =  calcScrollValue;


// menu toggle
let toggle = document.querySelector(".toggle");
let navour = document.querySelector(".navour");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navour.classList.toggle("actived");
    main.classList.toggle("actived");
};
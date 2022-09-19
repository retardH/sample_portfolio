const navbar = document.querySelector(".navbar");
const up = document.querySelector("#up");
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".toggle i");

window.onscroll = () => {
    if(window.scrollY >= 450) {
        navbar.classList.add("fixed", "animate__fadeInDown");
        
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("animate__fadeInDown");
    }

    if(window.scrollY >= 800) {
        up.style.opacity = 1;
    } else {
        up.style.opacity = 0;
    }
}


up.onclick = () => {
    window.scrollTo(0,0);
}

toggle.onclick = () => {
    navMenu.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
}




































                                



















const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggelDesktopMenu);

function toggelDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}


const menuHambu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuHambu.addEventListener("click", toggelMobileMenu);

function toggelMobileMenu(){
    mobileMenu.classList.toggle("inactive")
}
let smallMenu = document.getElementById("smallMenu");
let bigMenu = document.querySelector("#bigMenu");
let cover = document.querySelector(".cover");
let menu = document.querySelector(".menu");
let largeMenu = document.querySelector(".big-menu");

let isMenuOpen = false;

smallMenu.addEventListener("click", ()=> {
    if (!isMenuOpen) {
        cover.classList.add("show-cover");
        menu.style.width = "300px";
        isMenuOpen = !isMenuOpen;
    } else {
        cover.classList.remove("show-cover");
        menu.style.width = "0px";
        isMenuOpen = !isMenuOpen;
    }
}, false);

bigMenu.addEventListener("click", ()=> {
    if (!isMenuOpen) {
        cover.classList.add("show-cover");
        largeMenu.style.width = "300px";
        isMenuOpen = !isMenuOpen;
    } else {
        cover.classList.remove("show-cover");
        largeMenu.style.width = "0px";
        isMenuOpen = !isMenuOpen;
    }
}, false);

cover.addEventListener("click", () => {
    cover.classList.remove("show-cover");
    menu.style.width = "0px";
    largeMenu.style.width = "0px";
    isMenuOpen = false;
}, false);
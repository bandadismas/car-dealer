let smallMenu = document.getElementById("smallMenu");
let cover = document.querySelector(".cover");
let isMenuOpen = false;

smallMenu.addEventListener("click", ()=> {
    if (!isMenuOpen) {
        cover.classList.add("show-cover");
        isMenuOpen = !isMenuOpen;
    } else {
        cover.classList.remove("show-cover");
        isMenuOpen = !isMenuOpen;
    }
}, false);

cover.addEventListener("click", () => {
    cover.classList.remove("show-cover");
    isMenuOpen = false;
}, false);
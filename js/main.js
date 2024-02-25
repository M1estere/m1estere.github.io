const navBar = document.getElementById("navbar");

addEventListener("scroll", changeHeader);

function changeHeader() {
    if (window.scrollY > 20) {
        navBar.classList.add("navbar-active");
    } else if (window.scrollY <= 20) {
        navBar.classList.remove("navbar-active");
    }
}
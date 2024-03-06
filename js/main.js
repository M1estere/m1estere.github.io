const navBar = document.getElementById("navbar");

addEventListener("scroll", changeHeader);

function changeHeader() {
    if (window.scrollY > 20) {
        navBar.classList.add("navbar-active");
    } else if (window.scrollY <= 20) {
        navBar.classList.remove("navbar-active");
    }
}

const startButtons = document.querySelectorAll(".start-button");
for (let i = 0; i < startButtons.length; i++) {
    const button = startButtons[i];

    button.addEventListener('mouseenter', function (e) {
        var parentOffset = button.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;

        console.log(relX, relY);

        button.querySelector('.circle-fill').style.top = relY + 'px';
        button.querySelector('.circle-fill').style.left = relX + 'px';
    });

    button.addEventListener('mouseout', function (e) {
        var parentOffset = button.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;

        button.querySelector('.circle-fill').style.top = relY + 'px';
        button.querySelector('.circle-fill').style.left = relX + 'px';
    });
}
// get the element to animate
var element = document.getElementById('info-text');
var elementHeight = element.clientHeight;

var newElement = document.getElementById('projects');
var newElementHeight = newElement.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animateText);

// check if element is in view
/*function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    var newElementPosition = newElement.getBoundingClientRect().top + scrollY + newElementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition + 300 > elementPosition && scrollPosition < newElementPosition - 300) {
        return true;
    }

    return false;
}*/

// animate element when it is in view
function animateText() {
    element.classList.add('animate-info-text');
}
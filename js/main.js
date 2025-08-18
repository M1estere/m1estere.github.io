window.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".hero .infinite-carousel, .support-hero .infinite-carousel");

    const directions = [
        "normal", "reverse", "normal", "reverse", "normal", "reverse"
    ];

    const speeds = [
        35, 50, 30, 42, 35, 53
    ];

    carousels.forEach((carousel, i) => {
        const carouselInner = carousel.querySelector(".hero .infinite-carousel div, .support-hero .infinite-carousel div");
        const carouselContent = Array.from(carouselInner.children);

        carouselContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            carouselInner.appendChild(duplicatedItem);
        });

        carouselInner.style.animation = `move ${speeds[i]}s linear infinite ${directions[i]}`
    });

    const beautyCarousels = document.querySelectorAll(".beauty-hero .infinite-carousel");
    const beatyDirections = [
        "normal", "reverse", "normal"
    ];
    const beautySpeeds = [
        20, 24, 28
    ];

    beautyCarousels.forEach((carousel, i) => {
        const carouselInner = carousel.querySelector(".beauty-hero .infinite-carousel div");
        const carouselContent = Array.from(carouselInner.children);
        carouselContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            carouselInner.appendChild(duplicatedItem);
        });

        carouselInner.style.animation = `move ${beautySpeeds[i]}s linear infinite ${beatyDirections[i]}`
    });
});

function updateProgress() {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercentage = (scrollTop / windowHeight) * 100;

    document.getElementById('progress').style.width = progressPercentage + '%';

    const imageContainer = document.getElementById('imageContainer');
    const progressBarWidth = window.innerWidth;
    const imageWidth = 30;
    const imagePosition = (progressPercentage / 100) * (progressBarWidth - imageWidth) - 15;
    imageContainer.style.left = imagePosition + 'px';
}

function scrollToPosition(event) {
    const progressBar = document.getElementById('progressBar');
    const progressBarWidth = progressBar.offsetWidth;
    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const progressPercentage = (clickX / progressBarWidth) * 100;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = (progressPercentage / 100) * scrollHeight;
    window.scrollTo({ top: scrollTo, behavior: 'smooth' });

    updateProgress();
}

window.addEventListener('scroll', updateProgress);

let maxHearts = 20;
let heartsCount = 0;

function createHeart() {
    if (heartsCount >= maxHearts) {
        return;
    }

    const heart = document.createElement('div');
    heart.className = 'heart';
    let value = Math.random() * 15 + 47;
    heart.style.width = value + 'px';
    heart.style.height = value + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';

    document.getElementById('lovely').appendChild(heart);
    heartsCount++;

    heart.addEventListener('animationend', () => {
        heart.remove();
        heartsCount--;
    });
}

setInterval(createHeart, 800);

const section = document.querySelector('#beauty');
const emojiContainer = section.querySelector('.emoji-container');

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = '😍';

    const sectionRect = section.getBoundingClientRect();

    const top = Math.random() * section.offsetHeight;
    const left = Math.random() * section.offsetWidth;

    emoji.style.top = `${top}px`;
    emoji.style.left = `${left}px`;

    emojiContainer.appendChild(emoji);
    setTimeout(() => {
        emoji.remove();
    }, 3000);
}

setInterval(createEmoji, 300);


function scrollToNextSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
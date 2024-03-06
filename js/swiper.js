const data = [
    {
        image: 'assets/img/projects/AniScape.png',
        title: 'AniScape',
        desc: 'A mobile app is for anime fans to explore and watch their favorite shows',
        tools: 'Flutter, Dart',
        status: 'In Development',
    },
    {
        image: 'assets/img/projects/Racing_Drift_2.png',
        title: 'Racing Drift 2',
        desc: 'An exciting 3D racing game, continuation of Racing Drift game',
        tools: 'Unity, C#',
        status: 'Released',
    },
    {
        image: 'assets/img/projects/Byte_Bound.png',
        title: 'Byte Bound',
        desc: 'A game that allows players to play as electric AI',
        tools: 'Unity, C#',
        status: 'Released',
    },
    {
        image: 'assets/img/projects/Ink_Dreams.png',
        title: 'Ink Dreams',
        desc: 'A mobile app for reading and managing manga books',
        tools: 'Flutter, Dart',
        status: 'Released',
    },
    {
        image: 'assets/img/projects/Down_The_Deep.png',
        title: 'Down The Deep',
        desc: 'A game where players can feel as an underwater explorers',
        tools: 'Unity, C#',
        status: 'Released',
    },
    {
        image: 'assets/img/projects/The_Darkest_Night.png',
        title: 'The Darkest Night',
        desc: 'A top-down challenging action game',
        tools: 'Unity, C#',
        status: 'Released',
    },
    {
        image: 'assets/img/projects/Tune_Studio.png',
        title: 'Tune Studio',
        desc: 'A mobile music service app with a cool style',
        tools: 'Android Studio, Java',
        status: 'Released',
    },
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

for (let index = 0; index < data.length; index++) {
    const swiperBlock = document.createElement('div');
    swiperBlock.classList.add('swiper-slide');

    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-slide-wrapper');
    wrapper.style.backgroundImage = `url(${data[index].image})`;

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');
    mainDiv.style.backgroundImage = 'linear-gradient(180deg, #00000000 0%, #000000 95%)';

    const mainDivText = document.createElement('span');
    mainDivText.textContent = data[index].title;
    mainDiv.appendChild(mainDivText);

    const hoverDiv = document.createElement('div');
    hoverDiv.classList.add('hover-div');

    const hoverDivTitle = document.createElement('span');
    hoverDivTitle.classList.add('title');
    hoverDivTitle.textContent = data[index].title;

    const hoverDivTools = document.createElement('span');
    hoverDivTools.classList.add('tools');
    hoverDivTools.textContent = data[index].tools;
    
    hoverDiv.appendChild(hoverDivTitle);
    hoverDiv.appendChild(hoverDivTools);

    wrapper.appendChild(mainDiv);
    wrapper.appendChild(hoverDiv);

    swiperBlock.appendChild(wrapper);

    swiperWrapper.appendChild(swiperBlock);
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    freeMode: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
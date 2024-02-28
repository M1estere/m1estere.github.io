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
];

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
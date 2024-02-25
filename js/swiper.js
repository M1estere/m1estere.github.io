const data = [
    {
        image: 'assets/picture.jpg',
        title: 'Racing Drift 2',
        desc: 'A 3D racing game, continuation of Racing Drift game',
        tools: 'Unity, C#',
    },
    {
        image: 'assets/picture.jpg',
        title: 'Racing Drift 2',
        desc: 'A 3D racing game, continuation of Racing Drift game',
        tools: 'Unity, C#',
    },
    {
        image: 'assets/picture.jpg',
        title: 'Racing Drift 2',
        desc: 'A 3D racing game, continuation of Racing Drift game',
        tools: 'Unity, C#',
    },
    {
        image: 'assets/picture.jpg',
        title: 'Racing Drift 2',
        desc: 'A 3D racing game, continuation of Racing Drift game',
        tools: 'Unity, C#',
    },
    {
        image: 'assets/picture.jpg',
        title: 'Racing Drift 2',
        desc: 'A 3D racing game, continuation of Racing Drift game',
        tools: 'Unity, C#',
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
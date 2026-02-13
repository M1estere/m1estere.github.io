(function () {
    function initCarousels() {
        const carousels = document.querySelectorAll(".infinite-carousel");
        const speeds = [40, 56, 64, 50, 44, 70, 60, 52, 48, 76];
        const directions = ["normal", "reverse", "normal", "reverse", "normal", "reverse", "normal", "reverse", "normal", "reverse"];

        carousels.forEach((carousel, index) => {
            if (index < speeds.length) {
                const carouselInner = carousel.querySelector(".carousel-inner");

                if (carouselInner) {
                    const items = Array.from(carouselInner.children);
                    for (let cloneCount = 0; cloneCount < 3; cloneCount++) {
                        items.forEach(item => {
                            const clone = item.cloneNode(true);
                            carouselInner.appendChild(clone);
                        });
                    }
                    carouselInner.style.animation = `moveUp ${speeds[index]}s linear infinite ${directions[index]}`;
                }
            }
        });
    }

    function initButtonsLogic() {
        const btnYes = document.getElementById('btnYes');
        const btnNo = document.getElementById('btnNo');
        const card = document.getElementById('valentineCard');
        const mainGif = document.getElementById('mainGif');
        const questionText = document.getElementById('questionText');

        const newGifUrl = "https://media1.tenor.com/m/nh4tzup-bhIAAAAd/monkey-monkey-dancing.gif";
        const preloadGif = new Image();
        preloadGif.src = newGifUrl;

        btnNo.addEventListener('click', function () {
            alert('Охенела?');
            btnNo.classList.add('hidden');
        });

        btnYes.addEventListener('click', function () {
            mainGif.style.opacity = '0';
            
            questionText.innerHTML = "Ураааа<br>Тебе крупно повезло!";
            btnYes.style.display = 'none';
            btnNo.style.display = 'none';
            
            card.classList.add('celebrate');

            if (preloadGif.complete) {
                mainGif.src = newGifUrl;
                mainGif.alt = "Праздничная гифка";
                mainGif.style.opacity = '1';
            } else {
                mainGif.src = '';
                mainGif.style.backgroundColor = '#ffe0e7';
                
                preloadGif.onload = function() {
                    mainGif.src = newGifUrl;
                    mainGif.alt = "Праздничная гифка";
                    mainGif.style.opacity = '1';
                };
            }

            startConfettiBurst();
        });

        function startConfettiBurst() {
            const colors = [
                '#ff1a4c', '#ff4d6d', '#ff8c00', '#ffd700',
                '#ff1493', '#00ff00', '#00ffff', '#ff00ff',
                '#ff4500', '#ff6b6b', '#4ecdc4', '#ffe66d',
                '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'
            ];

            const cardRect = card.getBoundingClientRect();
            const leftSide = cardRect.left;
            const rightSide = cardRect.right;

            for (let i = 0; i < 100; i++) {
                createConfettiPiece(i);
            }

            function createConfettiPiece(index) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';

                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                const size = Math.random() * 14 + 8;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';

                const shape = Math.random();
                if (shape < 0.4) {
                    confetti.style.borderRadius = '50%';
                } else if (shape < 0.7) {
                    confetti.style.transform = 'rotate(45deg)';
                } else {
                    confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                    confetti.style.width = size * 1.2 + 'px';
                    confetti.style.height = size * 1.2 + 'px';
                }

                const side = Math.random() < 0.5 ? 'left' : 'right';
                let startX, startY;

                if (side === 'left') {
                    startX = leftSide - 15 + (Math.random() * 30);
                    startY = cardRect.top + (Math.random() * cardRect.height);
                } else {
                    startX = rightSide - 15 + (Math.random() * 30);
                    startY = cardRect.top + (Math.random() * cardRect.height);
                }

                confetti.style.left = startX + 'px';
                confetti.style.top = startY + 'px';

                document.body.appendChild(confetti);

                let angleX, speed, rotationSpeed;

                if (side === 'left') {
                    angleX = -0.8 + (Math.random() * 0.5);
                    speed = Math.random() * 4 + 3;
                } else {
                    angleX = 0.3 + (Math.random() * 0.5);
                    speed = Math.random() * 4 + 3;
                }

                let verticalSpeed = Math.random() * 2 + 2;
                rotationSpeed = (Math.random() - 0.5) * 15;

                let posX = parseFloat(confetti.style.left);
                let posY = parseFloat(confetti.style.top);
                let rotation = Math.random() * 360;
                let gravity = 0.05;

                function fall() {
                    if (!confetti.parentNode) return;

                    posX += angleX * 9;
                    verticalSpeed += gravity;
                    posY += verticalSpeed;
                    rotation += rotationSpeed;

                    confetti.style.left = posX + 'px';
                    confetti.style.top = posY + 'px';
                    confetti.style.transform = `rotate(${rotation}deg)`;

                    if (posY > window.innerHeight + 200 || posX < -200 || posX > window.innerWidth + 200) {
                        confetti.remove();
                    } else {
                        requestAnimationFrame(fall);
                    }
                }

                requestAnimationFrame(fall);

                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.remove();
                    }
                }, 7000);
            }
        }
    }

    initCarousels();
    initButtonsLogic();
})();
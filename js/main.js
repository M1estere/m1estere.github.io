$(document).ready(function() {
    let dino = $('#dino');
    let jumpHeight = 100;

    let obstacleWidth = 50;

    let score = 0;
    let gameActive = false;

    let obstacleInterval;
    let obstacles = []; 

    $('#startButton').click(function () {
        $('#gameStart').hide();

        gameActive = true;
        obstacleInterval = setInterval(generateObstacle, 2000);
    });

    function updateScore() {
        $('#scoreValue').text(score);
    }

    $(document).keydown(function(e) {
        if (e.key === " " && gameActive) {
            dino.animate({ bottom: jumpHeight }, 430)
                .animate({ bottom: 0 }, 430);
        }
    });

    function generateObstacle() {
        let obstacle = $('<div class="obstacle"></div>');
        obstacle.css({
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: obstacleWidth,
            height: Math.random() * 50 + 30 + 'px',
            backgroundColor: 'red'
        });
        $('#obstacles').append(obstacle);
        obstacles.push(obstacle);

        obstacle.animate({ left: -obstacleWidth }, {
            duration: 3000,
            easing: 'linear',
            complete: function() {
                if (gameActive) {
                    score++;
                    updateScore();
                }

                $(this).remove();
                obstacles = obstacles.filter(o => o[0] !== this);
            }
        });

        checkCollision(obstacle);
    }

    function checkCollision(obstacle) {
        let obstacleInterval = setInterval(function() {
            if (!gameActive) {
                clearInterval(obstacleInterval);
                return;
            }

            let dinoPosition = dino.position();
            let dinoWidth = dino.width();
            let dinoHeight = dino.height();

            let obstaclePosition = obstacle.position();
            let obstacleWidth = obstacle.width();
            let obstacleHeight = obstacle.height();

            if (
                dinoPosition.left < obstaclePosition.left + obstacleWidth &&
                dinoPosition.left + dinoWidth > obstaclePosition.left &&
                dinoPosition.top < obstaclePosition.top + obstacleHeight &&
                dinoPosition.top + dinoHeight > obstaclePosition.top
            ) {
                clearInterval(obstacleInterval);
                gameOver();
            }
        }, 100);
    }

    function gameOver() {
        gameActive = false;
        clearInterval(obstacleInterval);
        
        obstacles.forEach(obstacle => {
            obstacle.stop();
        });

        dino.stop();
        dino.css({ bottom: dino.position().bottom });

        $('#gameOver').show();
    }

    $('#restartButton').click(function() {
        location.reload();
    });
});

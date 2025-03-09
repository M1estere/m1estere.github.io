$(document).ready(function() {
    let dino = $('#dino');
    let jumpHeight = 130;

    let score = 0;
    let lives = 3;
    let gameActive = false;

    let obstacleWidth = 50;
    let itemWidth = 30;
    let obstacles = [];
    let items = [];
    let maxObstacles = 10;
    let obstacleInterval;
    let itemInterval;

    // $('#audio')[0].stop();
    $('#score').hide();
    $('#lives').hide();
    $('#startButton').click(function () {
        $('#gameStart').hide();
        $('#score').show();
        $('#lives').show();
        $('#audio')[0].play();

        gameActive = true;
        score = 0;
        lives = 3;
        obstacles = [];
        items = [];

        obstacleInterval = setInterval(generateObstacle, 2000);
        itemInterval = setInterval(generateItem, 3000);

        $('.container').css('animation-play-state', 'running');
        updateLives();
        updateScore();
    });

    function updateScore() {
        $('#scoreValue').text(score);
    }

    function updateLives() {
        $('#lives .life').removeClass('inactive');
    
        for (let i = 0; i < lives; i++) {
            $('#life' + (i + 1)).addClass('active');
        }
    
        for (let i = lives; i < 3; i++) {
            $('#life' + (3 - i + 1)).addClass('inactive');
        }
    }

    $(document).keydown(function(e) {
        if (e.key === " " && gameActive) {
            dino.animate({ bottom: jumpHeight }, 430)
                .animate({ bottom: 0 }, 430);
        }
    });

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function generateObstacle() {
        if (score >= maxObstacles) {
            gameOver(true);
            return;
        }

        let multiplier = getRandomNumber(.65, 1.2);
        let obstacle = $('<div class="obstacle"></div>');
        obstacle.css({
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 60 * multiplier,
            height: 70 * multiplier
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

    function generateItem() {
        if (lives >= 3) return;

        let item = $('<div class="item"></div>');
        item.css({
            position: 'absolute',
            right: 0,
            bottom: Math.random() * 50 + 40 + 'px'
        });
        $('#items').append(item);
        items.push(item);

        item.animate({ left: -itemWidth }, {
            duration: 3000,
            easing: 'linear',
            complete: function() {
                $(this).remove();
                items = items.filter(i => i[0] !== this);
            }
        });

        checkItemCollision(item);
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
                lives--;
                obstacle.remove();
                obstacle.stop();
                updateLives();
                if (lives <= 0) {
                    gameOver(false);
                }
            }
        }, 100);
    }

    function checkItemCollision(item) {
        let itemInterval = setInterval(function() {
            if (!gameActive) {
                clearInterval(itemInterval);
                return;
            }

            let dinoPosition = dino.position();
            let dinoWidth = dino.width();
            let dinoHeight = dino.height();

            let itemPosition = item.position();
            let itemWidth = item.width();
            let itemHeight = item.height();

            if (
                dinoPosition.left < itemPosition.left + itemWidth &&
                dinoPosition.left + dinoWidth > itemPosition.left &&
                dinoPosition.top < itemPosition.top + itemHeight &&
                dinoPosition.top + dinoHeight > itemPosition.top
            ) {
                clearInterval(itemInterval);
                if (lives < 3) {
                    lives++;
                    updateLives();
                }
                item.remove();
            }
        }, 100);
    }

    function gameOver(won) {
        gameActive = false;
        clearInterval(obstacleInterval);
        clearInterval(itemInterval);

        obstacles.forEach(obstacle => {
            obstacle.stop();
        });

        items.forEach(item => {
            item.stop();
        });

        dino.stop();
        dino.css({ bottom: dino.position().bottom });

        $('#gameOver').show();
        if (won) {
            $('#gameOver h1').addClass('win');
            $('#gameOver h1').html("You won!<br/> <a href='https://mmm.page/i-love-steve'>Developers</a><br/>");
            $('#gameOver h1').css('animation-play-state', 'running');
        } else {
            $('#gameOver h1').text("Game Over");
        }

        $('.container').css('animation-play-state', 'paused');
    }

    $('#restartButton').click(function() {
        location.reload();
    });
});

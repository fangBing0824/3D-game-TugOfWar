window.addEventListener('DOMContentLoaded', function() {

    let t = 60;
    let timeDisplay = document.getElementById('time-display');
    let gameOver = false;
    let timeoutId; // declare this

    function endGame(message) {
        gameOver = true;
        alert(message);
    }

    // Timer function
    function countdown() {
        if (gameOver) return;

        if (timeDisplay) {
            timeDisplay.textContent = `Time: ${t}`;
        }

        t--;

        if (t < 0) {
            endGame("TIME'S UP! GAME OVER!");
            return;
        }

        timeoutId = setTimeout(countdown, 1000);
    }

    countdown();

    
});
window.addEventListener('DOMContentLoaded', function() {

    let t = 60;
    let timeDisplay = document.getElementById('time-display');
    let numberDisplay = document.getElementById('number-display');

    let rope = this.document.getElementById('rope');
    let camera = document.querySelector('a-camera');

    let ropePosition = -12; 
    let cameraPositionZ = 0; 

    let gameOver = false;
    let timeoutId; 

    let currentNumber = null;


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
// random numbers
    function number(){
        if (gameOver) return;

        currentNumber = Math.floor(Math.random() * 9) + 1;

        numberDisplay.textContent = "Press: " + currentNumber;
    }

    number();

     document.addEventListener("keydown", function (event) {
        if (gameOver) return;

        let playerInput = parseInt(event.key);

        if (playerInput === currentNumber) {
           
            ropePosition += 2;  
            cameraPositionZ += 0.3; 
        } else {
           
            ropePosition -=2;
            cameraPositionZ -= 0.3;
        }

       
        rope.setAttribute("position", `0 1.6 ${ropePosition}`);
        camera.setAttribute("position", `0 1.6 ${cameraPositionZ}`);

        if (cameraPositionZ <= -17) endGame("YOU LOSE!");
        if (ropePosition >= 0) endGame("YOU WIN!");
       
        number();
    });

     function autoPull() {
        if (gameOver) return;

        ropePosition -= 1.0; 
        cameraPositionZ -= 1.0;

        rope.setAttribute("position", `0 1.6 ${ropePosition}`);
        camera.setAttribute("position", `0 1.6 ${cameraPositionZ}`);

        if (cameraPositionZ <= -17) endGame("YOU LOSE!");
        if (ropePosition >= -5) endGame("YOU WIN!");
       
       
    }

    setInterval(autoPull, 2000); 
    

});
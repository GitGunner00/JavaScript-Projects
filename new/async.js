// Function to handle the countdown
function countdown() {
    const secondsInput = document.getElementById('seconds');
    const timerDisplay = document.getElementById('timer');

    let seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
        timerDisplay.textContent = 'Please enter a valid number of seconds.';
        return;
    }

    timerDisplay.textContent = `${seconds} seconds remaining`;

    const interval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            timerDisplay.textContent = `${seconds} seconds remaining`;
        } else {
            timerDisplay.textContent = 'Time is up!';
            clearInterval(interval);
        }
    }, 1000);
}

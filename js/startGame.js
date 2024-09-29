export function setUpStartButton() {
    const startButton = document.getElementById('start_button')
    startButton.addEventListener('click', () => {
        window.location.href = 'game.html';
    })
}

setUpStartButton();
import { spaceFacts } from "./questionsData.js";
import { setUpStartButton } from "./startGame.js";

function displayCard(fact) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="front">{fact.question}</div>
        <div class="back>{fact.answer}</div> 
    `;
    return card
}

if (document.querySelector('.card-container')) {
    const container = document.querySelector('.card-container');
    spaceFacts.forEach(fact => container.appendChild(displayCard(fact)))
}




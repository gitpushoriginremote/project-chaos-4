const entropyPool = [
    "Database migration on a Friday night",
    "Mandatory team bonding: Extreme Ironing",
    "Swap production and staging keys",
    "Refactor the entire auth logic in 15 minutes",
    "Delete the CSS file and pray"
];

const board = document.getElementById('task-board');
const trigger = document.getElementById('chaos-trigger');

function generateChaos() {
    const randomIndex = Math.floor(Math.random() * (entropyPool.length + 1)); // BUG: This can result in an index that returns undefined
    const task = entropyPool[randomIndex];
    
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>URGENT</h3><p>${task}</p>`;
    
    board.appendChild(card);
}

// TODO: The trigger button isn't actually calling generateChaos yet.
// trigger.addEventListener('click', ...);
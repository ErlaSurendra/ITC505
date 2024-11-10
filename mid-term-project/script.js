// Define the story structure
const storyStages = {
    start: {
        text: "You find yourself at a fork in the road. Do you go left or right?",
        choices: [
            { text: "Go left", consequence: "leftPath" },
            { text: "Go right", consequence: "rightPath" }
        ],
        image: "images/start.jpg"
    },
    leftPath: {
        text: "You encounter a river. Do you swim across or walk along the bank?",
        choices: [
            { text: "Swim across", consequence: "swimEnd" },
            { text: "Walk along the bank", consequence: "bankEnd" }
        ],
        image: "images/river.jpg"
    },
    rightPath: {
        text: "You enter a dark forest. Do you venture deeper or turn back?",
        choices: [
            { text: "Venture deeper", consequence: "forestEnd" },
            { text: "Turn back", consequence: "start" }
        ],
        image: "images/forest.jpg"
    },
    swimEnd: {
        text: "You manage to cross the river but reach a dead end. Ending 1.",
        choices: [],
        image: "images/swim.jpg"
    },
    bankEnd: {
        text: "You find a safe path and reach a village. Ending 2.",
        choices: [],
        image: "images/village.jpg"
    },
    forestEnd: {
        text: "You discover a hidden treasure in the forest. Ending 3.",
        choices: [],
        image: "images/treasure.jpg"
    }
};

// Game State
let currentStage = 'start';

// Initialize game
function startGame() {
    currentStage = 'start';
    updatePage();
}

// Update the story and choices based on the current stage
function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById('story').innerText = stage.text;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';  // Clear previous choices

    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentStage = choice.consequence;
            updatePage();
        };
        choicesDiv.appendChild(button);
    });

    // Update image based on current stage
    const img = document.getElementById('story-image');
    img.src = stage.image;
}

// End the game
function endGame() {
    const stage = storyStages[currentStage];
    document.getElementById('story').innerText = stage.text;
    document.getElementById('choices').innerHTML = '';
}

// Start the game when the page loads
window.onload = startGame;

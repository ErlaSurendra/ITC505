// Story data with each stage as an object
const story = {
    start: {
        text: "You are a cow grazing near the forest and hear a rustling sound. Do you investigate or ignore it?",
        choices: ["Investigate the sound", "Ignore it"],
        consequence: ["investigate", "ignore"],
        image: "start.jpg"
    },
    ignore: {
        text: "You decide to ignore the sound and continue grazing. The day passes peacefully, and you feel content. The adventure ends here.",
        choices: [],
        consequence: [],
        image: "mid-term-project/images/end.jpg"
    },
    investigate: {
        text: "You move closer and encounter a tiger! Do you try to run away or attempt to befriend the tiger?",
        choices: ["Run away", "Befriend the tiger"],
        consequence: ["runAway", "befriend"],
        image: "mid-term-project/images/tiger.jpg"
    },
    runAway: {
        text: "You start running away from the tiger. You see a bush and a river ahead. Do you hide in the bushes or try to cross the river?",
        choices: ["Hide in bushes", "Cross the river"],
        consequence: ["hideInBushes", "crossRiver"],
        image: "mid-term-project/images/runAway.jpg"
    },
    befriend: {
        text: "You try to befriend the tiger. Surprisingly, the tiger seems friendly! Do you offer it some grass or ask it to explore with you?",
        choices: ["Offer grass", "Explore together"],
        consequence: ["offerGrass", "exploreTogether"],
        image: "mid-term-project/images/befriend.jpg"
    },
    hideInBushes: {
        text: "You hide in the bushes, holding your breath. The tiger walks past, and you manage to escape safely. The adventure ends here.",
        choices: [],
        consequence: [],
        image: "mid-term-project/images/hide.jpg"
    },
    crossRiver: {
        text: "You attempt to cross the river, but the current is strong. Do you swim harder or call for help?",
        choices: ["Swim harder", "Call for help"],
        consequence: ["swimHarder", "callForHelp"],
        image: "mid-term-project/images/river.jpg"
    },
    offerGrass: {
        text: "The tiger sniffs the grass and seems unimpressed. It decides to leave, and you go back to grazing. The adventure ends here.",
        choices: [],
        consequence: [],
        image: "mid-term-project/images/grass.jpg"
    },
    exploreTogether: {
        text: "You and the tiger explore the forest together. You feel a sense of adventure and make a new friend! The adventure ends here.",
        choices: [],
        consequence: [],
        image: "mid-term-project/images/explore.jpg"
    },
    swimHarder: {
        text: "You try to swim harder, but the current pulls you under. You struggle and eventually find yourself washed up on the shore, exhausted. The adventure ends here.",
        choices: [],
        consequence: [],
        image: "mid-term-project/images/swim.jpg"
    },
    callForHelp: {
        text: "You call for help, and a kind fisherman hears you. He rescues you from the river and takes you back to safety. The adventure ends here.",
        choices: [],
        consequence: [],
        image: "mid-term-project/images/fisherman.jpg"
    }
};

let currentStage;

function startGame() {
    currentStage = "start";
    updatePage();
}
function updatePage() {
    const stage = story[currentStage];
    
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;
    
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";  // Clear previous choices
    
    stage.choices.forEach((choiceText, index) => {
        const button = document.createElement("button");
        button.textContent = choiceText;
        button.addEventListener("click", () => {
            currentStage = stage.consequence[index];
            updatePage();
        });
        choicesContainer.appendChild(button);
    });
}
function endGame() {
    const stage = story[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;
    document.getElementById("choices-container").innerHTML = ""; // Remove choices
}
startGame();

let currentRole = "";
let currentQuizId = "";
let currentGameId = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let playerScore = 0;
let opponentScore = 0;
let playerAnswer = null;
let opponentAnswer = null;

function selectRole(role) {
    currentRole = role;
    document.getElementById("roleSelection").style.display = "none";
    if (role === "host") {
        document.getElementById("hostSetup").style.display = "block";
    } else {
        document.getElementById("playerSetup").style.display = "block";
    }
}

function startGame() {
    currentQuizId = document.getElementById("quizIdInput").value.toUpperCase();
    if (quizSets[currentQuizId]) {
        currentGameId = generateGameId();
        currentQuestions = [...questions[currentQuizId]];
        shuffleQuestions(currentGameId);
        initializeGame();
    } else {
        alert("Ungültige Quiz-ID. Bitte versuchen Sie es erneut.");
    }
}

function joinGame() {
    currentGameId = document.getElementById("gameIdInput").value.toUpperCase();
    // In einer echten Anwendung würden Sie hier die Quiz-ID vom Server abrufen
    currentQuizId = "ET01"; // Dies sollte in einer echten Anwendung dynamisch sein
    currentQuestions = [...questions[currentQuizId]];
    shuffleQuestions(currentGameId);
    initializeGame();
}

function initializeGame() {
    document.getElementById("hostSetup").style.display = "none";
    document.getElementById("playerSetup").style.display = "none";
    document.getElementById("gameInfo").style.display = "block";
    document.getElementById("currentGameId").textContent = currentGameId;
    document.getElementById("currentQuizId").textContent = currentQuizId;
    document.getElementById("animation").style.display = "none";
    showQuestion();
    updateRemainingQuestions();
    updateThemeIcon();
}

function generateGameId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function shuffleQuestions(seed) {
    let rng = seededRandom(seed);
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }
}

function seededRandom(seed) {
    let m = 2**35 - 31;
    let a = 185852;
    let s = seed % m;
    return function() {
        return (s = s * a % m) / m;
    };
}

function showQuestion() {
    // ... Implementierung der showQuestion-Funktion
}

function submitAnswer() {
    // ... Implementierung der submitAnswer-Funktion
}

function checkAnswer() {
    // ... Implementierung der checkAnswer-Funktion
}

function updateScores() {
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("opponentScore").innerText = opponentScore;
}

function nextQuestion() {
    // ... Implementierung der nextQuestion-Funktion
}

function previousQuestion() {
    // ... Implementierung der previousQuestion-Funktion
}

function endGame() {
    // ... Implementierung der endGame-Funktion
}

function updateRemainingQuestions() {
    const remainingEl = document.getElementById("remainingQuestions");
    remainingEl.innerText = `Frage ${currentQuestionIndex + 1} von ${currentQuestions.length}`;
}

function updateThemeIcon() {
    const iconEl = document.getElementById("themeIcon");
    iconEl.innerText = quizSets[currentQuizId].icon;
}

// Event Listener
document.getElementById("submitAnswerBtn").addEventListener("click", submitAnswer);
document.getElementById("checkAnswerBtn").addEventListener("click", checkAnswer);

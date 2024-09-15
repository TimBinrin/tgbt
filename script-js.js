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
    const questionEl = document.getElementById("question");
    const answerEl = document.getElementById("answer");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const answerSection = document.getElementById("answerSection");
    const unitSelect = document.getElementById("unitSelect");
    const submitBtn = document.getElementById("submitAnswerBtn");
    const checkAnswerBtn = document.getElementById("checkAnswerBtn");

    questionEl.innerText = currentQuestions[currentQuestionIndex].q;
    answerEl.style.display = "none";
    nextBtn.style.display = "none";
    answerSection.style.display = "block";
    submitBtn.style.display = "inline-block";
    checkAnswerBtn.style.display = "none";

    prevBtn.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";

    unitSelect.innerHTML = "";
    ["Meter", "Zentimeter", "Kilogramm", "Liter", "Watt", "Volt", "Ampere", "Prozent", "Stück", "Bits", "Gigabyte", "Mbit/s", "Zeichen"].forEach(unit => {
        let option = document.createElement("option");
        option.value = unit;
        option.text = unit;
        unitSelect.appendChild(option);
    });

    if (currentQuestions[currentQuestionIndex].unit) {
        unitSelect.value = currentQuestions[currentQuestionIndex].unit;
        unitSelect.disabled = true;
    } else {
        unitSelect.disabled = false;
    }

    updateRemainingQuestions();
}

function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById("answerInput").value);
    const unit = document.getElementById("unitSelect").value;
    
    if (isNaN(userAnswer)) {
        alert("Bitte geben Sie eine gültige Zahl ein.");
        return;
    }

    playerAnswer = {value: userAnswer, unit: unit};
    
    document.getElementById("submitAnswerBtn").style.display = "none";
    
    if (currentRole === "host") {
        document.getElementById("checkAnswerBtn").style.display = "inline-block";
    } else {
        alert("Ihre Antwort wurde übermittelt. Warten Sie auf den Host, um die Ergebnisse zu überprüfen.");
    }
}

function checkAnswer() {
    const correctAnswer = currentQuestions[currentQuestionIndex].a;
    const answerEl = document.getElementById("answer");
    const nextBtn = document.getElementById("nextBtn");

    opponentAnswer = {value: Math.random() * correctAnswer * 2, unit: currentQuestions[currentQuestionIndex].unit};

    const playerDiff = Math.abs(playerAnswer.value - correctAnswer);
    const opponentDiff = Math.abs(opponentAnswer.value - correctAnswer);

    let resultText = `Richtige Antwort: ${correctAnswer} ${currentQuestions[currentQuestionIndex].unit}\n`;
    resultText += `Ihre Antwort: ${playerAnswer.value} ${playerAnswer.unit}\n`;
    resultText += `Gegner Antwort: ${opponentAnswer.value} ${opponentAnswer.unit}\n\n`;

    if (playerDiff < opponentDiff) {
        resultText += "Sie waren näher dran! Sie erhalten den Punkt.";
        playerScore++;
    } else if (opponentDiff < playerDiff) {
        resultText += "Ihr Gegner war näher dran. Der Gegner erhält den Punkt.";
        opponentScore++;
    } else {
        resultText += "Unentschieden! Beide erhalten einen Punkt.";
        playerScore++;
        opponentScore++;
    }

    answerEl.innerText = resultText;
    answerEl.style.display = "block";
    nextBtn.style.display = "inline-block";
    document.getElementById("checkAnswerBtn").style.display = "none";

    updateScores();
}

function updateScores() {
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("opponentScore").innerText = opponentScore;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function endGame() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h2>Spiel beendet!</h2>
        <p>Ihr Punktestand: ${playerScore}</p>
        <p>Gegner Punktestand: ${opponentScore}</p>
        <button onclick="location.reload()">Neues Spiel starten</button>
    `;
}

function updateRemainingQuestions() {
    const remainingEl = document.getElementById("remainingQuestions");
    remainingEl.innerText = `Frage ${currentQuestionIndex + 1} von ${currentQuestions.length}`;
}

function updateThemeIcon() {
    const iconEl = document.getElementById("
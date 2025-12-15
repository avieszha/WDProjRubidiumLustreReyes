const questions = [
  { element: "Hydrogen", house: "Gryffindor" },
  { element: "Oxygen", house: "Slytherin" },
  { element: "Iron", house: "Hufflepuff" },
  { element: "Uranium", house: "Ravenclaw" },
  { element: "Sodium", house: "Gryffindor" },
  { element: "Chlorine", house: "Slytherin" },
  { element: "Copper", house: "Hufflepuff" },
  { element: "Neon", house: "Slytherin" },
  { element: "Potassium", house: "Gryffindor" },
  { element: "Lanthanum", house: "Ravenclaw" }
];

// DOM
const questionText = document.getElementById("question-text");
const buttons = document.querySelectorAll(".choice-btn");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const livesText = document.getElementById("lives");
const restartBtn = document.getElementById("restart-btn");
const modes = document.querySelectorAll(".mode");
const modeTitle = document.getElementById("mode-title");
const modeMessage = document.getElementById("mode-message");

// STATE
let currentQuestion = 0;
let score = 0;
let lives = 3;
let timeLeft = 30;
let timer = null;
let quizEnded = false;

// START
startQuiz();

// ------------------
// MODE SWITCHING
// ------------------
modes.forEach(mode => {
  mode.addEventListener("click", () => {
    modes.forEach(m => m.classList.remove("active"));
    mode.classList.add("active");

    const modeName = mode.textContent;
    modeTitle.textContent = modeName;

    if (modeName !== "House Rapid-Fire") {
      quizEnded = true;
      clearInterval(timer);

      questionText.textContent = modeName;
      modeMessage.textContent =
        "This quiz mode will be added in a future update.";
      modeMessage.style.display = "block";

      document.querySelector(".choices").style.display = "none";
      timerText.textContent = "⏳ —";
      scoreText.textContent = "Score: —";
    } else {
      modeMessage.style.display = "none";
      startQuiz();
    }
  });
});

// ------------------
// QUIZ CORE
// ------------------
function startQuiz() {
  resetState();
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (quizEnded) return;

    timeLeft--;
    timerText.textContent = `⏳ ${timeLeft}`;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  if (currentQuestion >= 10 || lives <= 0) {
    endQuiz();
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent =
    `Which House does ${q.element} belong to?`;
}

// ------------------
// ANSWERS
// ------------------
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (quizEnded) return;

    const chosen = btn.dataset.house;
    const correct = questions[currentQuestion].house;

    if (chosen === correct) {
      score++;
      scoreText.textContent = `Score: ${score}/10`;
    } else {
      lives--;
      livesText.textContent = "❤️".repeat(lives);
    }

    currentQuestion++;
    showQuestion();
  });
});

// ------------------
// END & RESTART
// ------------------
function endQuiz() {
  quizEnded = true;
  clearInterval(timer);

  questionText.textContent = "O.W.L.s Complete!";
  timerText.textContent = "⏳ 0";
  scoreText.textContent = `Final Score: ${score}/10`;

  document.querySelector(".choices").style.display = "none";
  restartBtn.style.display = "inline-block";
}

restartBtn.addEventListener("click", startQuiz);

function resetState() {
  clearInterval(timer);

  quizEnded = false;
  currentQuestion = 0;
  score = 0;
  lives = 3;
  timeLeft = 30;

  scoreText.textContent = "Score: 0/10";
  timerText.textContent = "⏳ 30";
  livesText.textContent = "❤️❤️❤️";
  questionText.textContent = "";
  modeMessage.style.display = "none";

  document.querySelector(".choices").style.display = "grid";
  restartBtn.style.display = "none";
}

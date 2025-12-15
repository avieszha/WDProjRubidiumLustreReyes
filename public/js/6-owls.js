const questions = [
  { element: "Hydrogen", house: "Gryffindor" },
  { element: "Oxygen", house: "Slytherin" },
  { element: "Iron", house: "Hufflepuff" },
  { element: "Uranium", house: "Ravenclaw" },
  { element: "Sodium", house: "Gryffindor" },
  { element: "Chlorine", house: "Slytherin" }
];

let index = 0;
let score = 0;
let lives = 3;
let timeLeft = 30;
let timer;
const review = [];
let currentMode = "rapid";

const questionText = document.getElementById("question-text");
const buttons = document.querySelectorAll(".choice-btn");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const livesText = document.getElementById("lives");
const reviewSheet = document.getElementById("review-sheet");
const reviewList = document.getElementById("review-list");
const modeTitle = document.getElementById("mode-title");
const modes = document.querySelectorAll(".mode");


modes.forEach(mode => {
  mode.addEventListener("click", () => {
    modes.forEach(m => m.classList.remove("active"));
    mode.classList.add("active");
    currentMode = mode.dataset.mode;

    modeTitle.textContent = mode.textContent;

    resetQuiz();

    if (currentMode !== "rapid") {
      questionText.textContent =
        "This quiz mode will be unlocked in a future update.";
      document.querySelector(".choices").style.display = "none";
    } else {
      document.querySelector(".choices").style.display = "grid";
      loadQuestion();
      startTimer();
    }
  });
});

function loadQuestion() {
  if (index >= questions.length || lives === 0) {
    endQuiz();
    return;
  }
  questionText.textContent =
    `Which House does ${questions[index].element} belong to?`;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerText.textContent = `⏳ ${timeLeft}`;
    if (timeLeft === 0) loseLife("No Answer");
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerText.textContent = `⏳ ${timeLeft}`;
}

function loseLife(answer) {
  record(answer);
  lives--;
  livesText.textContent = "❤️".repeat(lives);
  next();
}

function next() {
  resetTimer();
  index++;
  loadQuestion();
  startTimer();
}

function record(answer) {
  review.push({
    element: questions[index].element,
    correct: questions[index].house,
    answer
  });
}

function endQuiz() {
  clearInterval(timer);
  questionText.textContent = "O.W.L.s Complete!";
  document.querySelector(".choices").style.display = "none";
  reviewSheet.style.display = "block";

  reviewList.innerHTML = "";
  review.forEach(r => {
    const li = document.createElement("li");
    li.textContent =
      `${r.element}: You answered ${r.answer}, Correct: ${r.correct}`;
    reviewList.appendChild(li);
  });
}

function resetQuiz() {
  clearInterval(timer);
  index = 0;
  score = 0;
  lives = 3;
  timeLeft = 30;
  review.length = 0;

  scoreText.textContent = "Score: 0/10";
  timerText.textContent = "⏳ 30";
  livesText.textContent = "❤️❤️❤️";
  reviewSheet.style.display = "none";
}


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.house;
    const correct = questions[index].house;

    if (choice === correct) {
      score++;
      scoreText.textContent = `Score: ${score}/10`;
    } else {
      lives--;
      livesText.textContent = "❤️".repeat(lives);
    }

    record(choice);
    next();
  });
});


loadQuestion();
startTimer();

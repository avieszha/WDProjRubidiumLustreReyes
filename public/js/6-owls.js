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

let index = 0;
let score = 0;
let lives = 3;
let timeLeft = 30;
let timer = null;
let quizActive = true;
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
      quizActive = false;
      questionText.textContent =
        "This quiz mode will be unlocked in a future update.";
      document.querySelector(".choices").style.display = "none";
      timerText.textContent = "⏳ —";
    } else {
      document.querySelector(".choices").style.display = "grid";
      startQuestion();
    }
  });
});

function startQuestion() {
  if (index >= 10 || lives <= 0) {
    endQuiz();
    return;
  }

  questionText.textContent =
    `Which House does ${questions[index].element} belong to?`;

  resetTimer();
  startTimer();
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (!quizActive) {
      clearInterval(timer);
      return;
    }

    timeLeft--;
    timerText.textContent = `⏳ ${timeLeft}`;

    if (timeLeft <= 0) {
      handleWrong("No Answer");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerText.textContent = "⏳ 30";
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!quizActive) return;

    const choice = btn.dataset.house;
    const correct = questions[index].house;

    if (choice === correct) {
      score++;
      scoreText.textContent = `Score: ${score}/10`;
      record(choice);
      nextQuestion();
    } else {
      handleWrong(choice);
    }
  });
});

function handleWrong(answer) {
  record(answer);
  lives--;
  livesText.textContent = "❤️".repeat(lives);
  nextQuestion();
}

function nextQuestion() {
  index++;
  startQuestion();
}

function record(answer) {
  review.push({
    element: questions[index].element,
    correct: questions[index].house,
    answer
  });
}

function endQuiz() {
  quizActive = false;
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
  quizActive = true;

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

startQuestion();

const questions = [
    { question: "Erick é baitola", answer: true },
    { question: "The sky is blue.", answer: true },
    { question: "The grass is red.", answer: false },
    { question: "The ocean is made of chocolate.", answer: false },
    { question: "Cows can fly.", answer: false },
    { question: "Fish can swim.", answer: true },
    { question: "Birds can swim.", answer: true },
    { question: "The sun is a star.", answer: true },
    { question: "Humans need oxygen to survive.", answer: true },
    { question: "There are 25 hours in a day.", answer: false },
    { question: "Water boils at 100 degrees Celsius.", answer: true },
    { question: "The Earth is flat.", answer: false },
    { question: "Fire is cold.", answer: false },
    { question: "Ice is hot.", answer: false },
    { question: "Plants need sunlight to grow.", answer: true },
    { question: "The moon is made of cheese.", answer: false },
    { question: "CJ is white", answer: false },
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const playAgainButton = document.getElementById('play-again-btn');

trueButton.addEventListener('click', () => selectAnswer(true));
falseButton.addEventListener('click', () => selectAnswer(false));
playAgainButton.addEventListener('click', startGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, questions.length);
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}

function resetState() {
    trueButton.classList.remove('correct', 'wrong');
    falseButton.classList.remove('correct', 'wrong');
}

function selectAnswer(answer) {
    if (shuffledQuestions[currentQuestionIndex].answer === answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultElement.innerText = `Your score: ${score}`;
}

startGame();

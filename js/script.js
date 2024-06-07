const questions = [
    { question: "O Oceano Atlântico é o segundo maior oceano do mundo.", answer: true },
    { question: "O Oceano Pacífico é menor que o Oceano Índico.", answer: false },
    { question: "Plâncton é um tipo de peixe.", answer: false },
    { question: "As algas marinhas contribuem para a produção de oxigênio na Terra.", answer: true },
    { question: "Os polvos têm três corações.", answer: true },
    { question: "As tartarugas marinhas sempre voltam à praia onde nasceram para pôr seus ovos.", answer: true },
    { question: "As medusas são compostas por 90% de água.", answer: false },
    { question: "A alga marinha pode crescer até 90 metros de comprimento.", answer: false },
    { question: "Os cavalos-marinhos machos são os que ficam grávidos.", answer: true },
    { question: "A poluição por plástico mata cerca de 1 milhão de aves marinhas todos os anos.", answer: true },
    { question: "O plástico leva cerca de 20 anos para se decompor no oceano.", answer: false },
    { question: "O fenômeno da maré negra é causado por derramamento de petróleo.", answer: true },
    { question: "O dióxido de carbono causa o aumento da acidez nos oceanos.", answer: true },
    { question: "Os microplásticos são partículas de plástico menores que 5 milímetros.", answer: true },
    { question: "O coral-branco é um sinal de que o recife está saudável.", answer: false },
    { question: "Os camarões mantis têm a capacidade de quebrar vidro com suas garras", answer: true },
    { question: "O gelo marinho ajuda a regular a temperatura global refletindo a luz solar.", answer: true },
    { question: "O aumento da temperatura das águas é um dos causadores do branqueamento dos corais.", answer: true },
    { question: "A pesca de arrasto é uma técnica de pesca sustentável.", answer: false },
    { question: "A salizinação dos oceanos pode prejudicar os organismos que formam conchas de carbonato de cálcio.", answer: false },
    { question: "Os tubarões têm sido chamados de 'polícia dos oceanos' devido ao seu papel na regulação das populações de peixes.", answer: true },
    { question: "Os oceanos absorvem mais de 99% do calor gerado pelo aquecimento global.", answer: true },
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
const gameTitle = document.getElementById('game-title');

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

    trueButton.disabled = true;
    falseButton.disabled = true;

    if (shuffledQuestions[currentQuestionIndex].answer === true) {
        gameTitle.innerText = "Verdadeiro"
    } else {
        gameTitle.innerText = "Falso"
    }

    if (shuffledQuestions[currentQuestionIndex].answer === answer) {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            setNextQuestion();
        } else {
            showResult();
        }
        trueButton.disabled = false;
        falseButton.disabled = false;
        gameTitle.innerText = "Quiz Game"
    }, 1000);

}





function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultElement.innerText = `Sua pontuação: ${score}`;
}

startGame();

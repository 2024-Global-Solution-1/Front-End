/*<input type="range" id="rangeInput" min="0" max="100" oninput="updateValue(this.value)">
<span id="rangeValue">50</span>

<script>
function updateValue(value) {
  document.getElementById('rangeValue').textContent = value;
}
</script>*/


function spanValor(valor, idMedida, number){


    let valorSpan = document.querySelector("#rangeValor"+ number);
    
    if (idMedida == "kWh"){

        valorSpan.textContent = valor + " kWh";
    } else if (idMedida == "Km"){
        valorSpan.textContent = valor + " Km";

    }
}

const kmVeiculo = document.getElementById('kmVeiculo');
const questionElement = document.getElementById('question');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const playAgainButton = document.getElementById('play-again-btn');
const gameTitle = document.getElementById('game-title');

//AAAAAAAAAAAAAAAAA
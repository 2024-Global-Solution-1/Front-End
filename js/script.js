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
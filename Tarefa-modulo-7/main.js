const form = document.getElementById('form-numeros');

const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

let formEValido = false;

function validar(numeroA, numeroB) {
    if (numeroB > numeroA) {
        alert("O número B é maior que o número A");

    } else {
        alert("O número A é menor que o número B");
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validar(numeroA.value, numeroB.value);

});



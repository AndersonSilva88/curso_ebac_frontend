const form = document.getElementById('form-numeros');

let numeroA = document.getElementById('numero-a');
let numeroB = document.getElementById('numero-b');

let formEValido = false;

function validar(numeroA, numeroB) {
    if (numeroB > numeroA) {

    } else {
        alert("Formulário inválido!!");
    }
}

form.addEventListener('submit', function (e) {
    validar(numeroA.value, numeroB.value);

});



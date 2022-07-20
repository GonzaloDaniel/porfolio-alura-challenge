const form = document.querySelector(".contacto__formulario-form");
const campoEmail = document.querySelector("#email");
const errorEmail = document.querySelector("#error-email");

const campoNombre = document.querySelector("#nombre");
const errorNombre = document.querySelector("#error-nombre");

const campoAsunto = document.querySelector("#asunto");
const errorAsunto = document.querySelector("#error-asunto");

const campoMensaje = document.querySelector("#mensaje");
const errorMensaje = document.querySelector("#error-mensaje");


campoMensaje.addEventListener("input", function (){

    if (campoMensaje.validity.valid) {
        errorMensaje.textContent = "";
        campoMensaje.style.backgroundColor= "#ffffff";
    } else {
        showError();
    }
});

campoAsunto.addEventListener("input", function (){

    if (campoAsunto.validity.valid) {
        errorAsunto.textContent = "";
        campoAsunto.style.backgroundColor= "#ffffff";
    } else {
        showError();
    }
});

campoNombre.addEventListener("input", function (){

    if (campoNombre.validity.valid) {
        errorNombre.textContent = "";
        campoNombre.style.backgroundColor= "#ffffff";
    } else {
        showError();
    }
});

campoEmail.addEventListener("input", function () {


    if (campoEmail.validity.valid) {
        errorEmail.textContent = "";
        campoEmail.style.backgroundColor= "#ffffff";
    } else {
        showError();
    }


});

form.addEventListener("submit", function (event) {
    if (!campoEmail.validity.valid || !campoNombre.validity.valid || !campoAsunto.validity.valid || !campoMensaje.validity.valid) {
        showError();
        event.preventDefault();
    }


});


function showError() {

    if (campoEmail.validity.valueMissing) {
       
        errorEmail.textContent = 'Debe introducir una dirección de correo electrónico.';
        campoEmail.style.backgroundColor= "#ffeaea";
    } else if (campoEmail.validity.typeMismatch) {
        
        errorEmail.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
        campoEmail.style.backgroundColor= "#ffeaea";

    } else if (campoEmail.validity.tooShort) {
       
        errorEmail.textContent = `El correo electrónico debe tener al menos ${campoEmail.minLength} caracteres; ha introducido ${email.value.length}`
        campoEmail.style.backgroundColor= "#ffeaea";
    }

   
    if (campoNombre.validity.valueMissing) {
        errorNombre.textContent = "Debe introducir su nombre";
        campoNombre.style.backgroundColor= "#ffeaea";
    }

    if (campoAsunto.validity.valueMissing) {
        errorAsunto.textContent = "Debe introducir el Asunto";
        campoAsunto.style.backgroundColor= "#ffeaea";
    }

    if (campoMensaje.validity.valueMissing) {
        errorMensaje.textContent = "Debe introducir el Mensaje";
        campoMensaje.style.backgroundColor= "#ffeaea";
    }

}
function confirmacion() {
    var pregunta = confirm("¿Estas seguro que quieres registrarte?");
    var formulario = validarFormulario()
    if (formulario == null && pregunta == true){
        alert("Felicidades uwu");
        window.location = '/loginvista.html';
    }
    else{
        alert("Quizás en otro momento...\n Gracias de todas formas");
    }
}
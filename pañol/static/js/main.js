function validateMail(idMail)
{ 
	object=document.getElementById(idMail);
	valueForm=object.value;

	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if(valueForm.search(patron)==0)
	{
		//Correo bien
		object.style.color="#000";
		return;
	}
	    //Correo malo
        object.style.color="#f00";

function validateTelefono(idTelefono)
{
    object=document.getElementById(idTelefono);
	valueForm=object.value; 
}
    
function modifyText() {
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ","
                ]
    var txtRut = document.getElementById("txtRut")
    txtRut.value = txtRut.value.toLowerCase()
    for(let i in letters){
        txtRut.value = txtRut.value.replace(letters[i], "")
    }
    if(txtRut.value.includes("-")) {
        txtRut.value = txtRut.value.replace(/-/g, "")
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }else
    {
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }
    if(txtRut.value.includes("k")) {
        txtRut.value = txtRut.value.replace(/k/g, "")
        txtRut.value += "k"
    }
}
}

function val(Nombre) {
tecla = (document.all) ? e.keyCode : e.which;
if (tecla == 8) return true;
patron = /[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s\t-]/;
te = String.fromCharCode(tecla);
return patron.test(te);
}

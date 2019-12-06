function validarFormulario(){

    var txtUsuario = document.getElementById('usuario').value;
    var txtContraseña = document.getElementById('password').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtNombre = document.getElementById('nombre').value;
    var txtApellido = document.getElementById('apellido').value;
    
    if(txtNombre == null || txtNombre == 0){
        alert('Ingrese su nombre');
        document.datos.nombre.focus();
        return false;
    }
    
    if(txtNombre.length>20){
        alert('Nombre muy largo');
        document.datos.nombre.focus();
        return false;
    }
    
    if(txtApellido == null || txtApellido.length == 0){
        alert('Ingrese su apellido');
        document.datos.apellido.focus();
        return false;
    }
    
    if(txtApellido.length>20){
        alert('Su apellido es demasiado largo');
        document.datos.apellido.focus();
        return false;
    }

    if(txtUsuario == null || txtUsuario.length == 0 || /^\s+$/.test(txtNombre)){
        alert('ERROR: Ingrese información en Usuario ');
        document.datos.usuario.focus();
        return false;
    }
    
    if(txtUsuario.length>15){
        alert('Username demasiado largo');
        document.datos.usuario.focus();
        return false;
    }

    
    if(txtContraseña.length<6){
        alert('La contraseña debe contener como minimo 6 caracteres');
        document.datos.contraseña.focus();
        return false;
    }

    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
        alert('ERROR: Debe escribir un correo válido');
        document.datos.correo.value="";
        document.datos.correo.focus();
        return false;
    }

}
import {registrarUsuarioBD} from "/js/ConsumoAPI/ConsumoUsuario.js";

// Formulario Registro de usuarios 
document.addEventListener("DOMContentLoaded", ()=>{

    const formularioRegistro = document.getElementById("registrarUsuario");

    formularioRegistro.addEventListener("submit", (event)=>{
        event.preventDefault()
        

        const {nombreUsuario, nombre, apellidos, telefono, correo, pais, contrasenia, contraseniaVerificacion} = getDatosFormularioRegitroUsuario();

        // console.log(nombreUsuario, nombre, apellidos, telefono, correo, pais, contrasenia, contraseniaVerificacion);

        const datosValidos =  validarNombre(nombre) && validarApellidos(apellidos) && validarTelefono(telefono)  && validarEmail(correo) && validarPassword(contrasenia);

    
        if(datosValidos){

            if( verificarIgualdadPassword(contrasenia, contraseniaVerificacion) ){

                registarUsuario(nombreUsuario, nombre, apellidos, telefono, correo, pais, contrasenia);
            }
        }
      
        
    });

});


//obtener datos del formulario
const getDatosFormularioRegitroUsuario = ()=>{

    const nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();
    const contraseniaVerificacion = document.getElementById("contrasenia_verificacion").value.trim();

    return {nombreUsuario, nombre, apellidos, telefono, correo, pais, contrasenia, contraseniaVerificacion};
};



//****************** validaciones de los datos *******************

const validarCedula = (cedula)=>{

    const regex = /^[0-9-]+$/;
   
    if(!( cedula.length === 11 && regex.test(cedula) ) ){
        mostrarModalNotificacion("El formato de la Cédula es incorrecto");
        return false;
    }else{
        return true;
    }
};

/*
// Obtener el campo de entrada del input cedula en directo
document.getElementById("cedula").addEventListener("input", function() {
    // Obtener el valor actual del campo
    var valor = this.value;
            
    // Eliminar cualquier carácter que no sea un dígito o un guión
    valor = valor.replace(/[^\d-]/g, "");

    // Limitar la longitud de la cadena a 12 caracteres (#-####-####)
    valor = valor.slice(0, 11);

    // Verificar si la longitud actual permite insertar el guión automáticamente
    if (valor.length > 1 && valor.charAt(1) !== '-') {
        valor = valor.slice(0, 1) + '-' + valor.slice(1);
    }
    if (valor.length > 6 && valor.charAt(6) !== '-') {
        valor = valor.slice(0, 6) + '-' + valor.slice(6);
    }

    // Actualizar el valor del campo con la máscara aplicada
    this.value = valor;
     
});
*/



const validarNombre = (nombre)=>{

    const regex = /^[a-zA-Z\s]+$/;
    if( !(nombre.length <= 20  &&  regex.test(nombre)) ){
        mostrarModalNotificacion("El nombre debe contener solo letras y un maximo de 20 caracteres");
        return false;
    }else{
        return true;
    }
};

// Obtener el campo de entrada del input nombre en directo
document.getElementById("nombre").addEventListener("input", function() {
    // Obtener el valor actual del campo
    var valor = this.value;
            
    // Eliminar cualquier carácter que no sea una letra
  
    valor = valor.replace(/[^a-zA-Z\s]/g, "");


    // Limitar la longitud de la cadena a 20 caracteres
    valor = valor.slice(0, 20);

    // Actualizar el valor del campo con la entrada válida
    this.value = valor;
});



const validarApellidos = (apellidos)=>{

    const regex = /^[a-zA-Z\s]+$/;
    if(  !(apellidos.length <= 30  &&  regex.test(apellidos)) ){
        mostrarModalNotificacion("El apellido debe contener solo letras y un maximo de 30 caracteres");
        return false;
    }else{
        return true;
    }
};

// Obtener el campo de entrada del input apellidos en directo
document.getElementById("apellidos").addEventListener("input", function() {
    // Obtener el valor actual del campo
    var valor = this.value;
            
    // Eliminar cualquier carácter que no sea una letra
    valor = valor.replace(/[^a-zA-Z\s]/g, "");

    // Limitar la longitud de la cadena a 20 caracteres
    valor = valor.slice(0, 30);

    // Actualizar el valor del campo con la entrada válida
    this.value = valor;
});



const validarTelefono = (telefono)=>{
    const regex = /^[0-9-]+$/;
   
    if( !(telefono.length === 9 && regex.test(telefono)) ){
        mostrarModalNotificacion("El telefono debe ser formato ####-####");
        return false;
    }else{
        return true;
    }
};


document.getElementById("telefono").addEventListener("input", function() {
    // Obtener el valor actual del campo
    var valor = this.value;
    
    // Eliminar cualquier carácter que no sea un dígito
    valor = valor.replace(/[^\d-]/g, "");

    // Limitar la longitud de la cadena a 8 caracteres
    valor = valor.slice(0, 9);

    // Insertar el guión después de los primeros 4 caracteres si la longitud actual es mayor que 4
    if (valor.length > 4 && valor.charAt(4) !== '-') {
        valor = valor.slice(0, 4) + '-' + valor.slice(4);
    }

    // Actualizar el valor del campo con la máscara aplicada
    this.value = valor;
});


// poner le modal en vez del Alert si tengo tiempo
const validarEmail = (email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!regex.test(email)){
        mostrarModalNotificacion("Introduce un correo válido.");
        return false; 
    }else{
        return true;
    }
};


// poner le modal en vez del Alert si tengo tiempo
const validarPassword = (password)=>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passwordRegex.test(password)){
        mostrarModalNotificacion("Introduce una contraseña con letras mayúsculas, minúsculas, numeros, simbolos y almenos 8 dígitos.");
    }
    return passwordRegex.test(password);
};



const verificarIgualdadPassword = (contrasenia, contraseniaVerificacion) =>{

    if(contrasenia !== contraseniaVerificacion){
        mostrarModalNotificacion("Las contraseñas son diferentes");
        return false;
    }else{
        return true;
    }
};



const registarUsuario = (nombreUsuario, nombre, apellidos, telefono, correo, pais, contrasenia) =>{

   
    registrarUsuarioEnLocalStorage(nombreUsuario, nombre, apellidos, telefono, correo,pais, contrasenia);
    mostrarModalNotificacion("Registro exitoso");
    limpiarCamposTexto();
  

};





//solo uno para registro porque en login pasa directo a otra pagina
const limpiarCamposTexto = () => {

    const camposTexto = document.querySelectorAll('#registrarUsuario input[type="text"], #registrarUsuario input[type="email"], #registrarUsuario input[type="password"]');
    
    camposTexto.forEach(campo => {
        campo.value = '';
    });

};






//****************** Registro*******************


// esta funcion deberia ir en el getUsuariosMedicosCitas *********
const registrarUsuarioEnLocalStorage = (nombreUsuario, nombre, apellidos, telefono, correo, pais, contrasenia) => {

    var usuarios = getUsuarios();

    var contraseniaHash = encriptarPassword(contrasenia);

    // console.log(contraseniaHash);
    
    
    const nuevoUsuario = {
        nombreUsuario: nombreUsuario,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contrasenia: contrasenia,
        especialidad: null,
        pais: pais,
        tipo: "usuario"
    };
   
    usuarios.push(nuevoUsuario);
  
 
    if(registrarUsuarioBD(nuevoUsuario)){
        localStorage.setItem("usuarios", JSON.stringify(usuarios));   
        return true;
    }

  
    return false;
   
};





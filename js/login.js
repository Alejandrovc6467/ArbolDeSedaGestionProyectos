// Formulario Login
document.addEventListener("DOMContentLoaded", ()=>{

    const formularioLogin = document.getElementById("login");

    formularioLogin.addEventListener("submit", (event)=>{
        event.preventDefault()

<<<<<<< HEAD
        const {nombreUsuario, contrasenia} = getDatosFormulario();

        console.log(nombreUsuario, contrasenia);

        console.log(getUsuarios(), "desde el login event solo para ver los usuarios registrados")

        const esValido = verificarLogin(nombreUsuario, contrasenia);

        esValido ? inicioSesionExitoso(nombreUsuario) : errorInicioSesion();
=======
        const {correo, contrasenia} = getDatosFormulario();

        console.log(correo, contrasenia);

        console.log(getUsuarios(), "desde el login event solo para ver los usuarios registrados")

        const esValido = verificarLogin(correo, contrasenia);

        esValido ? inicioSesionExitoso(correo) : errorInicioSesion();
>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19
    });

});


//obtener los datos del formulario
const getDatosFormulario = ()=>{

<<<<<<< HEAD
    const nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();;
    return {nombreUsuario, contrasenia};
};



=======
    const correo = document.getElementById("correo").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();;
    return {correo, contrasenia};
};


>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19
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
<<<<<<< HEAD
=======

>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19



//verificar Login
<<<<<<< HEAD
const verificarLogin = (nombreUsuario, contrasenia)=>{
=======
const verificarLogin = (correo, contrasenia)=>{
>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19

    var contraseniaHash = encriptarPassword(contrasenia);

    var usuarios = getUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
       
<<<<<<< HEAD
        if (usuarios[i].nombreUsuario === nombreUsuario && usuarios[i].contrasenia === contraseniaHash  ) {
=======
        if (usuarios[i].correo === correo && usuarios[i].contrasenia === contraseniaHash  ) {
>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19
            return true
        }
    }

    var medicos = getMedicos();

    for (let i = 0; i < medicos.length; i++) {
       
<<<<<<< HEAD
        if (medicos[i].nombreUsuario === nombreUsuario && medicos[i].contrasenia === contraseniaHash ) {
=======
        if (medicos[i].correo === correo && medicos[i].contrasenia === contraseniaHash ) {
>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19
            return true
        }
    }
   
    return false;

};


// inicio de sesion exitoso, se invoca si todo sale bien al momento del logueo
<<<<<<< HEAD
const inicioSesionExitoso = (nombreUsuario)=>{

    const sesionUser = {
        nombreUsuario: nombreUsuario
=======
const inicioSesionExitoso = (correo)=>{

    const sesionUser = {
        correo: correo
>>>>>>> aa50fc03ad1b7116f068e5be9672a66a1452fd19
    };
   
    localStorage.setItem("sesionUser", JSON.stringify(sesionUser));
 
    sessionStorage.setItem("sesionUser", JSON.stringify(sesionUser));

    window.location.href = 'agendarCita.html';// redireciono a agendarcita
   
};

//se invoca si hay un error en l sessio
const errorInicioSesion = ()=>{
    //aqui deberia de hacer la logica de inicios de sesion fallidos, revisar primero si esa cedula existe
    mostrarModalNotificacion("Datos incorrectos");
};
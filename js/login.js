import {autenticarUsuarioBD} from "/js/ConsumoAPI/ConsumoUsuario.js";

// Formulario Login
document.addEventListener("DOMContentLoaded", ()=>{

    const formularioLogin = document.getElementById("login");

    formularioLogin.addEventListener("submit", async (event)=>{
        event.preventDefault()

        const {nombreUsuario, contrasenia} = getDatosFormulario();

        console.log(nombreUsuario, contrasenia);

        console.log(getUsuarios(), "desde el login event solo para ver los usuarios registrados")

        const esValido = await verificarLogin(nombreUsuario, contrasenia);

        

        //esValido ? inicioSesionExitoso(nombreUsuario) : errorInicioSesion();
    });

});


//obtener los datos del formulario
const getDatosFormulario = ()=>{

    const nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();;
    return {nombreUsuario, contrasenia};
};





//verificar Login
const verificarLogin = async (nombreUsuario, contrasenia)=>{

    // var contraseniaHash = encriptarPassword(contrasenia);

    // var usuarios = getUsuarios();

    // for (let i = 0; i < usuarios.length; i++) {
       
    //     if (usuarios[i].nombreUsuario === nombreUsuario && usuarios[i].contrasenia === contraseniaHash  ) {
    //         return true
    //     }
    // }

    // var medicos = getMedicos();

    // for (let i = 0; i < medicos.length; i++) {
       
    //     if (medicos[i].nombreUsuario === nombreUsuario && medicos[i].contrasenia === contraseniaHash ) {
    //         return true
    //     }
    // }
   
    // return false;

    const usuario = {
        nombreUsuario: nombreUsuario,
        contrasenia: contrasenia
    };

    const resultado = await autenticarUsuarioBD(usuario);

    if(resultado.autenticado){
        inicioSesionExitoso(resultado.usuario);
    }else{
        errorInicioSesion();
    }

    
    //return resultado.autenticado;

};


// inicio de sesion exitoso, se invoca si todo sale bien al momento del logueo
const inicioSesionExitoso = (resultado)=>{

    console.log("entro a exitoso");

    const sesionUser = {
        nombreUsuario: resultado.nombreUsuario,
        id: resultado.id
    };
   
    localStorage.setItem("sesionUser", JSON.stringify(sesionUser));
 
    sessionStorage.setItem("sesionUser", JSON.stringify(sesionUser));

    
    window.location.href = 'agendarCita.html'; // Redirige a agendarCita.html
    
   
};

//se invoca si hay un error en l sessio
const errorInicioSesion = ()=>{
    //aqui deberia de hacer la logica de inicios de sesion fallidos, revisar primero si esa cedula existe
    mostrarModalNotificacion("Datos incorrectos");
};
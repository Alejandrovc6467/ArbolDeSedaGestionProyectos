// Usuarios


//obtener una lista de todos los usuarios
const getUsuarios = () => {
    //localStorage.clear();
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(usuarios != null){
        return usuarios;
    }else{
        usuarios = [];
        return usuarios;
    }
   
};


const getUsuariosApi = async () => {
    try {
        const response = await fetch("https://arboldesedabackend.onrender.com/usuario");
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        const usuarios = await response.json();

        // Filtrar solo los usuarios con tipo "usuario"
        const usuariosFiltrados = usuarios.filter(user => user.tipo === "usuario");

        // Guardar en localStorage
        //localStorage.setItem("usuarios", JSON.stringify(usuariosFiltrados));

        return usuariosFiltrados;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};



const getUsuario =  (nombreUsuario) => {

    var usuarios =  getUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
       
        if (usuarios[i].nombreUsuario === nombreUsuario) {
          
            return usuarios[i];
           
        }
    }

    return null;
};

//actualizo la contrasenia de usuario (en caso de restablecimiento
const actualizarContraseniaUsuario = (cedula,  newContrasenia) => {

    console.log(cedula, "cedula que me llega a actualizar");

    var usuarios = getUsuarios();

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].cedula === cedula  ) {

            usuarios[i].contrasenia = newContrasenia;
            break;

        }
    };

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
   
    return true;
};


// falta el pasar el registrar usuario que esta en registrarUsuario.html aqui, aqui deberia de estar 





// Medicos 
//retorno una lista de medicos
const getMedicos = () => {  
    
    //lamar al api aqui y luego filtrar a los medicos

    medicos = [
        
            {
                "nombreUsuario": "Ana1234",
                "nombre": "Ana",
                "apellidos": "González",
                "telefono": "7777-8888",
                "correo": "alejandrovc6467@gmail.com",
                "pais":"Costa Rica",
                "especialidad": "Dermatólogo",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Apasionada por cuidar la piel y mejorar la salud dermatológica. Brindo atención médica profesional y personalizada."
            },
            {
                "nombreUsuario": "luisa1234",
                "nombre": "Luisa",
                "apellidos": "Martínez",
                "telefono": "5555-6666",
                "correo": "luisamartinez@gmail.com",
                "pais":"Colombia",
                "especialidad": "Pediatra",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Dedicada a brindar atención pediátrica integral. Me apasiona cuidar y promover la salud de los niños."
            },
            {
                "nombreUsuario": "carlos1234",
                "nombre": "Carlos",
                "apellidos": "Sánchez",
                "telefono": "3333-4444",
                "correo": "carlossanchez@gmail.com",
                "pais":"Costa Rica",
                "especialidad": "Psiquiatra",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Experto en salud mental, brindo atención profesional y empática para mejorar la calidad de vida."
            },
            {
                "nombreUsuario": "maria1234",
                "nombre": "María",
                "apellidos": "López",
                "telefono": "2222-3333",
                "correo": "marialopez@gmail.com",
                "pais":"Nigeria",
                "especialidad": "Oftalmólogo",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Apasionada por la salud ocular. Ofrezco atención oftalmológica de calidad para cuidar la visión de mis pacientes."
            },
            {
                "nombreUsuario": "jorge1234",
                "nombre": "Jorge",
                "apellidos": "Hernández",
                "telefono": "9999-0000",
                "correo": "jorgehernandez@gmail.com",
                "pais":"Costa Rica",
                "especialidad": "Ginecólogo",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Comprometido con la salud de las mujeres. Brindo atención ginecológica integral y promuevo el bienestar femenino."
            },
            {
                "nombreUsuario": "pedro1234",
                "nombre": "Pedro",
                "apellidos": "Díaz",
                "telefono": "1111-2222",
                "correo": "pedrodiaz@gmail.com",
                "pais":"Costa Rica",
                "especialidad": "Nutricionista",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Promuevo una alimentación saludable y equilibrada para mejorar la calidad de vida y prevenir enfermedades."
            },
            {
                "nombreUsuario": "sofia1234",
                "nombre": "Sofía",
                "apellidos": "Ramírez",
                "telefono": "6666-7777",
                "correo": "sofiaramirez@gmail.com",
                "pais":"Costa Rica",
                "especialidad": "Dentista",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Apasionada por cuidar la salud bucal. Brindo tratamientos dentales de calidad para mantener sonrisas saludables."
            },
            {
                "nombreUsuario": "elena1234",
                "nombre": "Elena",
                "apellidos": "Vargas",
                "telefono": "4444-5555",
                "correo": "elenavargas@gmail.com",
                "pais":"Costa Rica",
                "especialidad": "Endocrinólogo",
                "horariosConsulta": "Lunes - Viernes (8am - 4pm)",
                "contrasenia": "65a711dfbb47646488f342e34dfdb0f038a49cedf20bff55a50e05ce44bbae1f",
                "tipo": "medico",
                "biografia": "Especialista en equilibrio hormonal. Brindo atención médica integral para mejorar la salud endocrina de mis pacientes."
            }
        

    ];

  
    localStorage.setItem("medicos", JSON.stringify(medicos));

    return JSON.parse(localStorage.getItem("medicos"));

};

/*
const getMedicos = () =>{
     return edicos = [
        
        {
            "nombreUsuario": "medico",
            "nombre": "nombre",
            "apellidos": "apellidos",
            "telefono": "telefono",
            "correo": "correo",
            "contrasenia": "contrasenia",
            "especialidad": "Pso",
            "pais": "pais",
            "tipo": "usuario"
        }
    ];
}
    */


const getMedicosApi = async () => {
    try {
        const response = await fetch("https://arboldesedabackend.onrender.com/usuario");
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        const usuarios = await response.json();

        // Filtrar solo los usuarios con tipo "usuario"
        const usuariosFiltrados = usuarios.filter(user => user.tipo === "medico");

        // Guardar en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuariosFiltrados));

        console.log("aqui get medd");
        console.log(usuariosFiltrados);
        return usuariosFiltrados;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};


// retorno un medico si hay alguna coincidencia con la cedula
const getMedico =  (nombreUsuario) => {

    var medicos =  getMedicos();

    for (let i = 0; i < medicos.length; i++) {
       
        if (medicos[i].nombreUsuario === nombreUsuario) {
            return medicos[i];
        }
    }
   
    return null;
};

// actualizo la contrasenia en caso de restablecimiento
const actualizarContraseniaMedico = (cedula,  newContrasenia) => {

    console.log(cedula, "cedula que me llega a actualizar");

    var medicos = getMedicos();

    for (let i = 0; i < medicos.length; i++) {

        if (medicos[i].cedula === cedula  ) {

            medicos[i].contrasenia = newContrasenia;
            break;

        }
    };

    localStorage.setItem("medicos", JSON.stringify(medicos));
   
    return true;
};






// citas

// obtengo una lista de citas
const getCitas = () => {

    //localStorage.clear();
    var citas = JSON.parse(localStorage.getItem("citas"));
    if(citas != null){
       return citas;
    }else{
       citas = [];
       return citas;
    }
};


//obtengo todas las citas de un usurio
const getCitasUsuario = (cedula, fecha) => {

    var citas = getCitas();

    var citasRetornar = [];

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].usuarioCedula === cedula && citas[i].fecha === fecha) {
            citasRetornar.push(citas[i]);
        }
    }
   
    return citasRetornar;

};


//obtengo todas las citas de un usurio SIN IMPORTAR LA FECHA, ABSOLUTAMENTE TODAS
//Tambien si el rol es doctor se obtienen todas las citas de sus pacientes
//este metodo es para el apartado del expediente
const getCitasTodas =  (cedula) => {

    var citas = getCitas();
    var citasRetornar = [];

    
    if(getUsuario(getSessionStorageUser()) != null ){
        console.log('es usuario');
         
        for (let i = 0; i < citas.length; i++) {
        
            if (citas[i].usuarioCedula === cedula) {
                citasRetornar.push(citas[i]);
            }
        }
    }else{
        
        for (let i = 0; i < citas.length; i++) {
       
            if (citas[i].cedulaMedico === cedula) {
                citasRetornar.push(citas[i]);
            }
        }

    }

    return citasRetornar;

};

//obtengo una cita por el id
const getCitaById = (id) => {

    var citas = getCitas();

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].id === id) {
            return  citas[i];
        }
    };

    return false;

};

//verifico la existencia de cita en fecha y hora
const verificarExistenciaCitaEseDiaUsuario = (cedula, fecha) => {

    var citas = getCitas();

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].usuarioCedula === cedula && citas[i].fecha === fecha) {
            return true;
        }
    }
   
    return false;

};

//retorna una lista de todas las citas del medico
const getCitasMedico = (cedula, fecha) => {

    var citas = getCitas();

    var citasRetornar = [];

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].cedulaMedico === cedula && citas[i].fecha === fecha) {
            citasRetornar.push(citas[i]);
        }
    }
   
    return citasRetornar;

};


//verifico la existencia de cita en fecha y hora
const verificarExistenciaCitaEseDiaMedico = (cedula, fecha) => {

    var citas = getCitas();

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].cedulaMedico === cedula && citas[i].fecha === fecha) {
            return true;
        }
    }
   
    return false;


};

// agrega una nueva cita
const setCita = async (usuarioCedula,fecha, hora, especialidad, cedulaMedico) => {

    var citas = getCitas();
    
    var medicoCita = await getMedico(cedulaMedico);

    var identificador = getIndentificadorCita();

    incrementarIndentificadorCita();

        
    const nuevaCita = {
        id: identificador,
        usuarioCedula: usuarioCedula,
        fecha: fecha,
        hora: hora,
        especialidad: especialidad,
        cedulaMedico: cedulaMedico,
        nombreMedico: medicoCita.nombre,
        estado: "Pendiente"
    };
    
    citas.push(nuevaCita);
    
    localStorage.setItem("citas", JSON.stringify(citas));

    return true;
       
};



// actualiza la cita segun los parametros
const updateCita = (idCita,  hora, especialidad, cedulaMedico) => {

    console.log(idCita, "id que me llega");

    var medico = getMedico(cedulaMedico);
  
    var citas = getCitas();

    for (let i = 0; i < citas.length; i++) {

        if (citas[i].id === parseInt(idCita) ) {
           citas[i].hora = hora;
           citas[i].especialidad = especialidad;
           citas[i].cedulaMedico = cedulaMedico;
           citas[i].nombreMedico = medico.nombre;
           citas[i].estado = "Pendiente";
           break;
        }
    };

    localStorage.setItem("citas", JSON.stringify(citas));
   
    return true;
};




// verifica el horario de cita
const verifcarHorarioDeCita = (fecha, hora, medico ) => {

    //validar que no agende citas a la misma hora del mismo dia, asi sea con otro medico

    var citas = getCitas();

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].fecha === fecha && citas[i].hora === hora && citas[i].cedulaMedico === medico) {
            return false;
        }
    }
   
    return true;

};


//actualiza el estado  de la cita
const actualizarEstadoCita = (id) => {

    var citas = getCitas();

    var resultado;

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].id === id) {

            if(citas[i].estado === "Pendiente"){
                citas[i].estado = "Aprobado";
                resultado = true;
                
            }else{
                citas[i].estado = "Pendiente";
                resultado = false;
            }
           
        }
    }


    localStorage.setItem("citas", JSON.stringify(citas));

    return resultado;
    
};


// eliminar la cita segun el id
const eliminarCita = (id) => {

    var citas = getCitas();

    for (let i = 0; i < citas.length; i++) {
       
        if (citas[i].id === id) {

            citas.splice(i,1);

            break;
        }
    }


    localStorage.setItem("citas", JSON.stringify(citas));

    return true;
    
};





// userSessionSessionStorage y userSessionLocalStorage

// obtengo la variable de sesion del storage
const getSessionStorageUser = () => {

    var userSessionSessionStorage = []; 
    userSessionSessionStorage =  JSON.parse(sessionStorage.getItem("sesionUser"));

    return userSessionSessionStorage.nombreUsuario;

};


const getSessionStorageUserID = () => {

    var userSessionSessionStorage = []; 
    userSessionSessionStorage =  JSON.parse(sessionStorage.getItem("sesionUser"));

    return userSessionSessionStorage.id;

};

// obtengo la variable de sesion del local storage
const getLocalStorageUser = () => {

    var userLocalSessionStorage = []; 
    userLocalSessionStorage =  JSON.parse(localStorage.getItem("sesionUser"));
    return userLocalSessionStorage.nombreUsuario;

};



// generador de primary key para las citas
const getIndentificadorCita = () => {

    var identificadorCita = JSON.parse(localStorage.getItem("identificadorCita"));

    if(identificadorCita != null){
        return identificadorCita.id;
    }else{
        localStorage.setItem("identificadorCita", JSON.stringify({id:1}));
        identificadorCita = JSON.parse(localStorage.getItem("identificadorCita"));
        return identificadorCita.id;
    }
};

//incrementa el contador del generador
const incrementarIndentificadorCita = () => {
    var identificadorCita = JSON.parse(localStorage.getItem("identificadorCita"));
    var nuevoIdentificador = identificadorCita.id +1;
    localStorage.setItem("identificadorCita", JSON.stringify({id:nuevoIdentificador}));
};



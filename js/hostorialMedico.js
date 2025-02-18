/* expediente de citas medicas */

const cargarExpediente =  () => {
    var citas = getCitasTodas(getSessionStorageUser()); // Obtener todas las citas
    console.log(citas);
    
    const expedienteBody = document.querySelector('.expediente_body');
    expedienteBody.innerHTML = ""; // Limpiar contenido previo
  
    citas.forEach(cita => {
        let citaDiv = document.createElement('div');
        citaDiv.classList.add('expediente_cita');
        
        citaDiv.innerHTML = `
            <div class="expediente_cita_head">
                <p><span class="subtitle_cita_expediente">ID:</span> ${cita.id}</p>
                <p><span class="subtitle_cita_expediente">Fecha:</span> ${cita.fecha}</p>
            </div>
            <p><span class="subtitle_cita_expediente">Hora:</span> ${cita.hora}</p>
            <p><span class="subtitle_cita_expediente">Doctor:</span> ${cita.nombreMedico} / ${cita.cedulaMedico} / ${cita.especialidad}</p>
            <p><span class="subtitle_cita_expediente">Paciente:</span> ${cita.usuarioCedula}</p>
            <br>
            <p><span class="subtitle_cita_expediente">Estado de cita:</span> ${cita.estado}</p>
        `;
        
        expedienteBody.appendChild(citaDiv);
    });
  };
  
  
  cargarExpediente();





















  //obtener variables de session para colocarlas en la bienvenida
const getNombreApellidosVariablesDeSesion = async () => {

    var bienvenida_nameUser = document.getElementById("bienvenida_nameUser");
  
    if( getUsuario(getSessionStorageUser()) != null ){
  
      var datosUser =  await getUsuario(getSessionStorageUser());
  
      var nombreApellidos = datosUser.nombre + " " + datosUser.apellidos;
  
      bienvenida_nameUser.textContent = nombreApellidos;
  
    }else{
  
      var datosMedico = await getMedico(getSessionStorageUser());
  
      var nombreApellidos = datosMedico.nombre + " " +datosMedico.apellidos;
  
      bienvenida_nameUser.textContent = nombreApellidos;
  
    }
    
  };
  
  getNombreApellidosVariablesDeSesion();
  
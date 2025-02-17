import { agregarComentario } from '/js/ConsumoAPI/ConsumoComentario.js';
import { obtenerFechaActual } from '/js/Util/fechas.js';
import { formatearFecha } from '/js/Util/fechas.js';
import { obtenerTodosTopicos, agregarTopico } from '/js/ConsumoAPI/ConsumoForo.js';

const topicos = await obtenerTodosTopicos();

const contenedorForo = document.getElementById('contenedorForo');

topicos.forEach(topico => {
  const itemForo = document.createElement('div');
  itemForo.classList.add('itemForo');
  itemForo.dataset.value = topico.id;

  const contenedorNuevoComentario = document.createElement('section');
  contenedorNuevoComentario.classList.add('contenedorNuevoComentario');

  const tituloNuevoComentario = document.createElement('h4');
  tituloNuevoComentario.textContent = 'Agregar Comentario';
  const textAreaNuevoComentario = document.createElement('textarea');
  const botonNuevoComentario = document.createElement('button');
  botonNuevoComentario.textContent = 'Contestar';
  botonNuevoComentario.disabled = true;

  contenedorNuevoComentario.appendChild(tituloNuevoComentario);
  contenedorNuevoComentario.appendChild(textAreaNuevoComentario);
  contenedorNuevoComentario.appendChild(botonNuevoComentario);

  const hrSeparador = document.createElement('hr');

  itemForo.innerHTML = `
    <h3>${topico.asunto}</h3>
    <p>${topico.usuarioLecturaDTO.nombre} ${topico.usuarioLecturaDTO.apellidos}</p>
    <div class="foro-detalles">
      <p>${topico.contenido}</p>
      <h5>Comentarios</h5>
      <div class="comentariosContenedor"> 
      ${topico.comentarioLecturaDTO.map(comentario => {
        return `
          <div class="comentarioSingular">
            <p>${comentario.usuarioLecturaDTO.nombre} ${comentario.usuarioLecturaDTO.apellidos}</p>
            <p>${comentario.contenido}</p>
            <p>${formatearFecha(comentario.fechaHora)}</p>
          </div>
        `;
      }).join('')}
    </div>
    </div>
    ${hrSeparador.outerHTML}
  `;

  const foroDetalles = itemForo.querySelector('.foro-detalles');
  const listaComentarios = itemForo.querySelector('.comentariosContenedor');
  foroDetalles.appendChild(contenedorNuevoComentario);


  textAreaNuevoComentario.addEventListener('input', () => {
    botonNuevoComentario.disabled = textAreaNuevoComentario.value.trim() === '';
  });

  botonNuevoComentario.addEventListener('click', async () => {
    const contenidoComentario = textAreaNuevoComentario.value.trim();

    if (contenidoComentario) {
      const comentario = {
        idUsuario: 1,
        idTopico: topico.id,
        fechaHora: obtenerFechaActual(),
        contenido: contenidoComentario
      };

      try {
        await agregarComentario(comentario);

        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentarioSingular');
        nuevoComentario.innerHTML = `
          <p>${comentario.contenido}</p>
          <p>${formatearFecha(comentario.fechaHora)}</p>
        `;
        listaComentarios.appendChild(nuevoComentario);

        textAreaNuevoComentario.value = '';
        botonNuevoComentario.disabled = true;
      } catch (error) {
        console.error('Error al agregar el comentario:', error);
      }
    } else {
      alert('El comentario no puede estar vacío');
    }
  });

  contenedorForo.appendChild(itemForo);
});


const botonNuevoTopico = document.querySelector('#contenedorEncabezado button');
const modalCrearTopico = document.getElementById('modalCrearTopico');
const botonCerrarModal = modalCrearTopico.querySelector('.cerrar-modal');
const botonEnviarTopico = document.getElementById('botonEnviarTopico');
const tituloTopico = document.getElementById('tituloTopico');
const contenidoTopico = document.getElementById('contenidoTopico');

// Abrir el modal
botonNuevoTopico.addEventListener('click', () => {
  modalCrearTopico.style.display = 'block';
});

// Cerrar el modal
botonCerrarModal.addEventListener('click', () => {
  modalCrearTopico.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === modalCrearTopico) {
    modalCrearTopico.style.display = 'none';
  }
});

// Habilitar el botón solo si ambos campos tienen contenido
const validarCampos = () => {
  botonEnviarTopico.disabled = !(tituloTopico.value.trim() && contenidoTopico.value.trim());
};

tituloTopico.addEventListener('input', validarCampos);
contenidoTopico.addEventListener('input', validarCampos);


botonEnviarTopico.addEventListener('click', async () => {
  const titulo = tituloTopico.value.trim();
  const contenido = contenidoTopico.value.trim();

  if (titulo && contenido) {
    const nuevoTopico = {
      asunto: titulo,
      contenido: contenido,
      idUsuario: 1  
    };

    try {
      await agregarTopico(nuevoTopico);
      modalCrearTopico.style.display = 'none';
      tituloTopico.value = '';
      contenidoTopico.value = '';
      botonEnviarTopico.disabled = true;
      location.reload(); 
    } catch (error) {
      console.error('Error al crear el tópico:', error);
    }
  } 

});
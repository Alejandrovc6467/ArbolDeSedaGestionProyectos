import { agregarComentario } from '/js/ConsumoAPI/ConsumoComentario.js';
import { obtenerFechaActual } from '/js/Util/fechas.js';
import { obtenerTodosTopicos } from '/js/ConsumoAPI/ConsumoForo.js';

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

  contenedorNuevoComentario.appendChild(tituloNuevoComentario);
  contenedorNuevoComentario.appendChild(textAreaNuevoComentario);
  contenedorNuevoComentario.appendChild(botonNuevoComentario);

  const hrSeparador = document.createElement('hr');

  itemForo.innerHTML = `<h3>${topico.asunto}</h3>
    <p>${topico.usuarioLecturaDTO.nombre} ${topico.usuarioLecturaDTO.apellidos}</p>
    <div class="foro-detalles">
      <p>${topico.contenido}</p>
      ${contenedorNuevoComentario.outerHTML}
    </div>
    ${hrSeparador.outerHTML}
  `;

    botonNuevoComentario.addEventListener('click', async () => {

      const comentario = {
        idUsuario : 1,
        idTopico : topico.id,
        fechaHora : obtenerFechaActual(),
        contenido : textAreaNuevoComentario.value
      }
      await agregarComentario(comentario);
    });
  

  contenedorForo.appendChild(itemForo);

});



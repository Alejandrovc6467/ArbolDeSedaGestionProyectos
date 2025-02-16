import { API_URL } from "/js/ConsumoAPI/Util.js";

export async function agregarComentario(comentario) {

    fetch(`${API_URL}/comentario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comentario)
    })
        .then(response => response.json())
        .then(resultado => {
            return resultado;
        });

}

export async function obtenerComentariosPorTopico(idTopico) {

    return fetch(`${API_URL}/comentario/${idTopico}`)
        .then(response => response.json())
        .then(comentarios => {
            return comentarios;
        });

}
import { API_URL } from "/js/ConsumoAPI/Util.js";


export async function obtenerTodosTopicos() {
    
    return fetch(`${API_URL}/topico`)
        .then(response => response.json())
        .then(topicos => {
            return topicos;
        });

}

export async function agregarTopico(topico) {
    return fetch(`${API_URL}/topico`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(topico)
    })
        .then(response => response.json())
        .then(resultado => {
            return resultado;
        });
}
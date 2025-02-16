import { API_URL } from "/js/ConsumoAPI/Util.js";


export async function obtenerTodosTopicos() {
    
    return fetch(`${API_URL}/topico`)
        .then(response => response.json())
        .then(topicos => {
            return topicos;
        });

}

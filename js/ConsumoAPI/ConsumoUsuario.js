import { API_URL } from "/js/ConsumoAPI/Util.js";


export async function registrarUsuarioBD(usuario){
    return fetch(`${API_URL}/usuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => response.json())
        .then(resultado => {
            return resultado;
        });
}

export async function autenticarUsuarioBD(usuario) {
    try {
        const response = await fetch(`${API_URL}/usuario/autenticar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (response.status === 401  || response.status === 404) {
            return { autenticado: false, mensaje: 'Usuario o contraseña incorrectos' };
        }

        const resultado = await response.json();
        console.log(resultado);
        
        return { autenticado: true, usuario: resultado };

    } catch (error) {
        return { autenticado: false, mensaje: 'Error en el servidor' };
    }
}

export function obtenerFechaActual() {
    const fechaActual = new Date();
    return fechaActual.toISOString().split('T')[0];
}
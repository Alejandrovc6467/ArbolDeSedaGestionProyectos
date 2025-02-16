export function obtenerFechaActual() {
    const fechaActual = new Date();
    return fechaActual.toISOString().split('T')[0];
}

export function formatearFecha(fechaString) {
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const fecha = new Date(fechaString);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

    return `${dia} de ${mes} del ${anio}`;
}
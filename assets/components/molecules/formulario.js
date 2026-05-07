import { BloqueContenido } from './contenido.js';
import { Boton } from '../atoms/boton.js';

// Asegúrate de que los parámetros coincidan con la llamada en contenido.js
export const Formulario = (contenidoArray, configBoton) => {
    
    // Si configBoton llega como undefined (porque no se pasó en el objeto), 
    // el Átomo Botón usará sus valores por defecto.
    const botonData = typeof configBoton === 'string' 
        ? { texto: configBoton } 
        : (configBoton || {}); // Manejo defensivo si viene null/undefined

    return `
        <form onsubmit="event.preventDefault();">
            ${BloqueContenido(contenidoArray)}
            <div class="mt-4">
                ${Boton(botonData)}
            </div>
        </form>
    `;
};
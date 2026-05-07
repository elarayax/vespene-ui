import { BloqueContenido } from './contenido.js';

export const Columnas = (columnasArray) => {
    return `
        <div class="columns is-vcentered">
            ${columnasArray.map(col => `
                <div class="column ${col.clase || ''}">
                    ${BloqueContenido(col.contenido)}
                </div>
            `).join('')}
        </div>
    `;
};
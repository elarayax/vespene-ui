// assets/components/organisms/modelos.js
import { BloqueContenido } from '../molecules/contenido.js';

export const bloques = (config, listaDeContenido) => {
    // ¡IMPORTANTE! Comprueba que tengas el return
    return `
        <section class="section ${config.clase || ''}">
            <div class="container box">
                ${BloqueContenido(listaDeContenido)}
            </div>
        </section>
    `;
};
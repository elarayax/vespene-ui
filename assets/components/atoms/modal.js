import { BloqueContenido } from '../molecules/contenido.js';

export const Modal = (config) => {
    const { id, titulo, contenido, clase = "" } = config;

    // Si 'contenido' es un array, usamos el motor para renderizarlo
    const cuerpoModal = Array.isArray(contenido) 
        ? BloqueContenido(contenido) 
        : contenido;

    return `
    <div id="${id}" class="modal ${clase}">
      <div class="modal-background" onclick="document.getElementById('${id}').classList.remove('is-active')"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">${titulo}</p>
          <button class="delete" aria-label="close" onclick="document.getElementById('${id}').classList.remove('is-active')"></button>
        </header>
        <section class="modal-card-body">
          ${cuerpoModal}
        </section>
      </div>
    </div>`;
};
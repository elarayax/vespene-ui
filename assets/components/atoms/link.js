export const Enlace = (enlace, clase = 'has-text-dark', contenido) => {
    return `<a href="${enlace}" class="${clase}">${contenido}</a>`;
};
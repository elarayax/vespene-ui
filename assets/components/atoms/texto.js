export const Texto = (contenido, clase = 'has-text-dark', label = 'p') => {
    return `<${label} class="${clase}">${contenido}</${label}>`;
};
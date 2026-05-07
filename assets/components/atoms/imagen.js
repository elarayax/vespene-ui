export const Imagen = (url, clase = '', nombre = 'imagen estandar') => {
    return `<img src="${url}" class="${clase}" alt="${nombre}">`;
};
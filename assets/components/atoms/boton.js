export const Boton = (config) => {
    // Si el usuario solo pasó un string (ej: "Enviar"), lo transformamos en objeto
    const data = typeof config === 'string' ? { texto: config } : config;

    const { 
        texto = 'Enviar', 
        clase = 'button is-primary', 
        tipo = 'submit', 
        ...extras 
    } = data;

    // Convertimos los extras (onclick, id, etc.) en string
    const atributosAdicionales = Object.entries(extras)
        .map(([llave, valor]) => `${llave}='${valor}'`)
        .join(' ');

    return `
        <button type="${tipo}" class="${clase}" ${atributosAdicionales}>
            ${texto}
        </button>
    `;
};
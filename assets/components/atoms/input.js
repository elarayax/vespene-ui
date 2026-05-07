export const Input = (config) => {
    // Extraemos lo básico y el resto de atributos cae en 'extras'
    const { placeholder, inputTipo, tipo = 'text', clase = 'input', ...extras } = config;
    
    // Convertimos el objeto de extras en un string: key="value"
    const atributosStr = Object.entries(extras)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');

    return `
        <div class="field">
            <div class="control">
                <input class="${clase}" type="${inputTipo}" placeholder="${placeholder}" ${atributosStr}>
            </div>
        </div>`;
};
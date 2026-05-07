export const Tabla = (headers, filas) => {
    return `
        <table class="table is-fullwidth is-striped">
            <thead>
                <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
                ${filas.map(fila => `
                    <tr>${fila.map(celda => `<td>${celda}</td>`).join('')}</tr>
                `).join('')}
            </tbody>
        </table>`;
};
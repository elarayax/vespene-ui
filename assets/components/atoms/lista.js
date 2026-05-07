export const Lista = (items, clase = 'is-ul') => {
    const elementos = items.map(it => `<li>${it}</li>`).join('');
    return `<ul class="ml-5 ${clase}">${elementos}</ul>`;
};
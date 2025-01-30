document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('button');
    const input = document.getElementById('input');
    const list = document.getElementById('list');

    button.addEventListener('click', () => {
        let text = input.value;
        text = text.charAt(0).toUpperCase() + text.slice(1);
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(text));
        list.appendChild(listItem);
        input.value = '';
    });
});

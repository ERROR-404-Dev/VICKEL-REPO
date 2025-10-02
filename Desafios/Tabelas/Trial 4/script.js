// script.js

// Função para criar uma tabela
function createTable(data) {
    const table = document.createElement('table');
    table.border = '1';

    // Criar cabeçalho da tabela
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Criar corpo da tabela
    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    return table;
}

// Exemplo de dados
const data = [
    { Nome: 'Alice', Idade: 25, Cidade: 'São Paulo' },
    { Nome: 'Bob', Idade: 30, Cidade: 'Rio de Janeiro' },
    { Nome: 'Charlie', Idade: 35, Cidade: 'Belo Horizonte' }
];

// Inserir a tabela no DOM
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('table-container');
    const table = createTable(data);
    container.appendChild(table);
});
const url = "assets/dados/estados.json";
axios(url)
    .then(dados => criarTabela(dados.data));

function criarTabela(dados) {
    const table = document.createElement('table');

    for (let estado of dados) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = estado.id;
        tr.appendChild(td);

        let td2 = document.createElement('td');
        td2.innerHTML = estado.nome;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = estado.sigla;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
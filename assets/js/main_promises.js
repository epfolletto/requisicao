function request(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // abrindo uma requisição
        xhr.open(config.method, config.url, true);

        // checar quando essa requisição foi carregada (poderia ser xhr.onload)
        xhr.addEventListener('load', () => {
            // trata o status que voltou:
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    text: xhr.statusText
                })
            }
        })
        xhr.send();
    })
}

// função para criar a tabela
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

// faz a chamada da função request e passa um objeto de parâmetros
request({
    method: 'GET',
    url: "assets/dados/estados.json",
}).then(resposta => {
    const dados = JSON.parse(resposta);
    criarTabela(dados)
}).catch(e => {
    console.log(`${e.code}: ${e.text}`);
    console.log('Não deu certo a requisição');
});
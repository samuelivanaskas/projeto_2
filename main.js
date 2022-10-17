const form = document.getElementById('form-contato');
let linhas='';
const contato = [];
const numero = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {
    const inputnomeContato = document.getElementById('nome-contato');
    const inputnumeroContato = document.getElementById('numero-contato');

    if (contato.includes(inputnomeContato.value)) {
        alert (`O contato: ${inputnomeContato} já foi inserido`);
    } else {
        contato.push(inputnomeContato.value);
        numero.push(parseint(inputnumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputnomeContato.value}</td>`;
        linha += `<td>${inputnumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputnomeContato.value = '';
    inputnumeroContato.value ='';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const form = document.getElementById("formulario");
let linhas = '';
const listaNomes = [];
const listaTelefones = [];

form.addEventListener("submit", function(e)  {
    e.preventDefault();

    adicionarContato();
    atualizarTabela();
})

function adicionarContato () {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (listaNomes.includes ()) {
        alert (`O nome ${listaNomes} já foi inserido`)
    } else {
        listaNomes.push(nome);
        listaTelefones.push(parseFloat(telefone));

    let linha = `<tr>`;
        linha += `<td>${nome}</td>`;
        linha += `<td>${telefone}</td>`;
        linha += `<tr>`;
    
        linhas += linha

    nome.value = '';
    telefone.value = '';
    }
}

function atualizarTabela () {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

}
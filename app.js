// declaração de variáveis e laço de repetição for com
// inicialização i=0, condição i< amigos.length e incremento i++ a cada iteração
let amigos = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < amigos.length; i++){
    let item = document.createElement('li')
}

// função "adicionarAmigo" e lógica de funcionamento
function adicionarAmigo(){
    let campoNome = document.getElementById('amigo')
    let nome = campoNome.value;
    if (nome === ''){
        alert('Olá, insira um nome, por favor.')
        return;
    }
        if (amigos.includes(nome)) {
            alert('Esse nome já consta na lista, por favor, insira outro');
            return
        }
    amigos.push(nome)
    limparCampo();
    AtualizarLista();
    console.log(nome);
} 



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

// Função para inserção de nomes numa lista HTML
function AtualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
    amigos.forEach(function(nome) {
    lista.innerHTML += `<li>${nome}</li>`
    })
    }

AtualizarLista();

// Função para sortear um nome recebido da lista de maneira aleatoria
function sortearAmigo(){
    if (amigos.length === 0){
        alert('A lista de amigos ainda esta vazia! Por favor adicione um nome para o sorteio!')
        return;
    }
    let amigosAleatorios = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigosAleatorios];
    document.getElementById("resultado").innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
    amigos.splice(amigosAleatorios, 1);
    AtualizarLista();
} 
//Função para limpar o campo de inserção de nomes
function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}





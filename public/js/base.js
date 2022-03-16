const nome = "Raioni Esquincalha";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo", "Maria", "Pedro"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "Programador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
    ];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebido um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
console.log(pessoa.nome)

console.log("Idade:");
console.log(pessoa.idade)

console.log("Trabalho:");
console.log(pessoa.trabalho)
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    pessoas.forEach()
}

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

console.log(pessoas)

// imprimirPessoa(pessoaDefault);

// imprimirPessoa( {
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/UI Designer"
// });


//recebeEalteraNome("João Silva pereira");
//recebeEalteraNome("Maria Silva")

//alteraNome();
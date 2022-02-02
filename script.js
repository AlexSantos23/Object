let dados= {
    nome: "Alex",
    idade: 21,
    cabelo: "Preto"
}

dados.estiloMusical = "Rock"

delete dados.cabelo

console.log(dados)

let cadastro = [{
    nome: "Alex",
    idade: 21,
    telefone: 000000000,
    amigos: ["A","B","c","D"]
},{
    nome: "Liv",
    idade: 18,
    telefone: 00000000,
    amigos:["A","B","C","D"]
},{
    nome: "Gabriel",
    idade: 19,
    telefone: 0000000000,
    amigos:["A","B","C","D"]
},{
    nome: "Nathan",
    idade: 22,
    telefone: 000000,
    amigos: ["A","B","C","D"]
},{
    nome: "Landi",
    idade: 22,
    telefone: 0000000,
    amigos: ["A","B","C","D"]
}]

console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[2])




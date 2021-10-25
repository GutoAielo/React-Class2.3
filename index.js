//PROTOTYPES - heritage
function Pessoa(nome) {
  if (!nome) this.nome = 'José'
  else this.nome = nome

  this.dizerOla = () => console.log(this.nome + ' diz: OLá!')
}

let pessoaA = new Pessoa('Rogério')

Pessoa.digaOla = function () {
  console.log('Olá, meu nome é: ' + this.nome)
}

let pessoaB = new Pessoa('Claudia')

console.log('--------------------------------------------------')

try {
  pessoaA.digaOla()
} catch (e) {
  console.log('Falha no pessoaA.digaOla')
}
try {
  pessoaB.digaOla()
} catch (e) {
  console.log('Falha no pessoaB.digaOla')
}

console.log('--------------------------------------------------')

pessoaB.digaOla = function () {
  console.log('Meu nome é ' + pessoaB.nome)
}
try {
  pessoaA.digaOla()
} catch (e) {
  console.log('Falha no pessoaA.digaOla')
}
try {
  pessoaB.digaOla()
} catch (e) {
  console.log('Falha no pessoaB.digaOla')
}

console.log('--------------------------------------------------')

Pessoa.prototype.digaOla = function () {
  console.log('Ola, eu sou o(a): ' + this.nome)
}

let pessoaC = new Pessoa('Ana')

console.log('--------------------------------------------------')
try {
  pessoaA.digaOla()
} catch (e) {
  console.log('Falha no pessoaA.digaOla')
}
try {
  pessoaB.digaOla()
} catch (e) {
  console.log('Falha no pessoaB.digaOla')
}
try {
  pessoaC.digaOla()
} catch (e) {
  console.log('Falha no pessoaC.digaOla')
}

Pessoa.prototype.dizerOla = function () {
  console.log(this.nome + ' vou dizer outro Olá!')
}
pessoaB.dizerOla = function () {
  console.log(this.nome + ' consegue dizer outro Olá!')
}

console.log('--------------------------------------------------')
try {
  pessoaA.dizerOla()
} catch (e) {
  console.log('Falha no pessoaA.dizerOla')
}
try {
  pessoaB.dizerOla()
} catch (e) {
  console.log('Falha no pessoaB.dizerOla')
}
try {
  pessoaC.dizerOla()
} catch (e) {
  console.log('Falha no pessoaC.dizerOla')
}

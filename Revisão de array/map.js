Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(function (e) {
  return e * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e =>
  `R$ ${parseFloat(e)
    .toFixed(2)
    .replace(".", ",")}`;

resultado = nums
  .map(soma10)
  .map(triplo)
  .map(paraDinheiro);

console.log(resultado);

const carrinho = [
  '{ "nome": "Borracha", "preco": "3.45"}',
  '{ "nome": "Caderno", "preco": "13.90"}',
  '{ "nome": "Kit de lápis", "preco": "41.22"}',
  '{ "nome": "Caneta", "preco": "7.50"}'
];

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
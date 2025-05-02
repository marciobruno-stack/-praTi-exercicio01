const prompt = require('readline-sync').question;
// Exercício 1: Par ou Ímpar
let numero1 = Number(prompt("Digite um número inteiro para verificar se é par ou ímpar:"));

if (numero1 % 2 === 0) {
  console.log(`${numero1} é um número par.`);
} else {
  console.log(`${numero1} é um número ímpar.`);
}

// Exercício 2: Classificação de Idade

let idade = Number(prompt("Digite a idade da pessoa:"));

if (idade <= 12) {
  console.log("A pessoa é uma criança.");
} else if (idade <= 17) {
  console.log("A pessoa é um adolescente.");
} else if (idade <= 59) {
  console.log("A pessoa é um adulto.");
} else {
  console.log("A pessoa é um idoso.");
}

// Exercício 3: Classificação de Nota

let nota = parseFloat(prompt("Digite a nota (de 0 a 10):"));

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// Exercício 4: Menu Interativo com Switch-Case

console.log("=== MENU PRINCIPAL ===");
console.log("1. Dizer Olá");
console.log("2. Mostrar Data Atual");
console.log("3. Sair");

const opcao = prompt("Escolha uma opção (1-3): ");

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo(a)!");
    break;

  case "2":
    const dataAtual = new Date();
    console.log("Data atual:", dataAtual.toLocaleString());
    break;

  case "3":
    console.log("Encerrando o programa...");
    break;

  default:
    console.log("Opção inválida. Tente novamente.");
    break;
}

// Exercício 5: Cálculo de IMC

let peso = Number(prompt("Digite o peso em kg:"));
let altura = Number(prompt("Digite a altura em metros:"));

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`); // toFixed(2) para formatar com 2 casas decimais

if (imc < 18.5) {
  console.log("Categoria: Baixo peso");
} else if (imc < 25) {
  console.log("Categoria: Peso normal");
} else if (imc < 30) {
  console.log("Categoria: Sobrepeso");
} else {
  console.log("Categoria: Obesidade");
}

// Exercício 6: Verificação e Tipo de Triângulo

let ladoA = Number(prompt("Digite o valor do lado A:"));
let ladoB = Number(prompt("Digite o valor do lado B:"));
let ladoC = Number(prompt("Digite o valor do lado C:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("Os lados fornecidos formam um triângulo.");

  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo de triângulo: Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo de triângulo: Isósceles");
  } else {
    console.log("Tipo de triângulo: Escaleno");
  }
} else {
  console.log("Os lados fornecidos não formam um triângulo.");
}

// Exercício 7: Custo das Maçãs

let quantidadeMacas = Number(prompt("Digite o número de maçãs compradas:"));
let custoTotal;

if (quantidadeMacas < 12) {
  custoTotal = quantidadeMacas * 0.30;
} else {
  custoTotal = quantidadeMacas * 0.25;
}

console.log(`O valor total da compra é: R$ ${custoTotal.toFixed(2)}`);

// Exercício 8: Ordenar Dois Valores

let valorA = Number(prompt("Digite o primeiro valor:"));
let valorB = Number(prompt("Digite o segundo valor (diferente do primeiro):"));

if (valorA < valorB) {
  console.log(`Valores em ordem crescente: ${valorA}, ${valorB}`);
} else {
  console.log(`Valores em ordem crescente: ${valorB}, ${valorA}`);
}

// Exercício 9: Contagem Regressiva com For

console.log("Contagem regressiva:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercício 10: Escrever Número 10 Vezes

let numeroParaRepetir = Number(prompt("Digite um número inteiro para repetir 10 vezes:"));

for (let i = 0; i < 10; i++) {
  console.log(numeroParaRepetir);
}

// Exercício 11: Soma de 5 Números com For

let soma = 0;
console.log("Digite 5 números para calcular a soma:");

for (let i = 0; i < 5; i++) {
  let numeroLoop = Number(prompt(`Digite o número ${i + 1}:`));
  soma += numeroLoop;
}

console.log(`A soma total dos números é: ${soma}`);

// Exercício 12: Tabuada com For

let numeroTabuada = Number(prompt("Digite um número para exibir a tabuada (de 1 a 10):"));

if (numeroTabuada >= 1 && numeroTabuada <= 10) {
  console.log(`Tabuada do ${numeroTabuada}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
  }
} else {
  console.log("Número fora do intervalo de 1 a 10.");
}

// Exercício 13: Média Aritmética com Loop

let somaMedia = 0;
let contadorMedia = 0;
let numeroMedia;

console.log("Digite números decimais para calcular a média. Digite 0 para parar.");

while (true) {
  numeroMedia = Number(prompt("Digite um número:"));

  if (numeroMedia === 0) {
    break; // Sai do loop se o usuário digitar 0
  }

  somaMedia += numeroMedia;
  contadorMedia++;
}

if (contadorMedia > 0) {
  let media = somaMedia / contadorMedia;
  console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número válido foi inserido para calcular a média.");
}

// Exercício 14: Fatorial com For

let numeroFatorial = Number(prompt("Digite um número inteiro não negativo para calcular o fatorial:"));

if (numeroFatorial < 0) {
  console.log("Fatorial não definido para números negativos.");
} else if (numeroFatorial === 0) {
  console.log("O fatorial de 0 é 1.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);
}

// Exercício 15: Sequência de Fibonacci com For

console.log("Os primeiros 10 números da sequência de Fibonacci:");

let a = 0;
let b = 1;

console.log(a); // Imprime o primeiro número (0)
console.log(b); // Imprime o segundo número (1)

for (let i = 3; i <= 10; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}
# Exercícios de Lógica de Programação em JavaScript

Este repositório contém as soluções em JavaScript para uma lista de exercícios de lógica de programação. Os códigos utilizam as funções `prompt()` para entrada de dados e `console.log()` para saída.

**Nota:** A função `prompt()` é nativa de ambientes de navegador. Para executar estes códigos em Node.js, é necessário usar uma biblioteca externa que simule este comportamento. Utilizaremos a biblioteca `readline-sync`.

## Pré-requisitos

* Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
* Um editor de código de sua preferência (como VS Code, Sublime Text, Atom, etc.).

## Configuração do Ambiente (para Node.js)

1.  Abra o terminal ou prompt de comando.
2.  Crie um diretório para seus exercícios e navegue até ele:
    ```bash
    mkdir exercicios_js
    cd exercicios_js
    ```
3.  Inicialize um projeto Node.js. Isso criará um arquivo `package.json`.
    ```bash
    npm init -y
    ```
4.  Instale a biblioteca `readline-sync`:
    ```bash
    npm install readline-sync
    ```

## Adaptando o Código para Node.js

Os códigos JavaScript fornecidos utilizam `prompt()`. Para que funcionem no Node.js com `readline-sync`, você precisará fazer uma pequena modificação:

1.  No início de cada arquivo JavaScript, adicione a seguinte linha para importar a biblioteca:
    ```javascript
    const prompt = require('readline-sync').question;
    ```
    Isso atribui a função `question` da biblioteca `readline-sync` à variável `prompt`, substituindo a função nativa do navegador.

2.  As chamadas para `prompt()` no código devem ser mantidas, mas agora elas usarão a função `question` da `readline-sync`. A função `question` lê uma linha de entrada do usuário.

3.  Se a entrada esperada for um número inteiro ou decimal, você ainda precisará converter o resultado da leitura (que é sempre uma string) usando `parseInt()` ou `parseFloat()`, respectivamente, como já está nos exemplos de código.

## Como Executar os Exercícios

1.  Crie um arquivo `.js` para cada exercício (por exemplo, `exercicio1.js`, `exercicio2.js`, etc.) dentro do diretório `exercicios_js`.
2.  Copie o código JavaScript do exercício desejado para o arquivo correspondente.
3.  Adicione a linha `const prompt = require('readline-sync').question;` no início do arquivo.
4.  Salve o arquivo.
5.  Abra o terminal ou prompt de comando no diretório `exercicios_js`.
6.  Execute o exercício usando o comando `node` seguido pelo nome do arquivo:
    ```bash
    node exercicio1.js
    ```
    O programa será executado e solicitará a entrada do usuário via terminal.

## Exemplo Completo (Exercício 1)

Vamos ver o Exercício 1 adaptado para Node.js:

```javascript
// exercicio1.js
const prompt = require('readline-sync').question; // Importa a função question da readline-sync

// Exercício 1: Par ou Ímpar
const prompt = require("prompt-sync")();
let numero1 = parseInt(prompt("Digite um número inteiro para verificar se é par ou ímpar:"));

if (numero1 % 2 === 0) {
  console.log(`${numero1} é um número par.`);
} else {
  console.log(`${numero1} é um número ímpar.`);
}

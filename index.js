//Para salvar o projeto no GitHub deve se seguir os seguintes passos: 
//'Git Init', cria uma pasta oculta que irá guardar todas as alterações do seu código.
//'Git Status', informa qual é o atual status dos seus arquivos.
//'Git Add .' adiciona todos os arquivo na caixinha para ser commitado.
//'Git commit -m "nome do arquivo"', cria uma etiqueta com suas informações para ser enviado ao servidor.
//Quando todos esses comandos forem executados, com êxito, você irá criar um repositório no GitHub.
//Após o repositório ser criado, o próprio GitHub irá disponibilizar os comandos para a adição dos arquivos no Repositório.

const http = require("http");
const porta = 3003;
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Insira a sigla de um desses estados: Acre, São Paulo (SP), Rio de Janeiro (RJ) na rota '/' para receber de volta a capital do estado.");
});

app.get("/SP", (req, res) => {
    res.send("A capital do estado de SP é São Paulo.");
});

app.get("/RJ", (req, res) => {
    res.send("A capital do estado de RJ é a cidade do Rio de Janeiro.");
});

app.get("/AC", (req, res) => {
    res.send("A capital do estado do Acre é a cidade de Rio Branco.");
});

app.get("/AM", (req, res) => {
    res.send("A capital do estado de Amazonas é a cidade de Manaus.");
});

app.use((req, res) => {
    res.status(404).send("Rota não encontrada!");
});

app.listen(porta, () => {
    console.log("Servidor rodando");
    console.log("Enderço: http://localhost:" + porta);
});

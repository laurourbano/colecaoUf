const express = require('express');
const colecaoUf = require('../colecaoUf');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf);
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
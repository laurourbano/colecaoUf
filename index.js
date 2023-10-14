const express = require('express');
const colecaoUf = require('./colecaoUf');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.json({
        "descrição": 'API de estados',
        "endpoint listar todos": 'http://localhost:8080/ufs'
    });
});

app.get('/ufs', (_, res) => {
    res.json(colecaoUf);
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});
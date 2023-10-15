const express = require('express');
const {
    buscarUfs,
    buscarUfsPorNome,
    buscarUfPorId
} = require('./servicos/servico');
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

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca; // Pega o valor do parâmetro busca
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs(); // Se nomeUf for true, retorna ufsFiltradas, se não, retorna dados

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({
            "erro": "Nenhuma UF não encontrada"
        });
    }
});

app.get('/ufs/:id', (req, res) => {
    const uf = buscarUfPorId(req.params.id);
    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.id))) {
        res.status(400).json({
            "erro": "O ID deve ser um número"
        });
    } else {
        res.status(404).json({
            "erro": "UF não encontrada"
        });
    }

});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT}`); // Inicia o servidor na porta 8080
});
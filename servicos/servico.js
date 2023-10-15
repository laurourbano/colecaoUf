const dados = require('../dados/dados')


const buscarUfs = () => {
    return dados;
};

const buscarUfsPorNome = (nomeUf) => {
    return dados
        .filter(uf => uf
            .nome
            .toLowerCase() // Transforma a string em minúscula
            .normalize('NFD') // Remove acentos
            .replace(/[\u0300-\u036f]/g, "")
            .includes(nomeUf
                .toLowerCase() // Transforma a string em minúscula
                .normalize('NFD') // Remove acentos
                .replace(/[\u0300-\u036f]/g, "")));
};

const buscarUfPorId = (id) => {
    return dados.find(uf => uf.id == id);
}

module.exports = {
    buscarUfs,
    buscarUfsPorNome,
    buscarUfPorId
}
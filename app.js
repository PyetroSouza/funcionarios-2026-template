'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }

function criarCard(funcionarios) {
    const card = document.createElement('div')
    card.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${funcionarios.imagem}`
    foto.alt = `Foto de ${funcionarios.nome}`

    const nome = document.createElement('h3')
    nome.textContent = funcionarios.nome

    const cargo = document.createElement('span')
    cargo.textContent = funcionarios.cargo

    card.replaceChildren(foto,nome,cargo)

    return card

}

const card = funcionarios.map(criarCard)

document.getElementById('container').replaceChildren(...card)

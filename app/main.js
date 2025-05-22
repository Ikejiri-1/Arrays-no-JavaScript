import { exibirLivrosNaTela } from './forEach.js'
import { aplicarDesconto } from './map.js'
import { filtrarLivros } from './filter.js'
import { ordenarLivrosPorPreco } from './sort.js'

export let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

buscarLivrosDaAPI()

export async function buscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)

}







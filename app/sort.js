import { livros } from './main.js';
import { exibirLivrosNaTela } from './forEach.js';
import { aplicarDesconto } from './map.js';
let botaoOrdenar = document.getElementById('btnOrdenarPorPreco')
botaoOrdenar.addEventListener('click', ordenarLivrosPorPreco);

export function ordenarLivrosPorPreco() {
    const livrosOrdenados = livros.sort((a, b) =>
        a.preco - b.preco
    );
    exibirLivrosNaTela(aplicarDesconto(livrosOrdenados));

}



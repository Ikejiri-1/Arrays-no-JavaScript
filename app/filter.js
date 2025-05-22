import { exibirLivrosNaTela } from './forEach.js';
import { livros } from './main.js'
import { aplicarDesconto } from './map.js';
import { valorTotalDosLivrosDisponiveis } from './forEach.js';
import { calcularValorTotalDeLivrosDisponiveis } from './reduce.js';

const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

export function filtrarLivros() {
    
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria === 'disponivel' ? filtrarPorDisponibilidade() 
    : filtrarPorCategoria(categoria);
    
    let livrosComDesconto = aplicarDesconto(livrosFiltrados);
    exibirLivrosNaTela(livrosComDesconto);

    
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    console.log(valorTotal)
    exibirValorTotalDosLivrosDisponiveis(valorTotal)
    categoria === 'disponivel' ? exibirValorTotalDosLivrosDisponiveis(valorTotal) : valorTotalDosLivrosDisponiveis.innerHTML = ""



function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    valorTotalDosLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}
}

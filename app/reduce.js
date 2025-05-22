import {livros} from './main.js'
import { filtrarLivros } from './filter.js'

       export function calcularValorTotalDeLivrosDisponiveis(livros){
       return livros.reduce((acc, livro)=> acc + livro.preco , 0).toFixed(2)
    }
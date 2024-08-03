import * as fs from 'node:fs';
import Relatorio from './Relatorio.js';

export default class CidadesTXTReporter extends Relatorio {

  ler(caminho) {
    this.dados = JSON.parse(fs.readFileSync(caminho, 'utf-8')); 
    console.log('Dados lidos do arquivo:', this.dados);
  }

  parse() {
    this.cidades = this.dados.estados.flatMap(estado => estado.cidades);
    console.log('Dados parseados:', this.cidades);
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let cidade of this.cidades) {
      result += '* ' + cidade + '\n';
    }

    return result;
  }
}

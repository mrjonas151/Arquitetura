import * as fs from 'node:fs';
import Relatorio from './Relatorio.js';

export default class CidadesHTMLReport extends Relatorio {

  ler(caminho) {
    this.dados = JSON.parse(fs.readFileSync(caminho, 'utf-8')); 
    console.log('Dados lidos do arquivo:', this.dados);
  }

  parse() {
    this.cidades = this.dados.estados.flatMap(estado => estado.cidades);
    console.log('Dados parseados:', this.cidades);
  }

  reportar() {
    let result = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>
    `;

    for (let cidade of this.cidades) {
      result += '     <li>' + cidade + '</li>\n';
    }

    result += `
        </ul>
      </body>
    </html>`;

    return result;
  }
}

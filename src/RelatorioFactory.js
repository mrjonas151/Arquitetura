import CidadesHTMLReport from './CidadesHTMLReporter.js';
import CidadesTXTReporter from './CidadesTXTReporter.js';

export default class RelatorioFactory {
  static criarRelatorio(tipo) {
    switch (tipo) {
      case 'HTML':
        return new CidadesHTMLReport();
      case 'TXT':
        return new CidadesTXTReporter();
      default:
        throw new Error('Tipo de relatório não suportado');
    }
  }
}

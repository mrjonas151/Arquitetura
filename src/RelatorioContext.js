export default class RelatorioContext {
    constructor(relatorio) {
      this.relatorio = relatorio;
    }
  
    setRelatorio(relatorio) {
      this.relatorio = relatorio;
    }
  
    gerarRelatorio(caminho) {
      this.relatorio.ler(caminho);
      this.relatorio.parse();
      return this.relatorio.reportar();
    }
  }
  
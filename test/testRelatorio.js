import RelatorioFactory from '../src/RelatorioFactory.js';
import RelatorioContext from '../src/RelatorioContext.js';

const caminho = './data/cidades-1.json';
console.log('Diretório de trabalho atual:', process.cwd());


const testRelatorio = (tipo) => {
  const relatorio = RelatorioFactory.criarRelatorio(tipo);
  const contexto = new RelatorioContext(relatorio);

  relatorio.ler(caminho);
  relatorio.parse();

  const resultado = contexto.gerarRelatorio(caminho);

  console.log(`Relatório ${tipo}:`);
  console.log(resultado);
};

testRelatorio('HTML');
testRelatorio('TXT');

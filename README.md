# Projeto de Relatórios de Cidades UTFPR

Este projeto demonstra a aplicação de padrões de projeto criacionais, estruturais e comportamentais, além de refatorações baseadas nos princípios SOLID. O objetivo é gerar relatórios de cidades em formatos HTML e TXT a partir de dados JSON.

## Repositório

https://github.com/mrjonas151/Arquitetura

## Padrões de Projeto Utilizados

1. **Padrão Criacional: Factory Method**
   - **Justificativa:** O padrão Factory Method foi utilizado para criar instâncias dos relatórios em diferentes formatos (HTML e TXT). Este padrão permite a criação de objetos sem especificar a classe exata do objeto que será criado, promovendo a flexibilidade e a extensibilidade do código.

2. **Padrão Estrutural: Template Method**
   - **Justificativa:** O padrão Template Method foi aplicado na classe abstrata `Relatorio`. Ele define o esqueleto do algoritmo para gerar um relatório, permitindo que as subclasses implementem detalhes específicos. Isso promove a reutilização de código e a consistência na geração dos relatórios.

3. **Padrão Comportamental: Strategy**
   - **Justificativa:** O padrão Strategy foi utilizado para encapsular o comportamento de geração de relatórios em diferentes formatos. A classe `RelatorioContext` utiliza uma instância de `Relatorio` (que pode ser HTML ou TXT) e delega a responsabilidade de gerar o relatório para a estratégia apropriada. Isso permite a troca de algoritmos de forma dinâmica.

## Refatorações Realizadas

1. **Uso do Princípio da Responsabilidade Única (SRP)**
   - **Antes:** As classes de relatórios tinham múltiplas responsabilidades (leitura, parsing e formatação).
   - **Depois:** Separação das responsabilidades em métodos distintos e criação de uma classe base abstrata `Relatorio` para definir a interface comum.

2. **Uso do Princípio da Substituição de Liskov (LSP)**
   - **Antes:** Classes concretas não garantiam que os métodos da classe base eram corretamente implementados.
   - **Depois:** Implementação de métodos na classe base `Relatorio` que devem ser sobrescritos pelas subclasses, garantindo que a substituição de subclasses seja segura.

3. **Uso do Princípio da Inversão de Dependência (DIP)**
   - **Antes:** Dependências diretas nas classes de relatório.
   - **Depois:** Uso do padrão Factory Method para criar instâncias e injeção de dependências, permitindo que as classes de relatório dependam de abstrações em vez de implementações concretas.

## Executando o Projeto

1. **Instalar Dependências**
   Certifique-se de que todas as dependências estão instaladas. No diretório do projeto, execute:
   ```bash
   npm install

Logo depois 

  ```bash
   node test/testRelatorio.js


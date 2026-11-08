# Heurísticas de Usabilidade

Avaliação baseada nas 10 heurísticas de Nielsen. Marque cada item apenas quando a interface o atender, com evidência observável.

<div class="guia-panel" data-checklist-progress data-category="heuristicas">
  <div class="guia-panel-head">
    <strong>Progresso desta página</strong>
    <span data-checklist-count aria-live="polite">0/30 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" class="guia-btn" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Leia cada critério, avalie a interface com evidências observáveis e marque apenas quando a condição for atendida. O progresso fica salvo **somente neste navegador** e alimenta a [Visão geral do progresso](progresso.md).

## a) Visibilidade do status do sistema

- [ ] O sistema fornece feedback visual imediato após uma ação (ex.: o botão muda de cor ou exibe um spinner ao ser clicado).
- [ ] Indicadores de carregamento (barras de progresso, mensagens de “carregando”) são exibidos em processos que demoram mais de alguns segundos.
- [ ] O usuário consegue identificar facilmente em qual tela, aba ou etapa do processo ele se encontra no momento.

## b) Compatibilidade entre o sistema e o mundo real

- [ ] Os termos, frases e conceitos usados são familiares ao usuário final (evitando jargões técnicos de banco de dados ou engenharia).
- [ ] Os ícones utilizados fazem sentido no mundo real e no contexto do usuário (ex.: ícone de lixeira para excluir, disquete para salvar).
- [ ] A ordem e a organização das informações seguem uma sequência lógica e natural para quem está utilizando a ferramenta.

## c) Controle e liberdade para o usuário

- [ ] Existe uma opção clara e acessível de “Desfazer” para reverter ações importantes.
- [ ] Telas de cadastro, formulários ou janelas modais possuem um botão de “Cancelar” ou um “X” visível para interromper o fluxo.
- [ ] O usuário consegue voltar à página anterior facilmente através da interface, sem depender exclusivamente do botão de voltar do navegador.

## d) Consistência e padronização

- [ ] Cores, tipografia e estilos de botões (primários e secundários) são os mesmos em todas as telas do projeto.
- [ ] A nomenclatura é consistente em todo o sistema (ex.: não misturar “Cadastrar”, “Adicionar” e “Inserir” para a mesma ação).
- [ ] O layout segue os padrões de interface da web esperados pelos usuários (ex.: perfil no canto superior direito, menu de navegação claro).

## e) Prevenção de erros

- [ ] O sistema exige uma confirmação explícita antes de executar ações destrutivas (ex.: “Tem certeza que deseja excluir este registro?”).
- [ ] Os campos de entrada de dados possuem restrições (ex.: máscaras para CPF/CNPJ, calendários para selecionar datas em vez de texto livre).
- [ ] A interface desabilita botões de envio até que os campos obrigatórios estejam corretamente preenchidos.

## f) Reconhecimento em vez de memorização

- [ ] Instruções para uso de uma ferramenta específica estão visíveis ou facilmente acessíveis diretamente na tela em que são necessárias.
- [ ] Em formulários divididos em várias etapas, os dados essenciais das etapas anteriores continuam visíveis para consulta.
- [ ] O sistema exibe o histórico de buscas recentes ou mantém os filtros visíveis para que o usuário não precise lembrar o que acabou de pesquisar.

## g) Eficiência e flexibilidade de uso

- [ ] Existem atalhos de teclado para as ações mais frequentes.
- [ ] O sistema permite a execução de ações em massa para acelerar o trabalho (ex.: selecionar vários itens em uma tabela para excluí-los ou aprová-los de uma vez).
- [ ] A interface permite que as ferramentas mais utilizadas pelo usuário sejam facilmente acessadas (ex.: painéis customizáveis ou favoritos).

## h) Estética e design minimalista

- [ ] As telas estão livres de informações redundantes, ruídos visuais ou elementos decorativos que não ajudam na tarefa atual.
- [ ] A hierarquia visual (tamanho de fontes, contrastes) guia os olhos do usuário rapidamente para a ação mais importante da tela.
- [ ] Os textos explicativos e diálogos do sistema são curtos, objetivos e vão direto ao ponto.

## i) Ajude os usuários a reconhecerem, diagnosticarem e recuperarem-se de erros

- [ ] As mensagens de erro são escritas em linguagem humana (sem exibir códigos genéricos como “Erro 500” ou “stack traces” na interface do usuário).
- [ ] A mensagem explica claramente qual foi o problema (ex.: “A senha informada deve ter pelo menos 8 caracteres”).
- [ ] O sistema aponta para o campo exato onde o erro ocorreu e sugere uma solução prática para corrigi-lo imediatamente.

## j) Ajuda e documentação

- [ ] Existe uma seção de “Perguntas Frequentes” (FAQ), manual de uso ou wiki facilmente acessível a partir de qualquer tela.
- [ ] A documentação é fácil de navegar e permite realizar pesquisas por palavras-chave.
- [ ] O sistema oferece “ajuda contextual” (ex.: pequenos ícones de “?” ou tooltips que explicam o que significa um campo específico ao passar o mouse).
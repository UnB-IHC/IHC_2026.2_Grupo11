---
hide:
  - navigation
  - toc
  - footer
---

# Apêndice A — Roteiro do teste de usabilidade

!!! info "Fonte do anexo"
    Fonte: Roteiro_Teste_Usabilidade_Detran_DF_Tg_IHC_03_ABNT_v3.1. Os cenários e os tempos de referência foram transcritos do roteiro. Ele ainda se identifica como “para validação” e mantém campos de caminhos, respostas e limites finais em aberto. Os caminhos descritos abaixo foram reconstituídos da sessão para documentar o percurso de referência, sem atribuir validação prévia não registrada.

## Ordem da sessão e orientação { #a1 }

A sessão seguiu esta ordem:

1. Acolhida;
2. Leitura e assinatura do termo;
3. Entrevista inicial;
4. Orientação para pensar em voz alta e aquecimento;
5. Tarefas T01 a T04;
6. SUS;
7. Entrevista final;
8. Encerramento.

Duração planejada: 40 a 45 minutos. O cronômetro deve iniciar após a leitura do cenário e parar no critério de sucesso, na desistência ou no limite aplicável.

Ler somente o cenário. Incentivos neutros: “continue falando” e “o que está pensando agora?”. Registrar toda dica de navegação. Uma dica permite “Sucesso com ajuda”; mais de uma, desistência, conclusão incorreta ou limite excedido configuram “Falha”. Nenhuma tarefa deve exigir dados pessoais reais; encerrar antes de sua inserção ou envio.

## Tempos de referência e limites { #a2 }

<div class="rel-table-wrap" role="region" aria-label="Tempos de referência e limites por tarefa (tabela com rolagem horizontal)" tabindex="0">
<table class="rel-table">
  <caption>Tempos de referência, faixas de limite e tempo anotado de P1</caption>
  <thead>
    <tr>
      <th scope="col">Tarefa</th>
      <th scope="col" class="rel-num">Referência do ensaio</th>
      <th scope="col" class="rel-num">Faixa de limite registrada</th>
      <th scope="col" class="rel-num">Tempo anotado de P1</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">T01</th><td class="rel-num">30 s</td><td class="rel-num">60 a 120 s</td><td class="rel-num">20 s</td></tr>
    <tr><th scope="row">T02</th><td class="rel-num">60 s</td><td class="rel-num">120 a 160 s</td><td class="rel-num">300 s</td></tr>
    <tr><th scope="row">T03</th><td class="rel-num">30 s</td><td class="rel-num">60 a 120 s</td><td class="rel-num">85 s</td></tr>
    <tr><th scope="row">T04</th><td class="rel-num">40 s</td><td class="rel-num">80 a 140 s</td><td class="rel-num">90 s</td></tr>
  </tbody>
</table>
</div>

Justificativa prevista: adotar o maior valor entre 2 × a referência e referência + 60 s, arredondar ao minuto e ajustar ao orçamento da sessão. A regra produziria 120 s em cada tarefa; esses valores são apenas a aplicação aritmética da regra e não limites comprovadamente fixados antes da sessão. As faixas anotadas totalizam de 320 a 540 s (5 min 20 s a 9 min), dentro dos 22 minutos reservados às tarefas.

Os 20, 300, 85 e 90 segundos são registros da execução de P1 e não tempos do ensaio. T02 supera inclusive o teto de 160 s. Não há registro do valor final escolhido para cada limite nem da realização e data do ensaio; esses dados não foram completados por suposição.

## Cenários e critérios por tarefa { #a3 }

### T01 — Postos de atendimento { #t01 }

<dl class="rel-spec">
  <div>
    <dt>Cenário</dt>
    <dd><em>“Você precisa ir pessoalmente ao Detran-DF para fazer uma biometria. Encontre um local onde isso possa ser resolvido e descubra o endereço e o horário de funcionamento.”</em></dd>
  </div>
  <div>
    <dt>Ponto de partida</dt>
    <dd>Página inicial do portal institucional.</dd>
  </div>
  <div>
    <dt>Critério de sucesso</dt>
    <dd>Exibir a página de um posto que realize o serviço e identificar endereço e horário. O posto e a resposta oficial de referência estão em campo de validação no roteiro.</dd>
  </div>
  <div>
    <dt>Caminho de referência</dt>
    <dd>Página inicial → busca por postos de atendimento → resultado oficial de postos → identificação de endereço e horário. O nome do posto e a confirmação de atendimento de biometria não foram previamente preenchidos.</dd>
  </div>
  <div>
    <dt>Tempo e justificativa</dt>
    <dd>Referência: 30 s; faixa: 60 a 120 s. A margem destina-se à busca do posto e à leitura de duas informações (endereço e horário).</dd>
  </div>
</dl>

### T02 — Renovação da CNH { #t02 }

<dl class="rel-spec">
  <div>
    <dt>Cenário</dt>
    <dd><em>“Sua CNH está próxima do vencimento. Encontre as orientações oficiais para renová-la no Distrito Federal.”</em></dd>
  </div>
  <div>
    <dt>Ponto de partida</dt>
    <dd>Página inicial do portal institucional.</dd>
  </div>
  <div>
    <dt>Critério de sucesso</dt>
    <dd>Abrir as orientações oficiais de renovação e identificar os procedimentos aplicáveis. O roteiro exige N de M procedimentos, mas não fixa N, M nem o perfil de referência; não é possível validar integralmente o critério original.</dd>
  </div>
  <div>
    <dt>Caminho de referência</dt>
    <dd>Página inicial → pesquisa por renovação da CNH no portal institucional → orientações oficiais/perguntas frequentes de habilitação → leitura dos procedimentos. No teste, a procura começou no Detran Digital e exigiu retorno ao portal.</dd>
  </div>
  <div>
    <dt>Tempo e justificativa</dt>
    <dd>Referência: 60 s; faixa: 120 a 160 s. Prevê busca e leitura de procedimentos em mais de uma página, com maior complexidade que T01.</dd>
  </div>
</dl>

### T03 — Agendamento de atendimento { #t03 }

<dl class="rel-spec">
  <div>
    <dt>Cenário</dt>
    <dd><em>“Você precisa de atendimento presencial no Detran-DF e quer garantir dia e horário. Mostre como começaria a marcar esse atendimento pelo site, sem concluir a marcação.”</em></dd>
  </div>
  <div>
    <dt>Ponto de partida</dt>
    <dd>Página inicial do portal institucional, reiniciada após T02.</dd>
  </div>
  <div>
    <dt>Critério de sucesso</dt>
    <dd>Chegar à etapa de escolha de data e horário; se o fluxo exigir login ou dados pessoais, interromper na tela anterior, conforme o roteiro. O serviço específico não foi validado no campo original.</dd>
  </div>
  <div>
    <dt>Caminho de referência</dt>
    <dd>Página inicial → Portal de Serviços/Detran Digital → Agendamento presencial → formulário/etapa inicial de agendamento, sem concluir marcação nem enviar dados.</dd>
  </div>
  <div>
    <dt>Tempo e justificativa</dt>
    <dd>Referência: 30 s; faixa: 60 a 120 s. A margem cobre a passagem do portal informativo ao fluxo transacional e a identificação do ponto de parada.</dd>
  </div>
</dl>

### T04 — Consulta de multas e pontuação { #t04 }

<dl class="rel-spec">
  <div>
    <dt>Cenário</dt>
    <dd><em>“Você quer saber se existe alguma multa ou pontos na sua carteira ou no seu carro. Descubra como consultar isso pelo site, sem digitar seus dados.”</em></dd>
  </div>
  <div>
    <dt>Ponto de partida</dt>
    <dd>Página inicial do portal institucional, com retorno ao início entre tarefas.</dd>
  </div>
  <div>
    <dt>Critério de sucesso</dt>
    <dd>Localizar o Portal Detran Digital e o botão de consulta de infrações da CNH. Interromper antes de fornecer dados, autenticar ou enviar consulta, conforme o ponto de parada previsto.</dd>
  </div>
  <div>
    <dt>Caminho de referência</dt>
    <dd>Página inicial → Detran Digital → Infrações → Histórico de infrações do condutor (ou consulta correspondente), até identificar o acesso.</dd>
  </div>
  <div>
    <dt>Tempo e justificativa</dt>
    <dd>Referência: 40 s; faixa: 80 a 140 s. Prevê localizar a categoria correta e distinguir consulta de CNH de serviços de veículo, preservando o ponto de parada.</dd>
  </div>
</dl>

## Entrevistas e registro { #a4 }

<dl class="rel-spec">
  <div>
    <dt>Entrevista inicial</dt>
    <dd>Frequência de uso da internet; serviços públicos utilizados; familiaridade com o Detran-DF; dispositivos habituais; recursos de acessibilidade; necessidade de ajuda.</dd>
  </div>
  <div>
    <dt>Entrevista final</dt>
    <dd>Tarefa mais difícil e motivo; momentos sem saber continuar; localização esperada de informações; clareza; melhorias; termos ou botões não compreendidos; preferência entre canal online e presencial; outros comentários.</dd>
  </div>
</dl>

Aplicar o SUS da proposta, com os dez itens na ordem e redação originais, antes da entrevista final. Para cada tarefa, registrar início, fim, duração, desfecho, número de erros, dicas, hesitações, percurso e evidência com minuto. Os rótulos SUS da [seção 6](resultados.md#sus) são resumos de apresentação dos itens.

O roteiro prevê uma dica neutra por tarefa, mas os campos das dicas padronizadas não foram preenchidos. A folha de preparação também mantém em aberto a validação de caminhos e respostas. O termo assinado e as autorizações de gravação e exibição devem acompanhar a entrega, conforme a proposta.

!!! note "Apoio de IA"
    ChatGPT (Codex) foi utilizado na revisão e organização deste relatório. A conferência incluiu comparação com a proposta, o roteiro, o checklist e a gravação, além da recomposição do cálculo SUS e da taxa de sucesso; a validação final da entrega cabe ao grupo.

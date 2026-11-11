# Avaliação com usuário

<p class="rel-lead">
  Relatório da entrega: teste de usabilidade com uma usuária real do <a href="https://detran.df.gov.br">Portal do Detran-DF</a>, com protocolo <em>Think Aloud</em>, questionário SUS e entrevista, cruzado com os critérios do guia de acessibilidade do grupo.
</p>


## Resultados em resumo

<ul class="rel-kpis" role="list" aria-label="Resultados em resumo" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; list-style: none; padding: 0;">
  <li style="--rel-c: var(--rel-ok)">
    <span class="rel-kpi__value">25%</span>
    <span class="rel-kpi__label">Sucesso sem ajuda</span>
    <span class="rel-kpi__note">1 de 4 tarefas</span>
  </li>
  <li style="--rel-c: var(--rel-help)">
    <span class="rel-kpi__value">50%</span>
    <span class="rel-kpi__label">Sucesso com ajuda</span>
    <span class="rel-kpi__note">2 de 4 tarefas</span>
  </li>
  <li style="--rel-c: var(--rel-fail)">
    <span class="rel-kpi__value">25%</span>
    <span class="rel-kpi__label">Falha</span>
    <span class="rel-kpi__note">1 de 4 tarefas</span>
  </li>
  <li style="--rel-c: var(--ap-brand)">
    <span class="rel-kpi__value">52,5</span>
    <span class="rel-kpi__label">Score SUS</span>
    <span class="rel-kpi__note">Marginal · média de mercado: 68</span>
  </li>
</ul>

Detalhes em [Métricas e Score SUS](resultados.md). O SUS é um escore de 0 a 100, e não uma porcentagem.

## Sumário

<div class="guia-cards">
  <a class="guia-card" href="metodologia/">
    <span class="guia-kicker">Seção 4</span>
    <strong>Metodologia</strong>
    <span>Abordagem de teste, participante, procedimento e cenários de avaliação.</span>
  </a>
  <a class="guia-card" href="resultados/">
    <span class="guia-kicker">Seções 5 e 6</span>
    <strong>Métricas e Score SUS</strong>
    <span>Eficácia, tempo e erros por cenário; cálculo e análise do SUS.</span>
  </a>
  <a class="guia-card" href="analise/">
    <span class="guia-kicker">Seções 7 e 8</span>
    <strong>Análise e achados</strong>
    <span>Barreiras, tabela de problemas, severidade e cruzamento com o guia.</span>
  </a>
  <a class="guia-card" href="recomendacoes/">
    <span class="guia-kicker">Seções 9 e 10</span>
    <strong>Recomendações e conclusão</strong>
    <span>Priorização das correções e conclusões do estudo.</span>
  </a>
  <a class="guia-card" href="anexo-a/">
    <span class="guia-kicker">Anexo A</span>
    <strong>Roteiro do teste</strong>
    <span>Cenários, critérios, caminhos de referência, tempos e entrevistas.</span>
  </a>
  <a class="guia-card" href="anexo-b/">
    <span class="guia-kicker">Anexo B</span>
    <strong>Termo de consentimento</strong>
    <span>Texto do termo e autorizações concedidas pela participante.</span>
  </a>
</div>

## Introdução { #introducao }

Este relatório técnico apresenta a avaliação de usabilidade e acessibilidade realizada no Portal do Detran-DF, desenvolvida no âmbito da disciplina de Interação Humano-Computador (IHC) da Universidade de Brasília (UnB), no semestre 2026.2, sob a orientação da Professora Rejane M. C. Figueiredo. O objetivo primordial deste estudo consiste em mapear a experiência de um utilizador real através de testes empíricos baseados em cenários cotidianos de serviços veiculares e de habilitação. Pretende-se, deste modo, articular os conceitos teóricos de IHC identificando barreiras de interface e propondo melhorias estruturais.

## Caracterização do site { #caracterizacao }

O site oficial do Departamento de Trânsito do Distrito Federal (Detran-DF) é um portal institucional e de prestação de serviços públicos voltado aos cidadãos condutores e proprietários de veículos da região.

A plataforma serve como o principal canal digital para emissão de taxas (como IPVA), consultas de infrações, agendamento de atendimentos presenciais e processos de habilitação (CNH). O portal divide-se entre uma área pública informativa e o “Detran Digital”, uma área restrita para realização de serviços mediante autenticação.

## Perfil de usuário { #perfil }

A seleção e a caracterização do perfil do utilizador seguiram os critérios do roteiro de testes [Roteiro de Teste Usabilidade DetranDF v3](https://docs.google.com/document/u/0/d/1_-41jDTGt5vW_feVFJfzYhxXMuct4U0z7vemd_ixY_k/edit), focando-se em uma cidadã real que utiliza serviços públicos do Distrito Federal:

<dl class="rel-spec">
  <div>
    <dt>Identificação</dt>
    <dd>Usuária adulta, 58 anos.</dd>
  </div>
  <div>
    <dt>Contexto de uso</dt>
    <dd>Utilizadora diária da internet, acessando serviços públicos como Detran, Secretaria da Fazenda e Terracap (por motivos profissionais) através de notebook e smartphone. Utiliza o Detran-DF para emissão de IPVA, CNH e consulta de pendências.</dd>
  </div>
  <div>
    <dt>Familiaridade tecnológica</dt>
    <dd>Alta. Não costuma pedir ajuda a terceiros para navegar em sites ou aplicativos.</dd>
  </div>
  <div>
    <dt>Limitações de acessibilidade</dt>
    <dd>Não utiliza recursos específicos de acessibilidade, como leitores de tela ou ajustes de zoom.</dd>
  </div>
</dl>

---
title: "Avaliação do site: Detran-DF"
description: Relatório de avaliação de acessibilidade e usabilidade do portal do Detran-DF (Tg-02).
---

# Avaliação do site: Detran-DF

Relatório de **avaliação de acessibilidade e usabilidade** do portal do [Detran-DF](<https://portal.detran.df.gov.br/>) e do Detran Digital. A avaliação aplica o [Guia de Acessibilidade](../../checklist/index.md) do grupo, as WCAG 2.2, a ABNT NBR 17225, as heurísticas de Nielsen, ferramentas automáticas, avaliação manual com leitor de tela e um teste de usabilidade com usuário real.

<ul class="rel-stats" aria-label="Resumo dos resultados" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; list-style: none; padding: 0;">
  <li class="rel-stat"><strong>11</strong><span>problemas encontrados</span></li>
  <li class="rel-stat lvl-4"><strong>4</strong><span>críticos</span></li>
  <li class="rel-stat lvl-3"><strong>1</strong><span>grave</span></li>
  <li class="rel-stat lvl-2"><strong>5</strong><span>moderados</span></li>
  <li class="rel-stat lvl-1"><strong>1</strong><span>leve</span></li>
</ul>

## Resumo executivo

- **O que foi avaliado:** 22 páginas e fluxos (E1 a E22): Página Inicial, Consulta de Nada Consta do Veículo, Consulta de Débito do Veículo, Emissão de CRLV-e, Emissão de ATPV-e, Emissão de Placa de Identificação do Veículo, Transferência de Veículo, Consulta CNH, Marcação de Provas CNH (teórico e prático), Acompanhamento de Processo de Habilitação, Permissão Internacional para Dirigir, CNH Definitiva, Agendamento Presencial, Balcão Virtual, Consulta de Infrações por Condutor, Histórico de Infrações por Veículo, Processos de Penalidade de Suspensão de CNH, Consultar Clínica, Consultar Instrutores de Trânsito, Consultar Auto Escola, Página de Login e Página Inicial 2 (Detran Digital). A lista completa está em [Escopo](escopo.md).
- **Como:** Guia de Acessibilidade melhorado (Tg-01), WCAG 2.2, NBR 17225, heurísticas de Nielsen, ferramentas automáticas, avaliação manual e teste com usuário real. Veja a [Metodologia](metodologia.md).
- **Resultado geral:** 11 problemas encontrados: 4 críticos, 1 grave, 5 moderados e 1 leve.
- **Três problemas mais importantes:** [P02](problemas.md#p02) (imagens sem texto alternativo), [P08](problemas.md#p08) (renovação de CNH não encontrada no Detran Digital) e [P05](problemas.md#p05) (possível loop de autenticação com o gov.br).
- **Principal recomendação:** corrigir prioritariamente a falha de integração no login com o gov.br no Detran Digital e adequar textos alternativos de imagens, rótulos de campos e nomes acessíveis de botões na Página Inicial, para garantir a navegabilidade por leitores de tela, além de resolver os problemas que envolvem inconsistências de informações.

## Navegue pelo relatório

<div class="guia-cards">
  <a class="guia-card" href="escopo/">
    <span class="guia-kicker">Seção 3</span>
    <strong>Escopo</strong>
    <span>Por que o Detran-DF, as 22 páginas e fluxos avaliados e o ambiente de teste.</span>
  </a>
  <a class="guia-card" href="metodologia/">
    <span class="guia-kicker">Seção 4</span>
    <strong>Metodologia</strong>
    <span>Referenciais, ferramentas e escala de severidade.</span>
  </a>
  <a class="guia-card" href="avaliacao-automatica/">
    <span class="guia-kicker">Seção 5</span>
    <strong>Avaliação automática</strong>
    <span>Resultados do WAVE e do axe DevTools em cada página.</span>
  </a>
  <a class="guia-card" href="avaliacao-manual/">
    <span class="guia-kicker">Seção 6</span>
    <strong>Avaliação manual</strong>
    <span>Teclado, leitor de tela, zoom, contraste, áreas de clique e formulários.</span>
  </a>
  <a class="guia-card" href="heuristicas/">
    <span class="guia-kicker">Seção 7</span>
    <strong>Heurísticas de Nielsen</strong>
    <span>As 10 heurísticas aplicadas ao site, com exemplos observados.</span>
  </a>
  <a class="guia-card" href="problemas/">
    <span class="guia-kicker">Seção 8</span>
    <strong>Tabela de problemas</strong>
    <span>Os 11 problemas com referência, severidade, evidência e recomendação.</span>
  </a>
  <a class="guia-card" href="teste-usuario/">
    <span class="guia-kicker">Seção 9</span>
    <strong>Teste com usuário real</strong>
    <span>Síntese do teste de usabilidade (Tg-03) com quatro tarefas.</span>
  </a>
  <a class="guia-card" href="recomendacoes/">
    <span class="guia-kicker">Seção 10</span>
    <strong>Recomendações e conclusão</strong>
    <span>Priorização das correções, conclusão e limitações.</span>
  </a>
  <a class="guia-card" href="evidencias-ferramentas/">
    <span class="guia-kicker">Apêndice B</span>
    <strong>Prints das ferramentas</strong>
    <span>45 capturas do WAVE e do axe DevTools.</span>
  </a>
  <a class="guia-card" href="evidencias-manuais/">
    <span class="guia-kicker">Apêndice C</span>
    <strong>Evidências dos problemas</strong>
    <span>23 capturas da avaliação manual e dos problemas.</span>
  </a>
  <a class="guia-card is-wide" href="referencias/">
    <span class="guia-kicker">Seção 11</span>
    <strong>Referências</strong>
    <span>Normas, guias e ferramentas citados no relatório.</span>
  </a>
</div>

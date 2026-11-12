# Análise e achados

Esta seção reúne os achados qualitativos do grupo. As classificações e marcações temporais de observações históricas devem ser interpretadas à luz do [relatório final Tg-03](resultados.md), que é a referência para os desfechos quantitativos.

## Momentos relevantes da entrevista (sínteses, não transcrição literal)

O relatório final registra momentos da sessão que ajudam a compreender as dificuldades encontradas. Abaixo, os trechos são apresentados como **paráfrases analíticas**, sem reproduzir voz, imagem ou identificação da participante.

| Momento aproximado do registro | Observação fundamentada no relatório |
|---|---|
| 00:00–02:13 | P1 relata familiaridade com o uso diário de internet e serviços públicos. |
| 07:35–11:17 | A procura pelas orientações de renovação da CNH evidencia dificuldade de localização; a marca de 160 s é o limite analítico. |
| Entrevista final | P1 identifica a renovação da CNH como principal dificuldade e sugere meios de busca mais evidentes. |

!!! warning "Gravação e consentimento"
    A exibição de trechos está autorizada apenas em sala de aula e sem identificação, nas condições do termo assinado. **A gravação completa e seus trechos não estão publicados nem vinculados a este site público.**

## Cruzamento de dados: métricas quantitativas vs qualitativas { #cruzamento }

### Barreiras encontradas { #barreiras }

<dl class="rel-spec">
  <div>
    <dt>Quebra de sessão</dt>
    <dd>O portal institucional e o Detran Digital não mantêm a sessão do utilizador ativa de forma contínua. Durante os Cenários 2, 3 e 4, a participante foi obrigada a refazer o login, causando forte frustração.</dd>
  </div>
  <div>
    <dt>Arquitetura de informação</dt>
    <dd>Na entrevista final, a usuária relatou que a tarefa mais difícil foi achar as orientações de renovação da CNH. A informação não estava clara no Detran Digital, exigindo buscas secundárias.</dd>
  </div>
  <div>
    <dt>Falta de atalhos visíveis</dt>
    <dd>O IPVA e as orientações de CNH ficam escondidas, e a página inicial foi classificada como “vazia”.</dd>
  </div>
</dl>

**Tabela consolidada de problemas:** a severidade de Nielsen usa 0 = não é problema, 1 = cosmético, 2 = menor, 3 = grave e 4 = catastrófico. A ordem das recomendações também considera recorrência e abrangência. Os horários abaixo referem-se à gravação.

<div class="rel-table-wrap" role="region" aria-label="Tabela consolidada de problemas (tabela com rolagem horizontal)" tabindex="0">
<table class="rel-table">
  <caption>Problemas identificados, evidências e severidade (escala de Nielsen)</caption>
  <thead>
    <tr>
      <th scope="col">Problema</th>
      <th scope="col">Local</th>
      <th scope="col">Evidência</th>
      <th scope="col">Sev.</th>
    </tr>
  </thead>
  <tbody>
    <tr id="p01">
      <th scope="row">P01 — Repetição de autenticação</th>
      <td>Transição entre portal institucional e Detran Digital (T02–T04).</td>
      <td>06:30–07:00: aviso de autenticação e nova solicitação de acesso. O registro da equipe relata repetição nos três cenários.</td>
      <td><span class="rel-badge rel-badge--sev-3">3 — grave</span></td>
    </tr>
    <tr id="p02">
      <th scope="row">P02 — Orientações de renovação pouco localizáveis</th>
      <td>Área CNH do Detran Digital e busca no portal (T02).</td>
      <td>07:30–08:10: retorno à busca no portal; 11:30–11:46: identificação dos procedimentos. Na entrevista (23:00–23:52), P1 aponta esta como a tarefa mais difícil.</td>
      <td><span class="rel-badge rel-badge--sev-3">3 — grave</span></td>
    </tr>
    <tr id="p03">
      <th scope="row">P03 — Ausência de busca geral evidente</th>
      <td>Página inicial do Detran Digital.</td>
      <td>24:37–25:20: P1 sugere um campo de pesquisa no Detran Digital para evitar a procura dispersa por informações.</td>
      <td><span class="rel-badge rel-badge--sev-2">2 — menor</span></td>
    </tr>
    <tr id="p04">
      <th scope="row">P04 — Atalhos de serviços pouco visíveis</th>
      <td>Página inicial e acesso ao IPVA.</td>
      <td>25:50–26:35: discussão da página inicial e da informação situada abaixo da área de maior destaque; P1 relata necessidade de procurar o serviço. Achado da entrevista, sem tarefa específica de IPVA.</td>
      <td><span class="rel-badge rel-badge--sev-2">2 — menor</span></td>
    </tr>
    <tr id="p05">
      <th scope="row">P05 — Navegação fragmentada entre portais</th>
      <td>Menus do portal institucional e do Detran Digital.</td>
      <td>07:30–08:30 e 13:30–15:00: alternância entre interfaces e desvio pela área informativa. A entrevista (23:00–24:27) reforça a expectativa de encontrar a renovação na área CNH.</td>
      <td><span class="rel-badge rel-badge--sev-2">2 — menor</span></td>
    </tr>
  </tbody>
</table>
</div>

### Crítica ao sistema { #critica }

A utilizadora apontou que prefere usar a via online para evitar filas, mas a falta de uma “barra de pesquisa geral” e a navegação dispersa por múltiplos locais dificultam a jornada autônoma do cidadão.

!!! note "Síntese da entrevista final (22:56–28:23)"
    P1 considera a renovação da CNH a tarefa mais difícil, pois esperava suas orientações na área CNH do Detran Digital. Relata clareza das informações quando encontradas, sugere pesquisa geral e maior destaque para serviços e prefere o atendimento online para evitar filas.

## Achados de acessibilidade e UX (baseado nas diretrizes) { #achados }

<dl class="rel-spec">
  <div>
    <dt>Continuidade de status / consistência</dt>
    <dd>A alternância entre o portal público e o Detran Digital quebra o padrão de navegação e derruba a autenticação, violando heurísticas de consistência e controle do usuário.</dd>
  </div>
  <div>
    <dt>Foco e previsibilidade</dt>
    <dd>O layout esconde informações primordiais (como a emissão de IPVA) na parte inferior ou as omite do menu principal do Detran Digital.</dd>
  </div>
</dl>

**Cruzamento com o pocket:** os códigos abaixo correspondem ao [checklist](../../checklist/index.md) da seção 2 do Guia de Boas Práticas do Grupo 11. “Previsto” significa cobertura pelo critério do guia. Como o guia não contém a ficha de inspeção preenchida, não é possível afirmar quais ocorrências já haviam sido detectadas antes do teste nem quais eram inéditas para a equipe.

<div class="rel-table-wrap" role="region" aria-label="Cruzamento dos problemas com os itens do pocket (tabela com rolagem horizontal)" tabindex="0">
<table class="rel-table">
  <caption>Problemas observados × itens do checklist do guia</caption>
  <thead>
    <tr>
      <th scope="col">Problema</th>
      <th scope="col">Itens do pocket</th>
      <th scope="col">Antecipação pelo critério e observação no teste</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#p01">P01</a></th>
      <td><code>DEV-15</code> <code>HU-a3</code> <code>HU-d3</code></td>
      <td>Reentrada de dados e previsibilidade estão previstas como critérios; a interrupção recorrente de acesso foi evidenciada no uso real.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#p02">P02</a></th>
      <td><code>HU-b3</code> <code>HU-f1</code> <code>HU-j1</code></td>
      <td>A localização lógica das informações e a disponibilidade de instruções são riscos antecipáveis pelo checklist, confirmados em T02.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#p03">P03</a></th>
      <td><code>HU-j2</code> <code>HU-g3</code></td>
      <td>Pesquisa na documentação e acesso eficiente a recursos constam do checklist; a necessidade de busca geral apareceu na entrevista.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#p04">P04</a></th>
      <td><code>HU-g3</code> <code>HU-h2</code></td>
      <td>Acesso a serviços frequentes e hierarquia visual estão previstos no checklist; dificuldade relatada na entrevista.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#p05">P05</a></th>
      <td><code>HU-d1</code> <code>HU-d3</code> <code>HU-c3</code></td>
      <td>Padronização e retorno na navegação são previstos no checklist; a fragmentação se manifestou durante as tarefas.</td>
    </tr>
  </tbody>
</table>
</div>

!!! warning "Escopo do teste"
    O teste com P1 não avaliou navegação por leitor de tela, contraste, semântica HTML ou todos os requisitos de acessibilidade. Os vínculos com o pocket orientam a análise de UX e não constituem declaração de conformidade normativa.

# Métricas e Score SUS

## Métricas observadas { #metricas }

<div class="rel-table-wrap" role="region" aria-label="Métricas observadas por cenário (tabela com rolagem horizontal)" tabindex="0">
<table class="rel-table">
  <caption>Desfecho, tempo e observações por cenário de uso</caption>
  <thead>
    <tr>
      <th scope="col">Cenário de uso</th>
      <th scope="col">Conclusão (eficácia)</th>
      <th scope="col" class="rel-num">Tempo</th>
      <th scope="col">Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Cenário 1: Biometria</th>
      <td><span class="rel-badge rel-badge--ok">Sucesso sem ajuda</span></td>
      <td class="rel-num">20 s</td>
      <td>Erros: 0. Localizou a informação de biometria presencial, com endereço e horário, sem dica.</td>
    </tr>
    <tr>
      <th scope="row">Cenário 2: Renovação CNH</th>
      <td><span class="rel-badge rel-badge--fail">Falha</span></td>
      <td class="rel-num">300 s</td>
      <td>Erros: 1. Desvio na área CNH e retorno ao portal. Recebeu dica; 300 s excedem o teto previsto de 160 s.</td>
    </tr>
    <tr>
      <th scope="row">Cenário 3: Agendamento</th>
      <td><span class="rel-badge rel-badge--help">Sucesso com ajuda</span></td>
      <td class="rel-num">85 s</td>
      <td>Erros: 1. Desvio pela área informativa/FAQ; retorno ao agendamento com auxílio registrado pela equipe.</td>
    </tr>
    <tr>
      <th scope="row">Cenário 4: Multas/Pontos</th>
      <td><span class="rel-badge rel-badge--help">Sucesso com ajuda</span></td>
      <td class="rel-num">90 s</td>
      <td>Erros: 0. Recebeu dica de retorno à página inicial (16:20) e localizou a área de infrações.</td>
    </tr>
  </tbody>
</table>
</div>

<dl class="rel-spec">
  <div>
    <dt>Taxa de sucesso</dt>
    <dd>1 ÷ 4 × 100 = <strong>25%</strong> (uma tarefa com sucesso sem ajuda). Sucesso com ajuda: 2 de 4 (50%). Falha: 1 de 4 (25%).</dd>
  </div>
  <div>
    <dt>Contagem de erros</dt>
    <dd>Foram contados episódios de navegação que exigiram retorno ao objetivo. Rolagem, hesitação e pedidos de autenticação não foram contados como erros da participante. Os dois episódios identificados estão descritos na tabela.</dd>
  </div>
  <div>
    <dt>Tempos</dt>
    <dd>Mantidos os registros da equipe (20, 300, 85 e 90 s); o vídeo inclui pausas e intervenções. Os limites estão em faixas no roteiro, sem um valor final por tarefa. T02 supera inclusive o teto previsto; os demais desfechos consideram o alcance do objetivo e as dicas registradas.</dd>
  </div>
</dl>

## Score SUS { #sus }

O questionário *System Usability Scale* (SUS) foi aplicado após as tarefas.

<div class="rel-table-wrap" role="region" aria-label="Respostas do questionário SUS (tabela com rolagem horizontal)" tabindex="0">
<table class="rel-table">
  <caption>Respostas de P1 ao SUS e pontuação de cada item</caption>
  <thead>
    <tr>
      <th scope="col">Pergunta</th>
      <th scope="col">Tipo</th>
      <th scope="col" class="rel-num">Resposta</th>
      <th scope="col" class="rel-num">Fórmula</th>
      <th scope="col" class="rel-num">Pontuação</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">Q1. Gostaria de usar o sistema com frequência.</th><td>Ímpar</td><td class="rel-num">3</td><td class="rel-num">3 − 1</td><td class="rel-num">2</td></tr>
    <tr><th scope="row">Q2. Achei o sistema desnecessariamente complexo.</th><td>Par</td><td class="rel-num">2</td><td class="rel-num">5 − 2</td><td class="rel-num">3</td></tr>
    <tr><th scope="row">Q3. Achei o sistema fácil de usar.</th><td>Ímpar</td><td class="rel-num">2</td><td class="rel-num">2 − 1</td><td class="rel-num">1</td></tr>
    <tr><th scope="row">Q4. Precisaria de ajuda técnica.</th><td>Par</td><td class="rel-num">1</td><td class="rel-num">5 − 1</td><td class="rel-num">4</td></tr>
    <tr><th scope="row">Q5. Funções bem integradas.</th><td>Ímpar</td><td class="rel-num">4</td><td class="rel-num">4 − 1</td><td class="rel-num">3</td></tr>
    <tr><th scope="row">Q6. O sistema apresenta muita inconsistência.</th><td>Par</td><td class="rel-num">4</td><td class="rel-num">5 − 4</td><td class="rel-num">1</td></tr>
    <tr><th scope="row">Q7. Pessoas aprenderão a usar rapidamente.</th><td>Ímpar</td><td class="rel-num">2</td><td class="rel-num">2 − 1</td><td class="rel-num">1</td></tr>
    <tr><th scope="row">Q8. Achei o sistema atrapalhado de usar.</th><td>Par</td><td class="rel-num">4</td><td class="rel-num">5 − 4</td><td class="rel-num">1</td></tr>
    <tr><th scope="row">Q9. Me senti confiante ao usar o sistema.</th><td>Ímpar</td><td class="rel-num">3</td><td class="rel-num">3 − 1</td><td class="rel-num">2</td></tr>
    <tr><th scope="row">Q10. Precisei aprender muitas coisas antes.</th><td>Par</td><td class="rel-num">2</td><td class="rel-num">5 − 2</td><td class="rel-num">3</td></tr>
  </tbody>
  <tfoot>
    <tr><th scope="row" colspan="4">Soma dos pontos</th><td class="rel-num">21</td></tr>
  </tfoot>
</table>
</div>

### Cálculo final { #calculo }

<div class="rel-formula">
  <p>Score = Soma dos pontos × 2,5</p>
  <p>Score = 21 × 2,5 = <strong>52,5</strong></p>
</div>

<div class="rel-scale" role="img" aria-label="Escala SUS de 0 a 100: score de P1 igual a 52,5, abaixo da média de mercado, que é 68.">
  <div class="rel-scale__track" aria-hidden="true" style="--v: 52.5">
    <div class="rel-scale__fill"></div>
    <span class="rel-scale__mark" style="--p: 52.5"></span>
    <span class="rel-scale__label rel-scale__label--top" style="--p: 52.5">52,5<small>Score de P1</small></span>
    <span class="rel-scale__mark" style="--p: 68"></span>
    <span class="rel-scale__label rel-scale__label--bottom" style="--p: 68">68<small>Média de mercado</small></span>
    <span class="rel-scale__label rel-scale__label--bottom rel-scale__label--edge-l" style="--p: 0">0</span>
    <span class="rel-scale__label rel-scale__label--bottom rel-scale__label--edge-r" style="--p: 100">100</span>
  </div>
</div>

### Análise do resultado { #analise-sus }

Um score de 52,5 classifica a usabilidade deste sistema como Marginal/Abaixo da Média (a média de mercado é 68). A participante marcou notas que demonstram que, embora não precise de ajuda técnica (Q4 = 1), o portal apresenta muita inconsistência (Q6 = 4) e é “pesado/atrapalhado” de usar (Q8 = 4).

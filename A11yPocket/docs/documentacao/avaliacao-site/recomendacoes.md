---
title: Recomendações e conclusão
---

# Recomendações e conclusão

## Recomendações priorizadas

<div class="prio" markdown="1">

<div class="prio-lane lvl-4" markdown="1">
<p class="prio-title">1. Imediato (críticos e graves)</p>
<p>Afetam sobretudo usuários de leitor de tela e o acesso ao Detran Digital.</p>
<div class="prio-ids" markdown="1">
[P05](problemas.md#p05){ .rel-tag } [P04](problemas.md#p04){ .rel-tag } [P02](problemas.md#p02){ .rel-tag } [P08](problemas.md#p08){ .rel-tag } [P03](problemas.md#p03){ .rel-tag }
</div>
</div>

<div class="prio-lane lvl-2" markdown="1">
<p class="prio-title">2. Curto prazo (moderados)</p>
<p>Atrapalham, mas o usuário consegue concluir a tarefa.</p>
<div class="prio-ids" markdown="1">
[P01](problemas.md#p01){ .rel-tag } [P06](problemas.md#p06){ .rel-tag } [P07](problemas.md#p07){ .rel-tag } [P10](problemas.md#p10){ .rel-tag } [P11](problemas.md#p11){ .rel-tag }
</div>
</div>

<div class="prio-lane lvl-1" markdown="1">
<p class="prio-title">3. Melhoria contínua (leves)</p>
<p>Incômodos e inconsistências pequenas.</p>
<div class="prio-ids" markdown="1">
[P09](problemas.md#p09){ .rel-tag }
</div>
</div>

</div>

Os detalhes de cada problema estão na [tabela de problemas](problemas.md).

## Conclusão

A avaliação mostrou que o site do Detran-DF atende apenas parcialmente aos critérios de acessibilidade e usabilidade adotados. Foram registrados 11 problemas: 4 críticos, 1 grave, 5 moderados e 1 leve.

Os críticos e graves se concentram na Página Inicial e afetam sobretudo usuários de leitor de tela: imagens e links de imagem sem texto alternativo, campos sem rótulo e botões sem nome acessível. Também é crítico o loop de autenticação na integração com o gov.br, que deixa o usuário sem retorno de status no Detran Digital.

As ferramentas automáticas confirmaram esse quadro, com destaque para a Página Inicial 2 (E22), que teve 276 erros no WAVE, e para o E19, com 72 erros de contraste. A avaliação manual apontou ainda falhas de landmarks, de anúncio de mensagens dinâmicas, de zoom e de contraste do texto do corpo.

Por outro lado, a maior parte das funções é acessível pelo teclado, e a página inicial oferece um atalho para os serviços mais acessados. Na análise heurística, o site atende parcialmente H1, H2, H3, H5, H6, H7, H8, H9 e H10, e não atende à H4.

## Limitações

- Analisou-se uma amostra de páginas e fluxos, e não todo o site.
- As ferramentas automáticas cobrem só parte dos critérios da WCAG.
- A avaliação manual foi feita apenas em desktop, com NVDA.
- O teste de usabilidade contou com um único usuário, o que impede generalizar os resultados.

## Próximos passos

1. Corrigir primeiro os problemas críticos e graves: textos alternativos, rótulos, nomes acessíveis e o loop de autenticação (este junto aos responsáveis pela integração com o gov.br).
2. Tratar os moderados em seguida.
3. Repetir a avaliação após as correções.
4. Ampliar a avaliação com mais usuários, incluindo pessoas com deficiência, e com testes em dispositivos móveis.

---
title: Avaliação manual
---

# Resultados da avaliação manual

A avaliação manual foi feita em desktop (2560x1440), com Firefox e Chrome e o leitor de tela NVDA. Foram registradas **30 verificações**: 14 passam, 4 passam parcialmente e 12 falham.

<ul class="rel-stats" aria-label="Resumo da avaliação manual">
  <li class="rel-stat"><strong>14</strong><span>verificações que passam</span></li>
  <li class="rel-stat lvl-2"><strong>4</strong><span>passam parcialmente</span></li>
  <li class="rel-stat lvl-4"><strong>12</strong><span>verificações que falham</span></li>
</ul>

## Teclado

| Verificação | Referência | Resultado | Página | Evidência |
|-------------|------------|:---------:|--------|-----------|
| Todas as funções acessíveis só com Tab, Enter e Espaço | WCAG 2.1.1, Guia DEV-06 | <span class="res res-pass">Passa</span> | Todas | [Fig. C1](../../assets/images/avaliacao-detran/fig-c1.webp) |
| Sem armadilha de foco | WCAG 2.1.2, Guia DEV-06 | <span class="res res-fail">Falha</span> | E1 | [Fig. C2](../../assets/images/avaliacao-detran/fig-c2.webp) |
| Ordem de foco lógica | WCAG 2.4.3, Guia DEV-08 | <span class="res res-pass">Passa</span> | E1, E22 | — |
| Foco visível | WCAG 2.4.7 / 2.4.11, Guia DEV-07 | <span class="res res-part">Parcial</span> | Todas | — |
| Link para pular ao conteúdo | WCAG 2.4.1, Guia DEV-05 | <span class="res res-pass">Passa</span> | Todas | — |

## Leitor de tela

| Verificação | Referência | Resultado | Página | Evidência |
|-------------|------------|:---------:|--------|-----------|
| Títulos e hierarquia de cabeçalhos | WCAG 1.3.1 / 2.4.6, Guia DEV-04 | <span class="res res-fail">Falha</span> | E1, E14, E21 | [Fig. C3](../../assets/images/avaliacao-detran/fig-c3.webp) |
| Imagens com texto alternativo adequado | WCAG 1.1.1, Guia DEV-02 | <span class="res res-fail">Falha</span> | E1 | [Fig. C4](../../assets/images/avaliacao-detran/fig-c4.webp) |
| Nome acessível em botões e links | WCAG 4.1.2 / 2.4.4, Guia DEV-11 | <span class="res res-fail">Falha</span> | E1, E8, E19, E20, E21 | [Fig. C5](../../assets/images/avaliacao-detran/fig-c5.webp) |
| Landmarks e regiões da página | WCAG 1.3.1, Guia DEV-01 | <span class="res res-fail">Falha</span> | E1, E14, E18, E19, E20, E21 | [Fig. C6](../../assets/images/avaliacao-detran/fig-c6.webp) |
| Mensagens dinâmicas anunciadas | WCAG 4.1.3, Guia DEV-10 | <span class="res res-fail">Falha</span> | E1, E18, E21 | [Fig. C7](../../assets/images/avaliacao-detran/fig-c7.webp) |

## Zoom e reflow

| Verificação | Referência | Resultado | Página | Evidência |
|-------------|------------|:---------:|--------|-----------|
| Zoom de 200% sem perda de conteúdo | WCAG 1.4.4, Guia DES-04 | <span class="res res-fail">Falha</span> | Todas | [Fig. C8](../../assets/images/avaliacao-detran/fig-c8.webp) |
| Zoom de 400% sem rolagem horizontal | WCAG 1.4.10, Guia DES-01 | <span class="res res-fail">Falha</span> | Todas | [Fig. C9](../../assets/images/avaliacao-detran/fig-c9.webp) |
| Espaçamento de texto ajustável | WCAG 1.4.12, Guia DES-05 | <span class="res res-pass">Passa</span> | Todas | — |

## Contraste e cor

| Elemento | Cores (texto / fundo) | Razão medida | Mínimo | Referência | Resultado |
|----------|-----------------------|:------------:|:------:|------------|:---------:|
| Texto do corpo | #8398B3 / #FFFFFF | 2,95:1 | 4,5:1 | WCAG 1.4.3, Guia DES-02 | <span class="res res-fail">Falha</span> |
| Texto de cabeçalho | #F44336 / #FFFFFF | 3,61:1 | 3:1 | WCAG 1.4.11, Guia DES-02 | <span class="res res-part">Passa</span> |
| Informação só por cor? | Não (acompanhada de texto e ícones) | — | — | WCAG 1.4.1, Guia DES-03 | <span class="res res-pass">Passa</span> |

## Áreas de clique

| Verificação | Referência | Resultado | Página | Evidência |
|-------------|------------|:---------:|--------|-----------|
| Alvos com tamanho mínimo e espaçamento (principalmente no celular) | WCAG 2.5.8, Guia DEV-12 | <span class="res res-pass">Passa</span> | Todas | [Fig. C10](../../assets/images/avaliacao-detran/fig-c10.webp) |

## Formulários

| Verificação | Referência | Resultado | Página | Evidência |
|-------------|------------|:---------:|--------|-----------|
| Rótulos visíveis e associados aos campos | WCAG 1.3.1 / 3.3.2, Guia DEV-14 | <span class="res res-pass">Passa</span> | E21, E3, E5, E2, E13, E15, E18 | [Fig. C11](../../assets/images/avaliacao-detran/fig-c11.webp) |
| Mensagens de erro claras e identificam o campo | WCAG 3.3.1, Guia DEV-16 | <span class="res res-fail">Falha</span> | E7 | [Fig. C12](../../assets/images/avaliacao-detran/fig-c12.webp) |
| Sugestão de correção | WCAG 3.3.3 | <span class="res res-fail">Falha</span> | E7 | [Fig. C13](../../assets/images/avaliacao-detran/fig-c13.webp) |
| Autocomplete em dados pessoais | WCAG 1.3.5 | <span class="res res-pass">Passa</span> | E21 | — |
| Prevenção de erros em ações importantes | WCAG 3.3.4, Guia HU-e1 | <span class="res res-pass">Passa</span> | Todas | — |

## Itens do Guia complementares

| Item do Guia | Referência WCAG | Resultado |
|--------------|-----------------|:---------:|
| DEV-03: título e idioma da página | 2.4.2 e 3.1.1 | <span class="res res-pass">Passa</span> |
| DEV-13: autenticação acessível (relevante para o E21 e o gov.br) | 3.3.8 | <span class="res res-fail">Falha</span> |
| DEV-17: conteúdo que aparece ao passar o mouse ou focar | 1.4.13 | <span class="res res-part">Parcial</span> |
| DEV-18: modais | 2.1.2 | <span class="res res-pass">Passa</span> |
| DES-06: mecanismos de ajuda consistentes | 3.2.6 | <span class="res res-pass">Passa</span> |
| DES-07: alternativa a arrastar e gestos | 2.5.7 | <span class="res res-pass">Passa</span> |
| DES-08: controle de animações | 2.2.2 e 2.3.1 | <span class="res res-part">Parcial</span> |
| CON-04 e CON-05: descrição de imagens e ausência de texto embutido em imagens | 1.1.1 e 1.4.5 | <span class="res res-part">Parcial</span> |

!!! info "Como ler os resultados"
    **Passa**, **Parcial** e **Falha** aparecem sempre com texto e símbolo (✓, ≈, ✕), nunca só com cor. As evidências ilustrativas podem ser consultadas diretamente nas fichas da [tabela de problemas](problemas.md).

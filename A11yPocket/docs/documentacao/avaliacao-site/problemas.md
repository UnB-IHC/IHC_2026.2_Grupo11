---
title: Tabela de problemas
---

# Tabela de problemas

Foram registrados **11 problemas**. Cada um traz a página ou local, a evidência, a referência (WCAG, NBR, heurística de Nielsen ou ID do Guia), a severidade e a recomendação. A escala de severidade está em [Metodologia](metodologia.md#escala-de-severidade).

## Resumo por severidade

<ul class="rel-sevbar" aria-label="Distribuição dos problemas por severidade">
  <li class="lvl-4" style="flex: 4">4 críticos</li>
  <li class="lvl-3" style="flex: 1">1 grave</li>
  <li class="lvl-2" style="flex: 5">5 moderados</li>
  <li class="lvl-1" style="flex: 1">1 leve</li>
</ul>

## Visão geral

| ID | Problema | Página / local | Severidade | Evidência |
|----|----------|----------------|:----------:|-----------|
| [P01](#p01) | Contraste insuficiente nos serviços mais acessados | E1 – Página Inicial | <span class="sev sev-2">Moderado</span> | [Fig. C14](evidencias-manuais.md#fig-c14) |
| [P02](#p02) | Imagens de aplicativos sem texto alternativo | E1 – Página Inicial | <span class="sev sev-4">Crítico</span> | [Fig. C15](evidencias-manuais.md#fig-c15) |
| [P03](#p03) | Campo de formulário sem rótulo | E1 – Página Inicial | <span class="sev sev-3">Grave</span> | [Fig. C16](evidencias-manuais.md#fig-c16) |
| [P04](#p04) | Botões sem nome acessível | E1 – Página Inicial | <span class="sev sev-4">Crítico</span> | [Fig. C17](evidencias-manuais.md#fig-c17) |
| [P05](#p05) | Possível loop de autenticação com o gov.br | E21 – Página de Login do Detran Digital | <span class="sev sev-4">Crítico</span> | [Fig. C18](evidencias-manuais.md#fig-c18) |
| [P06](#p06) | Inconsistência visual entre o portal e o Detran Digital | E1 (Página Inicial do Portal do Detran-DF) e E21/E22 (Detran Digital) | <span class="sev sev-2">Moderado</span> | [Fig. C19](evidencias-manuais.md#fig-c19), [Fig. C20](evidencias-manuais.md#fig-c20) |
| [P07](#p07) | Mensagens de erro genéricas em formulários | E7 – Página de Transferência de Veículo no Detran Digital | <span class="sev sev-2">Moderado</span> | [Fig. C21](evidencias-manuais.md#fig-c21) |
| [P08](#p08) | Renovação de CNH difícil de encontrar | E1 – Página Principal do Detran Digital | <span class="sev sev-4">Crítico</span> | — |
| [P09](#p09) | Logoff sem confirmação | E1 – Página Inicial do Detran Digital | <span class="sev sev-1">Leve</span> | [Fig. C22](evidencias-manuais.md#fig-c22) |
| [P10](#p10) | FAQ ausente ou pouco visível no portal | E22 – Página Inicial do Detran-DF | <span class="sev sev-2">Moderado</span> | [Fig. C23](evidencias-manuais.md#fig-c23) |
| [P11](#p11) | Transferência de veículo sem opção de desfazer | E7 – Página de Transferência de Veículo | <span class="sev sev-2">Moderado</span> | [Fig. C21](evidencias-manuais.md#fig-c21) |

## Detalhamento


### P01 · Contraste insuficiente nos serviços mais acessados {#p01}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

Os textos descritivos da seção “serviços mais acessados” apresentam contraste insuficiente em relação à cor de fundo.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.4.3, Guia DES-02 (contraste mínimo) e HU-h2</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C14](evidencias-manuais.md#fig-c14)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Alterar a cor do texto para um tom mais contrastante com o fundo, de preferência um tom mais escuro.
</div>

<figure class="prob-fig" markdown="1">
[![Cartões de serviços da Página Inicial com o texto descritivo em cinza claro sobre fundo branco, de baixo contraste.](../../assets/images/avaliacao-detran/fig-c14.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c14.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C14** · Evidência de P01. [Ver no Apêndice C](evidencias-manuais.md#fig-c14).</figcaption>
</figure>

</div>


### P02 · Imagens de aplicativos sem texto alternativo {#p02}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Imagens que levam à plataforma de aplicativos mobile não possuem opção de texto alternativo.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.1.1, WCAG 2.4.4, Guia DEV-02 e CON-12</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C15](evidencias-manuais.md#fig-c15)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Inserir texto alternativo (`alt`) na imagem que descreva claramente o destino ou a ação do link (ex.: `alt="Acessar serviços de Habilitação"`), e não apenas o que a imagem é.
</div>

<figure class="prob-fig" markdown="1">
[![Botões de download da App Store e do Google Play na Página Inicial, cada um acompanhado de um ícone de imagem sem texto alternativo.](../../assets/images/avaliacao-detran/fig-c15.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c15.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C15** · Evidência de P02. [Ver no Apêndice C](evidencias-manuais.md#fig-c15).</figcaption>
</figure>

</div>


### P03 · Campo de formulário sem rótulo {#p03}

<div class="prob-card lvl-3" markdown="1">

<span class="sev sev-3">Grave</span>

Campo de formulário (como o de busca ou login) não possui um rótulo associado.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.3.1 (Informações e Relações), WCAG 3.3.2 (Rótulos ou Instruções), Guia DEV-14</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C16](evidencias-manuais.md#fig-c16)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Associar um elemento `<label>` válido ao campo `<input>` através dos atributos `for` e `id`, ou utilizar `aria-label` caso o layout não permita um rótulo visual.
</div>

<figure class="prob-fig" markdown="1">
[![Campo de mensagem do assistente virtual (“Digite uma mensagem”) sem rótulo associado.](../../assets/images/avaliacao-detran/fig-c16.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c16.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C16** · Evidência de P03. [Ver no Apêndice C](evidencias-manuais.md#fig-c16).</figcaption>
</figure>

</div>


### P04 · Botões sem nome acessível {#p04}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Botões não possuem texto explicativo de suas funções.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 4.1.2 (link para as redes sociais), Guia DEV-11 e DEV-01</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C17](evidencias-manuais.md#fig-c17)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Adicionar texto descritivo no interior da tag `<button>`. Se o botão utilizar apenas um ícone visual, deve-se adicionar o atributo `aria-label="[Ação do botão]"`.
</div>

<figure class="prob-fig" markdown="1">
[![Ícones de redes sociais (Facebook, X, LinkedIn) acompanhados de ícones de imagem sem nome acessível.](../../assets/images/avaliacao-detran/fig-c17.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c17.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C17** · Evidência de P04. [Ver no Apêndice C](evidencias-manuais.md#fig-c17).</figcaption>
</figure>

</div>


### P05 · Possível loop de autenticação com o gov.br {#p05}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Possibilidade de loop de autenticação em relação à integração gov.br no Detran Digital.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E21 – Página de Login do Detran Digital</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 4.1.3 (Mensagens de Status, AA), Guia DEV-10 e HU-a1</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C18](evidencias-manuais.md#fig-c18)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Resolver os problemas de integração da plataforma gov.br com o Detran Digital.
</div>

<figure class="prob-fig" markdown="1">
[![Página de login do Detran Digital, com o botão “Entrar com gov.br”.](../../assets/images/avaliacao-detran/fig-c18.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c18.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C18** · Evidência de P05. [Ver no Apêndice C](evidencias-manuais.md#fig-c18).</figcaption>
</figure>

</div>


### P06 · Inconsistência visual entre o portal e o Detran Digital {#p06}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

Inconsistência visual entre o site principal do Detran-DF e o Detran Digital.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 (Página Inicial do Portal do Detran-DF) e E21/E22 (Detran Digital)</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 3.2.3 (Navegação Consistente, AA), Guia DES-06, HU-d1 e HU-d3</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C19](evidencias-manuais.md#fig-c19), [Fig. C20](evidencias-manuais.md#fig-c20)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Integrar as características visuais das duas páginas a fim de encontrar uma solução visual consistente e lógica.
</div>

<figure class="prob-fig" markdown="1">
[![Página inicial do Detran Digital, com layout diferente do portal público.](../../assets/images/avaliacao-detran/fig-c19.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c19.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C19** · Evidência de P06. [Ver no Apêndice C](evidencias-manuais.md#fig-c19).</figcaption>
</figure>

<figure class="prob-fig" markdown="1">
[![Página de login do Detran Digital, com o botão “Entrar com gov.br”.](../../assets/images/avaliacao-detran/fig-c20.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c20.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C20** · Evidência de P06. [Ver no Apêndice C](evidencias-manuais.md#fig-c20).</figcaption>
</figure>

</div>


### P07 · Mensagens de erro genéricas em formulários {#p07}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

Alguns formulários não indicam causas de erro de preenchimento e retornam mensagens genéricas de erro.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E7 – Página de Transferência de Veículo no Detran Digital</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 3.3.1 (Identificação do Erro, A), Guia DEV-16, HU-i1 e HU-i3</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C21](evidencias-manuais.md#fig-c21)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Adicionar textos auxiliares de explicações de erros de preenchimento nos campos de formulários com esse problema.
</div>

<figure class="prob-fig" markdown="1">
[![Formulário de Transferência de Veículos com campos de placa e Renavam e uma mensagem genérica de erro no canto da tela.](../../assets/images/avaliacao-detran/fig-c21.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c21.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C21** · Evidência de P07. [Ver no Apêndice C](evidencias-manuais.md#fig-c21).</figcaption>
</figure>

</div>


### P08 · Renovação de CNH difícil de encontrar {#p08}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Ao pesquisar como renovar a CNH no Detran Digital, encontra-se uma ata informando que a renovação é efetuada diretamente pelo portal, porém a opção não foi encontrada.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Principal do Detran Digital</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 2.4.5 (Várias Formas, AA), Guia HU-d3</div>
<div markdown="1"><span class="prob-label">Evidência</span>O relatório não traz figura para este item. Veja o teste T02 na [seção 9](teste-usuario.md).</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Deixar a opção bem explícita no menu de serviços do Detran Digital.
</div>



</div>


### P09 · Logoff sem confirmação {#p09}

<div class="prob-card lvl-1" markdown="1">

<span class="sev sev-1">Leve</span>

A opção de Logoff na plataforma do Detran Digital não exige confirmação do usuário.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial do Detran Digital</div>
<div markdown="1"><span class="prob-label">Referência</span>Guia HU-e1</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C22](evidencias-manuais.md#fig-c22)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Inserir uma mensagem de confirmação na operação de logoff.
</div>

<figure class="prob-fig" markdown="1">
[![Menu do usuário do Detran Digital com a opção “Logoff” sem confirmação.](../../assets/images/avaliacao-detran/fig-c22.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c22.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C22** · Evidência de P09. [Ver no Apêndice C](evidencias-manuais.md#fig-c22).</figcaption>
</figure>

</div>


### P10 · FAQ ausente ou pouco visível no portal {#p10}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

O Portal não possui uma aba de FAQ ou Perguntas Frequentes clara e de fácil acesso.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E22 – Página Inicial do Detran-DF</div>
<div markdown="1"><span class="prob-label">Referência</span>Guia HU-j1</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C23](evidencias-manuais.md#fig-c23)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Se houver uma seção correspondente, deixá-la visível e devidamente contrastada em todas as páginas associadas.
</div>

<figure class="prob-fig" markdown="1">
[![Página inicial do portal do Detran-DF, sem seção de perguntas frequentes visível.](../../assets/images/avaliacao-detran/fig-c23.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c23.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C23** · Evidência de P10. [Ver no Apêndice C](evidencias-manuais.md#fig-c23).</figcaption>
</figure>

</div>


### P11 · Transferência de veículo sem opção de desfazer {#p11}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

A Transferência de Veículo não tem um recurso claro de “Desfazer” ou de cancelar a operação.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E7 – Página de Transferência de Veículo</div>
<div markdown="1"><span class="prob-label">Referência</span>HU-c1</div>
<div markdown="1"><span class="prob-label">Evidência</span>[Fig. C21](evidencias-manuais.md#fig-c21)</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Oferecer opção de desfazer ou cancelar a solicitação, com confirmação do resultado.
</div>

<figure class="prob-fig" markdown="1">
[![Formulário de Transferência de Veículos com campos de placa e Renavam e uma mensagem genérica de erro no canto da tela.](../../assets/images/avaliacao-detran/fig-c21.webp){ loading=lazy }](../../assets/images/avaliacao-detran/fig-c21.webp){ target=_blank rel=noopener }
<figcaption markdown="1">**Fig. C21** · Evidência de P07. [Ver no Apêndice C](evidencias-manuais.md#fig-c21).</figcaption>
</figure>

</div>

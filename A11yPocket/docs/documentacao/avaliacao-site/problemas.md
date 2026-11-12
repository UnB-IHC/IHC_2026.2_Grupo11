---
title: Tabela de problemas
---

# Tabela de problemas

Foram registrados **14 problemas**. Cada um traz a página ou local, a evidência, a referência (WCAG, NBR, heurística de Nielsen ou ID do Guia), a severidade e a recomendação. A escala de severidade está em [Metodologia](metodologia.md#escala-de-severidade).

## Visão geral

| ID | Problema | Página / local | Severidade | Evidência |
|----|----------|----------------|:----------:|-----------|
| [P01](#p01) | Contraste insuficiente nos serviços mais acessados | E1 – Página Inicial | <span class="sev sev-2">Moderado</span> | Fig. C14 |
| [P02](#p02) | Imagens de aplicativos sem texto alternativo | E1 – Página Inicial | <span class="sev sev-4">Crítico</span> | Fig. C15 |
| [P03](#p03) | Campo de formulário sem rótulo | E1 – Página Inicial | <span class="sev sev-3">Grave</span> | Fig. C16 |
| [P04](#p04) | Botões sem nome acessível | E1 – Página Inicial | <span class="sev sev-4">Crítico</span> | Fig. C17 |
| [P05](#p05) | Possível loop de autenticação com o gov.br | E21 – Página de Login do Detran Digital | <span class="sev sev-4">Crítico</span> | Fig. C18 |
| [P06](#p06) | Inconsistência visual entre o portal e o Detran Digital | E1 (Página Inicial do Portal do Detran-DF) e E21/E22 (Detran Digital) | <span class="sev sev-2">Moderado</span> | Fig. C19, Fig. C20 |
| [P07](#p07) | Mensagens de erro genéricas em formulários | E7 – Página de Transferência de Veículo no Detran Digital | <span class="sev sev-2">Moderado</span> | Fig. C21 |
| [P08](#p08) | Renovação de CNH difícil de encontrar | E1 – Página Principal do Detran Digital | <span class="sev sev-4">Crítico</span> | — |
| [P09](#p09) | Logoff sem confirmação | E1 – Página Inicial do Detran Digital | <span class="sev sev-1">Leve</span> | Fig. C22 |
| [P10](#p10) | FAQ ausente ou pouco visível no portal | E22 – Página Inicial do Detran-DF | <span class="sev sev-2">Moderado</span> | Fig. C23 |
| [P11](#p11) | Transferência de veículo sem opção de desfazer | E7 – Página de Transferência de Veículo | <span class="sev sev-2">Moderado</span> | Fig. C21 |
| [P12](#p12) | Falha na hierarquia de títulos e cabeçalhos | E1, E14 e E21 | <span class="sev sev-3">Grave</span> | [Fig. C3](../../assets/images/avaliacao-detran/fig-c3.webp) |
| [P13](#p13) | Regiões da página (landmarks) ausentes ou inadequadas | E1, E14, E18–E21 | <span class="sev sev-3">Grave</span> | [Fig. C6](../../assets/images/avaliacao-detran/fig-c6.webp) |
| [P14](#p14) | Perda de conteúdo e rolagem horizontal com ampliação | Todas as páginas avaliadas | <span class="sev sev-3">Grave</span> | [Fig. C8](../../assets/images/avaliacao-detran/fig-c8.webp), [Fig. C9](../../assets/images/avaliacao-detran/fig-c9.webp) |

## Detalhamento


### P01 · Contraste insuficiente nos serviços mais acessados {#p01}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

Os textos descritivos da seção “serviços mais acessados” apresentam contraste insuficiente em relação à cor de fundo.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.4.3, Guia DES-02 (contraste mínimo) e HU-h2</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C14</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Alterar a cor do texto para um tom mais contrastante com o fundo, de preferência um tom mais escuro.
</div>

<figure class="prob-fig" markdown="1">
![Cartões de serviços da Página Inicial com o texto descritivo em cinza claro sobre fundo branco, de baixo contraste.](../../assets/images/avaliacao-detran/fig-c14.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C14** · Evidência de P01.</figcaption>
</figure>

</div>


### P02 · Imagens de aplicativos sem texto alternativo {#p02}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Imagens que levam à plataforma de aplicativos mobile não possuem opção de texto alternativo.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.1.1, WCAG 2.4.4, Guia DEV-02 e CON-12</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C15</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Inserir texto alternativo (`alt`) na imagem que descreva claramente o destino ou a ação do link (ex.: `alt="Acessar serviços de Habilitação"`), e não apenas o que a imagem é.
</div>

<figure class="prob-fig" markdown="1">
![Botões de download da App Store e do Google Play na Página Inicial, cada um acompanhado de um ícone de imagem sem texto alternativo.](../../assets/images/avaliacao-detran/fig-c15.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C15** · Evidência de P02.</figcaption>
</figure>

</div>


### P03 · Campo de formulário sem rótulo {#p03}

<div class="prob-card lvl-3" markdown="1">

<span class="sev sev-3">Grave</span>

Campo de formulário (como o de busca ou login) não possui um rótulo associado.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.3.1 (Informações e Relações), WCAG 3.3.2 (Rótulos ou Instruções), Guia DEV-14</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C16</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Associar um elemento `<label>` válido ao campo `<input>` através dos atributos `for` e `id`, ou utilizar `aria-label` caso o layout não permita um rótulo visual.
</div>

<figure class="prob-fig" markdown="1">
![Campo de mensagem do assistente virtual (“Digite uma mensagem”) sem rótulo associado.](../../assets/images/avaliacao-detran/fig-c16.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C16** · Evidência de P03.</figcaption>
</figure>

</div>


### P04 · Botões sem nome acessível {#p04}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Botões não possuem texto explicativo de suas funções.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 – Página Inicial</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 4.1.2 (link para as redes sociais), Guia DEV-11 e DEV-01</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C17</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Adicionar texto descritivo no interior da tag `<button>`. Se o botão utilizar apenas um ícone visual, deve-se adicionar o atributo `aria-label="[Ação do botão]"`.
</div>

<figure class="prob-fig" markdown="1">
![Ícones de redes sociais (Facebook, X, LinkedIn) acompanhados de ícones de imagem sem nome acessível.](../../assets/images/avaliacao-detran/fig-c17.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C17** · Evidência de P04.</figcaption>
</figure>

</div>


### P05 · Possível loop de autenticação com o gov.br {#p05}

<div class="prob-card lvl-4" markdown="1">

<span class="sev sev-4">Crítico</span>

Possibilidade de loop de autenticação em relação à integração gov.br no Detran Digital.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E21 – Página de Login do Detran Digital</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 4.1.3 (Mensagens de Status, AA), Guia DEV-10 e HU-a1</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C18</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Resolver os problemas de integração da plataforma gov.br com o Detran Digital.
</div>

<figure class="prob-fig" markdown="1">
![Página de login do Detran Digital, com o botão “Entrar com gov.br”.](../../assets/images/avaliacao-detran/fig-c18.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C18** · Evidência de P05.</figcaption>
</figure>

</div>


### P06 · Inconsistência visual entre o portal e o Detran Digital {#p06}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

Inconsistência visual entre o site principal do Detran-DF e o Detran Digital.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1 (Página Inicial do Portal do Detran-DF) e E21/E22 (Detran Digital)</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 3.2.3 (Navegação Consistente, AA), Guia DES-06, HU-d1 e HU-d3</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C19, Fig. C20</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Integrar as características visuais das duas páginas a fim de encontrar uma solução visual consistente e lógica.
</div>

<figure class="prob-fig" markdown="1">
![Página inicial do Detran Digital, com layout diferente do portal público.](../../assets/images/avaliacao-detran/fig-c19.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C19** · Evidência de P06.</figcaption>
</figure>

<figure class="prob-fig" markdown="1">
![Página de login do Detran Digital, com o botão “Entrar com gov.br”.](../../assets/images/avaliacao-detran/fig-c20.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C20** · Evidência de P06.</figcaption>
</figure>

</div>


### P07 · Mensagens de erro genéricas em formulários {#p07}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

Alguns formulários não indicam causas de erro de preenchimento e retornam mensagens genéricas de erro.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E7 – Página de Transferência de Veículo no Detran Digital</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 3.3.1 (Identificação do Erro, A), Guia DEV-16, HU-i1 e HU-i3</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C21</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Adicionar textos auxiliares de explicações de erros de preenchimento nos campos de formulários com esse problema.
</div>

<figure class="prob-fig" markdown="1">
![Formulário de Transferência de Veículos com campos de placa e Renavam e uma mensagem genérica de erro no canto da tela.](../../assets/images/avaliacao-detran/fig-c21.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C21** · Evidência de P07.</figcaption>
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
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C22</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Inserir uma mensagem de confirmação na operação de logoff.
</div>

<figure class="prob-fig" markdown="1">
![Menu do usuário do Detran Digital com a opção “Logoff” sem confirmação.](../../assets/images/avaliacao-detran/fig-c22.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C22** · Evidência de P09.</figcaption>
</figure>

</div>


### P10 · FAQ ausente ou pouco visível no portal {#p10}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

O Portal não possui uma aba de FAQ ou Perguntas Frequentes clara e de fácil acesso.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E22 – Página Inicial do Detran-DF</div>
<div markdown="1"><span class="prob-label">Referência</span>Guia HU-j1</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C23</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Se houver uma seção correspondente, deixá-la visível e devidamente contrastada em todas as páginas associadas.
</div>

<figure class="prob-fig" markdown="1">
![Página inicial do portal do Detran-DF, sem seção de perguntas frequentes visível.](../../assets/images/avaliacao-detran/fig-c23.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C23** · Evidência de P10.</figcaption>
</figure>

</div>


### P11 · Transferência de veículo sem opção de desfazer {#p11}

<div class="prob-card lvl-2" markdown="1">

<span class="sev sev-2">Moderado</span>

A Transferência de Veículo não tem um recurso claro de “Desfazer” ou de cancelar a operação.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E7 – Página de Transferência de Veículo</div>
<div markdown="1"><span class="prob-label">Referência</span>HU-c1</div>
<div markdown="1"><span class="prob-label">Evidência</span>Fig. C21</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Oferecer opção de desfazer ou cancelar a solicitação, com confirmação do resultado.
</div>

<figure class="prob-fig" markdown="1">
![Formulário de Transferência de Veículos com campos de placa e Renavam e uma mensagem genérica de erro no canto da tela.](../../assets/images/avaliacao-detran/fig-c21.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C21** · Evidência de P07.</figcaption>
</figure>

</div>


### P12 · Falha na hierarquia de títulos e cabeçalhos {#p12}

<div class="prob-card lvl-3" markdown="1">
<span class="sev sev-3">Grave</span>

Estrutura de títulos e cabeçalhos (de `h1` a `h6`) inconsistente, dificultando compreender a organização da página e navegar por títulos com leitor de tela.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1, E14 e E21</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.3.1 e 2.4.6; Guia DEV-04</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Organizar títulos de forma lógica, com níveis que representem as seções e descrições claras, evitando saltos que prejudiquem a estrutura compreendida por tecnologias assistivas.
</div>

<figure class="prob-fig" markdown="1">
![Exemplo de inspeção da estrutura de cabeçalhos do Detran-DF.](../../assets/images/avaliacao-detran/fig-c3.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C3** · Evidência de P12 registrada no relatório de avaliação.</figcaption>
</figure>
</div>

### P13 · Regiões da página inadequadas {#p13}

<div class="prob-card lvl-3" markdown="1">
<span class="sev sev-3">Grave</span>

Ausência ou marcação inadequada de regiões da página (*landmarks* HTML5/ARIA), que dificulta saltar diretamente para navegação, conteúdo principal ou rodapé por leitores de tela.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>E1, E14, E18, E19, E20 e E21</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.3.1; Guia DEV-01</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Utilizar regiões semânticas como `header`, `nav`, `main` e `footer` e, quando necessário, atributos ARIA equivalentes, sem criar regiões redundantes.
</div>

<figure class="prob-fig" markdown="1">
![Registro de inspeção das regiões semânticas da interface.](../../assets/images/avaliacao-detran/fig-c6.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C6** · Evidência de P13 registrada no relatório de avaliação.</figcaption>
</figure>
</div>

### P14 · Zoom e reflow insuficientes {#p14}

<div class="prob-card lvl-3" markdown="1">
<span class="sev sev-3">Grave</span>

Foi relatada perda de conteúdo a 200% de zoom e necessidade de rolagem horizontal a 400%, comprometendo o uso por pessoas com baixa visão.

<div class="prob-grid" markdown="1">
<div markdown="1"><span class="prob-label">Onde</span>Páginas avaliadas no relatório</div>
<div markdown="1"><span class="prob-label">Referência</span>WCAG 1.4.4 e 1.4.10; Guia DES-01 e DES-04</div>
</div>

<div class="prob-rec" markdown="1">
**Recomendação.** Utilizar layout responsivo com unidades flexíveis e adaptação do conteúdo para preservar sua leitura e operação em ampliação, observadas as exceções dos critérios aplicáveis.
</div>

<figure class="prob-fig" markdown="1">
![Registro do problema de ampliação na interface avaliada.](../../assets/images/avaliacao-detran/fig-c8.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C8** · Evidência de P14.</figcaption>
</figure>
<figure class="prob-fig" markdown="1">
![Registro de rolagem horizontal na ampliação da interface avaliada.](../../assets/images/avaliacao-detran/fig-c9.webp){ loading=lazy }
<figcaption markdown="1">**Fig. C9** · Evidência complementar de P14.</figcaption>
</figure>
</div>

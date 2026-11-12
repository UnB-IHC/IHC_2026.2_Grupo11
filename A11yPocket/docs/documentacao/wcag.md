# WCAG 2.2 

As **Diretrizes de Acessibilidade para Conteúdo Web** (*Web Content Accessibility Guidelines*, WCAG 2.2) são recomendações internacionais desenvolvidas pelo World Wide Web Consortium (W3C), por meio da Web Accessibility Initiative (WAI). Seu objetivo é estabelecer critérios para tornar conteúdos e aplicações web mais acessíveis às pessoas com deficiência, contemplando diferentes necessidades de percepção, interação, compreensão e utilização dos recursos digitais.

A WCAG 2.2 foi publicada como recomendação oficial do W3C em **5 de outubro de 2023** e é a versão mais recente da série WCAG 2 publicada como padrão oficial. Essa versão amplia a WCAG 2.1 com **nove novos critérios de sucesso**, mantendo, em geral, os critérios das versões anteriores. O W3C recomenda a adoção da versão 2.2 como referência para novos projetos de acessibilidade digital (W3C, 2023).

## Princípios fundamentais

A WCAG 2.2 organiza suas diretrizes em quatro princípios, conhecidos pela sigla **POUR**, que Perceivable (Perceptível), Operable (Operável), Understandable (Compreensível) e Robust (Robusto):

<div class="guia-cards">
  <div class="guia-card">
    <strong>P · Perceptível</strong>
    <span>As informações e os componentes da interface devem ser apresentados de maneira que possam ser percebidos pelos usuários. Inclui alternativas textuais para imagens, legendas para conteúdos audiovisuais e contraste adequado entre texto e plano de fundo.</span>
  </div>
  <div class="guia-card">
    <strong>O · Operável</strong>
    <span>Os componentes da interface e a navegação devem permitir interação por diferentes meios, sem depender exclusivamente de dispositivos específicos, como o mouse. É preciso garantir navegação por teclado, foco visível e tempo suficiente para as atividades.</span>
  </div>
  <div class="guia-card">
    <strong>U · Compreensível</strong>
    <span>As informações e o funcionamento da interface devem ser claros e previsíveis. Envolve linguagem adequada, padrões consistentes de navegação e instruções e mensagens de erro que auxiliem os usuários.</span>
  </div>
  <div class="guia-card">
    <strong>R · Robusto</strong>
    <span>O conteúdo deve ser desenvolvido de forma compatível com diferentes navegadores, dispositivos e tecnologias assistivas, permitindo que seja interpretado corretamente por diferentes recursos e sistemas.</span>
  </div>
</div>

Esses princípios são organizados em **13 diretrizes**, que apresentam critérios de sucesso utilizados para avaliar a acessibilidade de páginas e aplicações web (W3C, 2023).

## Níveis de conformidade

A WCAG 2.2 estabelece três níveis de conformidade: **A**, **AA** e **AAA**. Cada nível acrescenta exigências ao anterior, permitindo avaliar o grau de atendimento aos critérios de acessibilidade.

| Nível | Descrição | Exemplos |
|---|---|---|
| **A** | Nível mínimo. Contempla requisitos essenciais para reduzir barreiras de acesso. | Alternativas textuais para imagens informativas; navegação por teclado; identificação do idioma principal da página. |
| **AA** | Inclui os critérios do nível A e acrescenta requisitos para reduzir barreiras mais frequentes e relevantes. | Contraste mínimo adequado entre texto e fundo; redimensionamento do texto sem perda de conteúdo ou funcionalidade; legendas para vídeos pré-gravados. |
| **AAA** | Nível mais elevado. Reúne os critérios de A e AA e adiciona requisitos mais rigorosos. | Exigências ampliadas de contraste; alternativas para determinados conteúdos audiovisuais; mecanismos adicionais para facilitar a compreensão das informações. |

Para declarar conformidade com determinado nível, não basta atender a alguns critérios isolados: é necessário cumprir **todos os critérios de sucesso daquele nível e dos níveis anteriores**. O W3C não recomenda exigir conformidade AAA para um site inteiro como regra geral, pois alguns critérios podem não ser aplicáveis a todos os tipos de conteúdo (W3C, 2023).

## Considerações acerca da NBR e WCAG

A análise conjunta da ABNT NBR 17225:2025 e do Guia de Boas Práticas evidencia que a acessibilidade digital eficaz requer a união indissociável entre **métricas objetivas** e **cultura organizacional**. Enquanto a norma técnica fornece o embasamento normativo rigoroso, fundamentado na WCAG 2.2, para a mitigação de barreiras e a verificação exata de conformidade, o guia atua na transformação dos processos de trabalho das equipes envolvidas.

Conclui-se que o atendimento aos requisitos da norma não deve ser encarado apenas como uma etapa de validação final ou estrita obrigação legal, mas como a materialização técnica de um modelo operacional inclusivo, que valorize o desenho universal e garanta a autonomia, a segurança e a usabilidade para todas as pessoas em ambientes virtuais.

!!! note "Fonte"
    WORLD WIDE WEB CONSORTIUM (W3C). [*Web Content Accessibility Guidelines (WCAG) 2.2*](https://www.w3.org/TR/WCAG22/).

## Interpretando critérios na prática

As WCAG organizam os critérios sob os princípios **Perceptível, Operável, Compreensível e Robusto (POUR)**. A avaliação de um critério exige observar as condições indicadas no próprio texto, incluindo exceções e níveis de conformidade.

| Situação | Critério frequentemente relevante | Como verificar |
|---|---|---|
| Imagem informativa | 1.1.1 — Conteúdo não textual | Confira se a alternativa transmite o propósito da imagem. |
| Contraste do texto | 1.4.3 — Contraste (mínimo) | Meça contraste entre texto e fundo em diferentes estados. |
| Acesso sem mouse | 2.1.1 — Teclado | Percorra a interface usando somente o teclado. |
| Rótulos de campos | 3.3.2 — Rótulos ou instruções | Confira nome acessível e instruções junto ao campo. |
| Estados de controles | 4.1.2 — Nome, função, valor | Confirme que o leitor de tela anuncia função e estado. |

!!! warning "Atenção ao uso da tabela"
    Estes são **exemplos de aplicação**, não uma reprodução integral nem substituição dos critérios normativos. Verifique a redação e as exceções na documentação oficial antes de declarar conformidade.

## Processo recomendado de avaliação

1. Definir páginas, fluxos e necessidades de acesso; 
2. Identificar critérios pertinentes;
3. Realizar varredura automática; 
4. Testar teclado, leitor de tela, contraste e ampliação; 
5. Documentar evidência, impacto e correção; 
6. Retestar após a implementação.

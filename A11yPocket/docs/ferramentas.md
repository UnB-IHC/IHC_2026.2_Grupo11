# Ferramentas de teste

Ferramentas automáticas **ajudam a encontrar erros**, mas não substituem a avaliação humana: nenhuma delas diz, por exemplo, se a descrição de uma imagem faz sentido. Por isso, esta página reúne as ferramentas de **análise automática** e os **leitores de tela**, com um comparativo e um passo a passo de uso. Use-as junto com o [checklist](checklist/index.md).

## Comparativo rápido

| Ferramenta | Tipo | Plataforma | Use quando você quer… |
|---|---|---|---|
| **WAVE** | Análise visual (extensão e site) | Navegador | Ver erros sobre o próprio layout: contraste, títulos e `alt`. |
| **Lighthouse** | Auditoria automática | Chrome DevTools | Acompanhar uma **nota de 0 a 100** entre versões e sprints. |
| **Axe DevTools** | Análise automática + testes guiados | Navegador / DevTools | Varrer o código com poucos falsos positivos e guiar testes manuais. |
| **ASES Web** | Avaliador oficial do Governo Federal | Web | Medir a conformidade com o **eMAG** em sites públicos. |
| **NVDA** | Leitor de tela | Windows | Testar o fluxo “ouvido” de cima para baixo. |
| **VoiceOver** | Leitor de tela | macOS, iOS, iPadOS | Testar gestos, alvos de toque e agrupamentos no celular da Apple. |
| **TalkBack** | Leitor de tela | Android | Conferir a ordem de foco em apps e sites no Android. |

!!! tip "Sugestão de fluxo de teste"
    1. Rode uma ferramenta **automática** (Lighthouse, Axe ou WAVE) para achar os erros evidentes.
    2. Se o site for público, avalie também no **ASES Web**.
    3. Navegue só com o **teclado** e com um **leitor de tela**.
    4. Registre o que encontrou e relacione cada problema a um item do checklist.

## Ferramentas de análise de acessibilidade e usabilidade

### WAVE { #wave }

Criado pela WebAIM, o WAVE é uma extensão de navegador (e ferramenta web) que se destaca pelo teste **visual e intuitivo**.

- **Como funciona:** injeta ícones coloridos diretamente sobre a interface da página testada. Um ícone vermelho aparece exatamente onde há um erro, e um ícone verde onde a acessibilidade estrutural está correta.
- **Melhor caso de uso:** validações rápidas de contraste e checagem visual da estrutura de títulos (H1, H2) e dos atributos de imagem (*alt text*). Excelente para designers e profissionais de conteúdo visualizarem os problemas no próprio layout.

???+ example "Passo a passo"
    1. Instale a extensão **WAVE Evaluation Tool** no navegador (há versões para Chrome, Firefox e Edge) ou acesse o site [wave.webaim.org](https://wave.webaim.org/) e digite a URL.
    2. Abra a página que será avaliada e clique no ícone da extensão.
    3. Leia o resumo no painel lateral (erros, alertas, recursos de acessibilidade, elementos estruturais).
    4. Clique nos ícones sobre a página para ver o detalhe e a explicação de cada item.
    5. Use a visão de contraste para localizar combinações de cor insuficientes.

### Lighthouse (Google) { #lighthouse }

O Lighthouse é uma ferramenta de código aberto integrada ao Chrome DevTools. Ele audita não apenas acessibilidade, mas também desempenho, SEO e melhores práticas.

- **Comparação e métricas:** gera uma pontuação de 0 a 100. É ideal para comparar versões de um produto ou acompanhar o progresso de melhorias ao longo das sprints.
- **Passo a passo no relatório:** para cada erro encontrado, o Lighthouse oferece um link para a documentação técnica explicando o motivo da falha, como ela afeta o usuário e como corrigi-la.

???+ example "Passo a passo"
    1. Abra o **Google Chrome** na página que será auditada.
    2. Abra o Chrome DevTools (tecla **F12**) e clique na aba **Lighthouse**.
    3. Clique em **Analisar o carregamento de página** e, para focar no tema, deixe marcada a categoria **Acessibilidade**.
    4. Clique em **Executar auditoria** e aguarde o relatório (de 30 a 60 segundos).
    5. Veja a nota e abra cada auditoria reprovada para ler a explicação e a correção sugerida.

    O fluxo pelo DevTools permite auditar também páginas que exigem autenticação e sites locais, o que a extensão do Lighthouse não permite ([Google](https://developer.chrome.com/docs/lighthouse/overview?hl=pt-br)).

!!! warning "A nota não é um atestado"
    O Lighthouse traz também **verificações manuais** (como ordem de tabulação e armadilhas de foco) que ele não consegue decidir sozinho. Uma nota alta não significa que o site seja acessível.

### Axe DevTools (Deque Systems) { #axe-devtools }

O Axe é considerado o padrão ouro da indústria para desenvolvedores e QAs (*Quality Assurance*), sendo o motor por trás de muitas outras ferramentas (incluindo o próprio Lighthouse).

- **Testes automatizados:** varre o código em busca de violações das diretrizes WCAG, com taxa baixíssima de falsos positivos.
- **Testes guiados (passo a passo inteligente):** a grande força da versão Pro é o recurso *Intelligent Guided Tests*. Como a inteligência artificial não consegue pegar 100% dos erros de acessibilidade (por exemplo, saber se a descrição de uma imagem faz sentido), o Axe faz perguntas passo a passo para a pessoa responder (por exemplo, “Esta tabela contém dados tabulares ou é apenas para layout?”), guiando um teste manual profundo sem exigir que ela seja especialista em WCAG. É semelhante a um checklist.

???+ example "Passo a passo"
    1. Instale a extensão **axe DevTools** no navegador.
    2. Abra a página, depois o DevTools (**F12**) e a aba **axe DevTools**.
    3. Clique em **Scan all of my page** (varrer a página inteira).
    4. Revise os problemas por gravidade; para cada um, veja o elemento afetado e a orientação de correção.
    5. Na versão Pro, use os **testes guiados** para as verificações que dependem de julgamento humano.

### ASES Web (Gov.br) { #ases-web }

O ASES é uma ferramenta oficial do Governo Federal do Brasil.

- **Foco regional (eMAG):** enquanto as outras ferramentas testam com base nas WCAG globais, o ASES avalia os sites de acordo com o eMAG (Modelo de Acessibilidade em Governo Eletrônico), que é o padrão exigido por lei para sites públicos brasileiros.
- **Como funciona:** fornece análises percentuais de conformidade, avaliando código HTML e CSS. É fundamental para empresas privadas que prestam serviços ao governo ou instituições que precisam comprovar conformidade legal no Brasil.

???+ example "Passo a passo"
    1. Acesse o ASES Web (veja o link em [Referências](referencias.md)).
    2. Informe o que será avaliado (por exemplo, a URL da página), conforme as opções que a ferramenta oferecer.
    3. Execute a avaliação e aguarde o relatório.
    4. Leia o percentual de conformidade e a lista de erros por recomendação do eMAG.
    5. Corrija os pontos apontados e avalie de novo para comparar.

## Leitores de tela

### NVDA (NonVisual Desktop Access) { #nvda }

- **Plataforma:** Windows.
- **Características:** é gratuito, de código aberto e atualmente o leitor de tela mais utilizado no mundo em computadores desktop.
- **Prática de teste:** profissionais de UX e desenvolvimento usam o NVDA com os olhos vendados (ou a tela desligada), navegando apenas pela tecla **Tab** e pelas **setas direcionais**. O objetivo é testar se o fluxo da interface faz sentido quando “ouvido” de cima para baixo e se os elementos interativos (como modais e pop-ups) anunciam seu estado corretamente.

???+ example "Passo a passo"
    1. Baixe o NVDA em [nvaccess.org](https://www.nvaccess.org/) (gratuito) e instale.
    2. Inicie o NVDA e abra a página no navegador.
    3. Navegue com **Tab** e **Shift + Tab** pelos elementos interativos e com as **setas** pelo texto. Em páginas web, as teclas **H** (títulos), **K** (links) e **F** (campos de formulário) pulam entre elementos do mesmo tipo.
    4. Ouça o que é anunciado: nome, função e estado de cada componente.
    5. Anote onde o fluxo não faz sentido, onde falta nome ou onde um modal não anuncia que abriu.

### VoiceOver (iOS) { #voiceover }

- **Plataforma:** ecossistema Apple (macOS, iOS, iPadOS).
- **Características:** já vem nativo e pré-instalado em todos os dispositivos Apple. No celular (iPhone), revolucionou a acessibilidade por ser o primeiro a implementar a navegação por toques em telas de vidro.
- **Prática de teste:** no celular, os testes envolvem gestos de *swipe* (deslizar o dedo para a direita ou esquerda para mover o foco) e toque duplo para ativar botões. Permite identificar se os “alvos de toque” estão bem configurados e se os agrupamentos de informação estão corretos. O recurso **Rotor** permite navegar por cabeçalhos e links rapidamente.

???+ example "Passo a passo"
    1. No iPhone ou iPad, ative em **Ajustes › Acessibilidade › VoiceOver**. No Mac, use o atalho **Command + F5**.
    2. Abra o site ou app a testar.
    3. **Deslize para a direita ou esquerda** para mover o foco entre os elementos e **toque duas vezes** para ativar.
    4. Use o **Rotor** (gesto de girar dois dedos) para escolher “Cabeçalhos” ou “Links” e deslizar para cima ou para baixo.
    5. Verifique se os alvos de toque são fáceis de acertar e se os grupos de informação são lidos de forma coerente.

### TalkBack (Android) { #talkback }

- **Plataforma:** Android (Google).
- **Características:** é o leitor de tela nativo do sistema Android. Funciona de forma semelhante ao VoiceOver em dispositivos móveis, usando um conjunto de gestos padronizados.
- **Prática de teste:** usado intensamente no desenvolvimento de aplicativos mobile. O TalkBack dita o texto na tela e fornece retorno sonoro ou vibratório. Testar com ele garante que a **ordem de foco** (a sequência em que os elementos são lidos) corresponda à ordem visual da interface, evitando que a pessoa cega seja levada ao botão “Confirmar” antes de passar pelo campo “Aceitar os termos”.

???+ example "Passo a passo"
    1. Ative em **Configurações › Acessibilidade › TalkBack** (o caminho pode variar conforme o aparelho). Veja a [ajuda oficial do Google](https://support.google.com/accessibility/android/answer/6007100?hl=pt-BR).
    2. Abra o app ou site que será testado.
    3. **Deslize para a direita ou esquerda** para mover o foco e **toque duas vezes** para ativar o item selecionado.
    4. Percorra a tela inteira e confirme se a sequência de leitura bate com a ordem visual.
    5. Anote campos sem nome, botões sem descrição e qualquer ordem de foco confusa.

!!! note "Fontes"
    As referências de cada ferramenta (APPLE, DEQUE SYSTEMS, GOOGLE, NV ACCESS, WebAIM, entre outras) estão em [Referências](referencias.md).
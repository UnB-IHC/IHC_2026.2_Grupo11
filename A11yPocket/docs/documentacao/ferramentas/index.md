# Ferramentas de teste

Ferramentas automáticas **ajudam a encontrar erros**, mas não substituem a avaliação humana: nenhuma delas diz, por exemplo, se a descrição de uma imagem faz sentido. Por isso, esta página reúne as ferramentas de **análise automática** e os **leitores de tela**, com um comparativo e um passo a passo de uso. Use-as junto com o [checklist](../../checklist/index.md).

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
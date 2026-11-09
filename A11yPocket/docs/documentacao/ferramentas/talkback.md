# TalkBack (Android) { #talkback }

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
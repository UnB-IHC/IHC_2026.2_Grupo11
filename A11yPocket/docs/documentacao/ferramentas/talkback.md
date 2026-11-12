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
    As referências de cada ferramenta (APPLE, DEQUE SYSTEMS, GOOGLE, NV ACCESS, WebAIM, entre outras) estão em [Referências](../../referencias.md).

## Contexto e finalidade

Leitor de tela do Android. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Validação de navegação por toque exploratório, gestos e rótulos em dispositivos móveis. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Explore elementos por gesto, navegue por controles e cabeçalhos e teste atualizações dinâmicas.

## Exemplo prático de verificação

Um botão exibido apenas como ícone precisa anunciar uma ação compreensível. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** Um teste só em desktop não garante a mesma experiência no celular.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

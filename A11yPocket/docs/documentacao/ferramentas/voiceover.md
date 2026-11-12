# VoiceOver (iOS) { #voiceover }

- **Plataforma:** ecossistema Apple (macOS, iOS, iPadOS).
- **Características:** já vem nativo e pré-instalado em todos os dispositivos Apple. No celular (iPhone), revolucionou a acessibilidade por ser o primeiro a implementar a navegação por toques em telas de vidro.
- **Prática de teste:** no celular, os testes envolvem gestos de *swipe* (deslizar o dedo para a direita ou esquerda para mover o foco) e toque duplo para ativar botões. Permite identificar se os “alvos de toque” estão bem configurados e se os agrupamentos de informação estão corretos. O recurso **Rotor** permite navegar por cabeçalhos e links rapidamente.

???+ example "Passo a passo"
    1. No iPhone ou iPad, ative em **Ajustes › Acessibilidade › VoiceOver**. No Mac, use o atalho **Command + F5**.
    2. Abra o site ou app a testar.
    3. **Deslize para a direita ou esquerda** para mover o foco entre os elementos e **toque duas vezes** para ativar.
    4. Use o **Rotor** (gesto de girar dois dedos) para escolher “Cabeçalhos” ou “Links” e deslizar para cima ou para baixo.
    5. Verifique se os alvos de toque são fáceis de acertar e se os grupos de informação são lidos de forma coerente.

## Contexto e finalidade

Leitor de tela da Apple para macOS e iOS. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Verificação em sistemas Apple, incluindo gestos e navegação por rotor. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Teste controles por nomes acessíveis e regiões; confirme estados de seleção e mudanças de conteúdo.

## Exemplo prático de verificação

Percorra formulário e confirme se cada campo anuncia instrução e erro de validação. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** A experiência difere entre macOS e iPhone; registre dispositivo e navegador.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

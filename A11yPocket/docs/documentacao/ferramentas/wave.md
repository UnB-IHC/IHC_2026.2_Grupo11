# WAVE { #wave }

Criado pela WebAIM, o WAVE é uma extensão de navegador (e ferramenta web) que se destaca pelo teste **visual e intuitivo**.

- **Como funciona:** injeta ícones coloridos diretamente sobre a interface da página testada. Um ícone vermelho aparece exatamente onde há um erro, e um ícone verde onde a acessibilidade estrutural está correta.
- **Melhor caso de uso:** validações rápidas de contraste e checagem visual da estrutura de títulos (H1, H2) e dos atributos de imagem (*alt text*). Excelente para designers e profissionais de conteúdo visualizarem os problemas no próprio layout.

???+ example "Passo a passo"
    1. Instale a extensão **WAVE Evaluation Tool** no navegador (há versões para Chrome, Firefox e Edge) ou acesse o site [wave.webaim.org](https://wave.webaim.org/) e digite a URL.
    2. Abra a página que será avaliada e clique no ícone da extensão.
    3. Leia o resumo no painel lateral (erros, alertas, recursos de acessibilidade, elementos estruturais).
    4. Clique nos ícones sobre a página para ver o detalhe e a explicação de cada item.
    5. Use a visão de contraste para localizar combinações de cor insuficientes.

## Contexto e finalidade

Ferramenta de avaliação visual de páginas web. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Inspeção rápida de erros identificáveis automaticamente e visualização da posição dos elementos. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Erros, alertas, contraste e estrutura de cabeçalhos devem ser analisados separadamente; muitos alertas são pedidos de revisão humana.

## Exemplo prático de verificação

Confira se o texto alternativo transmite a função de um link com imagem; não basta que um atributo `alt` exista. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** A presença de poucos erros automáticos **não comprova conformidade WCAG**; imagens contextuais, uso por teclado e compreensão exigem inspeção manual.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

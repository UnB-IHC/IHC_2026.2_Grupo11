# Axe DevTools (Deque Systems) { #axe-devtools }

O Axe é considerado o padrão ouro da indústria para desenvolvedores e QAs (*Quality Assurance*), sendo o motor por trás de muitas outras ferramentas (incluindo o próprio Lighthouse).

- **Testes automatizados:** varre o código em busca de violações das diretrizes WCAG, com taxa baixíssima de falsos positivos.
- **Testes guiados (passo a passo inteligente):** a grande força da versão Pro é o recurso *Intelligent Guided Tests*. Como a inteligência artificial não consegue pegar 100% dos erros de acessibilidade (por exemplo, saber se a descrição de uma imagem faz sentido), o Axe faz perguntas passo a passo para a pessoa responder (por exemplo, “Esta tabela contém dados tabulares ou é apenas para layout?”), guiando um teste manual profundo sem exigir que ela seja especialista em WCAG. É semelhante a um checklist.

???+ example "Passo a passo"
    1. Instale a extensão **axe DevTools** no navegador.
    2. Abra a página, depois o DevTools (**F12**) e a aba **axe DevTools**.
    3. Clique em **Scan all of my page** (varrer a página inteira).
    4. Revise os problemas por gravidade; para cada um, veja o elemento afetado e a orientação de correção.
    5. Na versão Pro, use os **testes guiados** para as verificações que dependem de julgamento humano.

## Contexto e finalidade

Analisador de regras automatizadas integrado às ferramentas do navegador. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Desenvolvimento, QA e regressão de acessibilidade em componentes e páginas. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Leia a regra, o impacto, o elemento afetado e o critério apontado; compare com a situação no DOM e documente a correção.

## Exemplo prático de verificação

Uma regra de nome acessível ausente em botão deve ser corrigida na semântica do componente e confirmada por inspeção. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** Automação não avalia por completo a qualidade da linguagem, a adequação do fluxo e a experiência com leitor de tela.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

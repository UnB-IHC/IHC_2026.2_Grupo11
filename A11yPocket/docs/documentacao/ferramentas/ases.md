# ASES Web (Gov.br) { #ases-web }

O ASES é uma ferramenta oficial do Governo Federal do Brasil.

- **Foco regional (eMAG):** enquanto as outras ferramentas testam com base nas WCAG globais, o ASES avalia os sites de acordo com o eMAG (Modelo de Acessibilidade em Governo Eletrônico), que é o padrão exigido por lei para sites públicos brasileiros.
- **Como funciona:** fornece análises percentuais de conformidade, avaliando código HTML e CSS. É fundamental para empresas privadas que prestam serviços ao governo ou instituições que precisam comprovar conformidade legal no Brasil.

???+ example "Passo a passo"
    1. Acesse o ASES Web (veja o link em [Referências](../../referencias.md)).
    2. Informe o que será avaliado (por exemplo, a URL da página), conforme as opções que a ferramenta oferecer.
    3. Execute a avaliação e aguarde o relatório.
    4. Leia o percentual de conformidade e a lista de erros por recomendação do eMAG.
    5. Corrija os pontos apontados e avalie de novo para comparar.

## Contexto e finalidade

Avaliador de acessibilidade voltado ao contexto brasileiro. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Análises de adequação a recomendações de acessibilidade de governo eletrônico. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Leia achados e recomendações por categoria e confira a versão das diretrizes usadas pelo serviço.

## Exemplo prático de verificação

Use os alertas para identificar problemas de código e confirme-os em contexto. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** Resultados automáticos não substituem WCAG, NBR, testes manuais ou avaliação com pessoas.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

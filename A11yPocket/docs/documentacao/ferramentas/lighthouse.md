# Lighthouse (Google) { #lighthouse }

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

## Contexto e finalidade

Auditoria automatizada de páginas web no navegador. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Triagem de acessibilidade combinada a outras dimensões de qualidade. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Avalie os itens auditados, não apenas a nota; registre versão, navegador e estado da página.

## Exemplo prático de verificação

Uma nota elevada não elimina a necessidade de testar foco, formulários e tarefas reais. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** Pontuação é indicador de triagem, **não certificação** de acessibilidade.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

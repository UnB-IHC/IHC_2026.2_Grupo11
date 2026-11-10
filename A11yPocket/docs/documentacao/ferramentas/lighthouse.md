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
# NVDA (NonVisual Desktop Access) { #nvda }

- **Plataforma:** Windows.
- **Características:** é gratuito, de código aberto e atualmente o leitor de tela mais utilizado no mundo em computadores desktop.
- **Prática de teste:** profissionais de UX e desenvolvimento usam o NVDA com os olhos vendados (ou a tela desligada), navegando apenas pela tecla **Tab** e pelas **setas direcionais**. O objetivo é testar se o fluxo da interface faz sentido quando “ouvido” de cima para baixo e se os elementos interativos (como modais e pop-ups) anunciam seu estado corretamente.

???+ example "Passo a passo"
    1. Baixe o NVDA em [nvaccess.org](https://www.nvaccess.org/) (gratuito) e instale.
    2. Inicie o NVDA e abra a página no navegador.
    3. Navegue com **Tab** e **Shift + Tab** pelos elementos interativos e com as **setas** pelo texto. Em páginas web, as teclas **H** (títulos), **K** (links) e **F** (campos de formulário) pulam entre elementos do mesmo tipo.
    4. Ouça o que é anunciado: nome, função e estado de cada componente.
    5. Anote onde o fluxo não faz sentido, onde falta nome ou onde um modal não anuncia que abriu.

## Contexto e finalidade

Leitor de tela gratuito para Windows. É uma etapa do processo de avaliação, não um veredito isolado. O ideal é formular antes **qual página, tarefa e critério** serão examinados.

## Quando utilizar

Inspeção de nomes, funções, estados, ordem de leitura e navegação por teclado. Combine verificações automáticas e manuais para evitar conclusões parciais.

## Como interpretar resultados

Além de Tab e Shift+Tab, explore títulos, regiões, formulários e tabelas pelos comandos do leitor.

## Exemplo prático de verificação

Abra um painel expansível e confira se o botão informa “expandido” ou “recolhido”. Documente o comportamento observado, a página, as condições do teste e o critério do guia relacionado.

## Boas práticas e erros comuns

- **Faça:** teste componentes em seus diferentes estados; registre ambiente, data e versão; reproduza o problema manualmente; compare o achado com WCAG e checklist.
- **Evite:** tratar todo alerta como falha comprovada; afirmar que uma pontuação isolada mede a experiência real; publicar capturas que revelem dados pessoais.
- **Limitação:** Não substitui testes com pessoas usuárias reais; resultados variam entre navegador e versão.

## Integração com a avaliação do grupo

Consulte os [resultados da avaliação do Detran-DF](../avaliacao-site/index.md) para observar como ferramentas, testes manuais e resultados de usuários podem se complementar.

## Fontes e continuidade

Consulte a documentação oficial da ferramenta e as [referências do projeto](../../referencias.md). Reconfirme a interface e os comandos se a versão da ferramenta mudar.

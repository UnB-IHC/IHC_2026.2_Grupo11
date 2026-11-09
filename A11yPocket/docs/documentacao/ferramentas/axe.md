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

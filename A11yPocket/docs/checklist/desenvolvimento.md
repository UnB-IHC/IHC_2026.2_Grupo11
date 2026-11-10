# Desenvolvimento e testes

Eixo técnico, centrado na **semântica HTML** como premissa básica: elementos nativos (botões, links, formulários), textos alternativos, foco visível, navegação 100% via teclado, ordem lógica de foco, hierarquia correta de cabeçalhos, cuidados com modais e captchas, e testes manuais e automáticos com leitores de tela.

<div class="guia-panel" data-checklist-progress data-category="desenvolvimento">
  <div class="guia-panel-head">
    <strong>Progresso desta página</strong>
    <span data-checklist-count aria-live="polite">0/18 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" class="guia-btn" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Leia cada critério, avalie a interface com evidências observáveis e marque apenas quando a condição for atendida. O progresso fica salvo **somente neste navegador** e alimenta a [Visão geral do progresso](progresso.md).

## Estrutura e semântica

- [ ] Uso de elementos semânticos nativos do HTML.
- [ ] Textos alternativos em todas as imagens informativas.
- [ ] Título da página definido e idioma principal da página especificado.
- [ ] Hierarquia correta de cabeçalhos, com sequência lógica e significativa.
- [ ] Link para pular blocos de conteúdo repetitivo.

## Teclado e foco

- [ ] Navegação 100% funcional via teclado, com foco visível e sem armadilhas de teclado.
- [ ] Foco visível e não obscurecido por elementos sobrepostos (como cabeçalhos fixos, banners ou chats).
- [ ] Ordem de foco lógica e coerente com a leitura.

## Tecnologias assistivas e componentes

- [ ] Testes manuais com leitor de tela além dos automáticos.
- [ ] Mensagens de status disponibilizadas programaticamente para leitores de tela.
- [ ] Componentes personalizados possuem nome, função e valor definidos (ex.: com WAI-ARIA).

## Interação, formulários e autenticação

- [ ] Área de clique mínima: 24x24px (exigido) a 44x44px (recomendado) em qualquer dispositivo.
- [ ] Autenticação acessível: não depender exclusivamente de testes cognitivos (como memorizar senhas ou resolver quebra-cabeças/captchas) sem oferecer alternativa.
- [ ] Formulários com rótulos descritivos associados aos campos.
- [ ] Formulários não exigem entrada redundante (digitar de novo informação já fornecida).
- [ ] Mensagens de erro identificam o campo com problema em texto e fornecem sugestão de correção.
- [ ] Conteúdo que aparece ao passar o mouse ou focar (ex.: tooltips) é persistente e pode ser dispensado sem mover o ponteiro.
- [ ] Cuidado redobrado ou eliminação de modais.
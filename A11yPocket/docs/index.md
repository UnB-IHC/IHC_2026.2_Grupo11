---
title: Início
hide:
  - navigation
  - toc
  - footer
---

<section class="home-hero" aria-labelledby="home-title">
  <div class="hero-content">
    <p class="hero-eyebrow">Interação Humano-Computador · Grupo 11</p>
    <h1 id="home-title">A11yPocket</h1>
    <p class="hero-lead">
      Um guia prático com checklists interativos, conteúdos e boas práticas
      de Acessibilidade em Interfaces Web.
    </p>
    <div class="hero-actions">
      <a class="home-button primary" href="checklist/">Documentação →</a>
      <a class="hero-link" href="https://github.com/UnB-IHC/IHC_2026.2_Grupo11" target="_blank" rel="noopener">GitHub ↗</a>
    </div>
    <ul class="hero-chips" aria-label="Resumo do guia">
      <li><strong>75</strong> itens de checklist</li>
      <li><strong>5</strong> categorias</li>
      <li>Base: <strong>NBR 17225</strong> · WCAG 2.2</li>
    </ul>
  </div>

  <div class="hero-illustration" aria-hidden="true">
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="100" cy="100" r="80"></circle>
      <path d="M22 90Q100 130 178 90M100 112L62 172M100 112L138 172"></path>
      <circle cx="100" cy="60" r="19" class="node"></circle>
      <circle cx="22" cy="90" r="12" class="node"></circle>
      <circle cx="178" cy="90" r="12" class="node"></circle>
      <circle cx="62" cy="172" r="12" class="node"></circle>
      <circle cx="138" cy="172" r="12" class="node"></circle>
    </svg>
  </div>
</section>

<div class="home-body">

<h2>O que é o A11yPocket</h2>

<p>O <strong>A11yPocket</strong> reúne, em um só lugar, o <strong>checklist de acessibilidade digital</strong> (75 itens em 5 categorias, com progresso salvo no seu navegador) e os <strong>conteúdos de IHC</strong> que o embasam: a norma <strong>ABNT NBR 17225:2025</strong>, o <strong>Guia de Boas Práticas para Acessibilidade Digital</strong> (Programa de Cooperação Reino Unido-Brasil), métodos de UX/Design Centrado no Usuário e ferramentas de teste.</p>

<p>Tudo isso está na <a href="checklist/">Documentação</a>.</p>

<h2>Explore o guia</h2>

<p>Escolha uma categoria, marque o que o seu projeto já cumpre e acompanhe o avanço. As marcações ficam salvas apenas neste navegador.</p>

<div class="guia-cards guia-cards--4">
  <a class="guia-card" href="checklist/gestao-projetos/">
    <span class="guia-kicker">Eixo 1</span>
    <strong>Gestão de Projetos</strong>
    <span class="guia-meta" data-cat-count="gestao-projetos" data-total="5">5 itens</span>
    <span>Acessibilidade desde a concepção, personas e cultura organizacional.</span>
  </a>
  <a class="guia-card" href="checklist/desenvolvimento/">
    <span class="guia-kicker">Eixo 2</span>
    <strong>Desenvolvimento e testes</strong>
    <span class="guia-meta" data-cat-count="desenvolvimento" data-total="18">18 itens</span>
    <span>Semântica HTML, teclado, foco, formulários e leitores de tela.</span>
  </a>
  <a class="guia-card" href="checklist/design/">
    <span class="guia-kicker">Eixo 3</span>
    <strong>Design</strong>
    <span class="guia-meta" data-cat-count="design" data-total="11">11 itens</span>
    <span>Contraste, responsividade, áreas de toque e animações.</span>
  </a>
  <a class="guia-card" href="checklist/conteudo/">
    <span class="guia-kicker">Eixo 4</span>
    <strong>Conteúdo</strong>
    <span class="guia-meta" data-cat-count="conteudo" data-total="11">11 itens</span>
    <span>Terminologia, descrição de imagens, legendas, Libras e links.</span>
  </a>
  <a class="guia-card is-wide" href="checklist/heuristicas/">
    <span class="guia-kicker">Complemento</span>
    <strong>Heurísticas de Usabilidade</strong>
    <span class="guia-meta" data-cat-count="heuristicas" data-total="30">30 itens</span>
    <span>As 10 heurísticas de Nielsen aplicadas à interface.</span>
  </a>
</div>

<div class="guia-panel">
  <div class="guia-panel-head">
    <strong>Seu progresso geral</strong>
    <span id="global-progress-text" class="guia-stats">0 de 75 itens (0%)</span>
  </div>
  <progress id="global-progress" value="0" max="75" aria-label="Progresso geral do guia"></progress>
  <p id="checklist-feedback" class="guia-feedback" aria-live="polite">Nenhum item marcado ainda. Escolha uma categoria para começar.</p>
</div>

<h2>Informações acadêmicas</h2>

<div class="home-academic">
  <div class="academic-grid-2col">
    <div><span>Instituição: </span><strong>Universidade de Brasília (UnB)</strong></div>
    <div><span>Curso: </span><strong>Engenharia de Software</strong></div>
    <div><span>Disciplina: </span><strong>Interação Humano-Computador</strong></div>
    <div><span>Docente: </span><strong>Prof.ª Rejane Figueiredo</strong></div>
    <div><span>Semestre: </span><strong>2026.2</strong></div>
    <div><span>Equipe: </span><strong>Grupo 11</strong></div>
  </div>
</div>

<h2>Equipe</h2>

<div class="home-team-grid" role="list" style="grid-template-columns: repeat(4, minmax(0, 1fr));">
  <a href="https://github.com/El-flipante" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/El-flipante.png?size=160" alt="Foto de perfil de Alexandre Henrique" width="80" height="80" loading="lazy">
    <h3>Alexandre Henrique</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@El-flipante</span>
  </a>
  <a href="https://github.com/DaviSakai" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/DaviSakai.png?size=160" alt="Foto de perfil de Davi Kenichi" width="80" height="80" loading="lazy">
    <h3>Davi Kenichi</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@DaviSakai</span>
  </a>
  <a href="https://github.com/igorlym" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/igorlym.png?size=160" alt="Foto de perfil de Igor Lima" width="80" height="80" loading="lazy">
    <h3>Igor Lima</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@igorlym</span>
  </a>
  <a href="https://github.com/joaorolim-code" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/joaorolim-code.png?size=160" alt="Foto de perfil de João Gabriel" width="80" height="80" loading="lazy">
    <h3>João Gabriel</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@joaorolim-code</span>
  </a>
  <a href="https://github.com/JoaoPaulojac" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/JoaoPaulojac.png?size=160" alt="Foto de perfil de João Paulo" width="80" height="80" loading="lazy">
    <h3>João Paulo</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@JoaoPaulojac</span>
  </a>
  <a href="https://github.com/kauantarchetti" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/kauantarchetti.png?size=160" alt="Foto de perfil de Kauan Tarchetti" width="80" height="80" loading="lazy">
    <h3>Kauan Tarchetti</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@kauantarchetti</span>
  </a>
    <a href="https://github.com/Luc4sF3rreira" class="team-card is-lead" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/Luc4sF3rreira.png?size=160" alt="Foto de perfil de Lucas Ferreira Santana" width="80" height="80" loading="lazy">
    <h3>Lucas Ferreira Santana</h3>
    <span class="team-role">Líder</span>
    <span class="team-user">@Luc4sF3rreira</span>
  </a>
  <a href="https://github.com/LucasPeixotoRodrigues" class="team-card" role="listitem" target="_blank" rel="noopener">
    <img src="https://github.com/LucasPeixotoRodrigues.png?size=160" alt="Foto de perfil de Lucas Peixoto" width="80" height="80" loading="lazy">
    <h3>Lucas Peixoto</h3>
    <span class="team-role">Integrante</span>
    <span class="team-user">@LucasPeixotoRodrigues</span>
  </a>
</div>

<h2>Referências</h2>

<p>A base normativa e teórica que sustenta este checklist:</p>

<div class="references-list" role="list">
  <article role="listitem">
    <h3>ABNT NBR 17225:2025</h3>
    <p>Norma brasileira que estabelece os requisitos de acessibilidade para conteúdo e aplicações web, com foco nos princípios de percepção, compreensão e operação de interfaces, servindo como métrica técnica rigorosa de conformidade.</p>
  </article>
  <article role="listitem">
    <h3>Guia de Boas Práticas para Acessibilidade Digital</h3>
    <p>Publicação resultante do Programa de Cooperação Reino Unido-Brasil, que traduz critérios normativos em um modelo operacional aplicável ao ciclo de desenvolvimento através de quatro pilares: Gestão, Desenvolvimento, Design e Conteúdo.</p>
  </article>
</div>

<p>Veja também a página de <a href="referencias/">referências completas</a>.</p>

</div>
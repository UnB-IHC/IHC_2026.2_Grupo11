
## Explore as ferramentas

As ferramentas de avaliação possuem objetivos e métodos
diferentes. Conheça seus recursos e saiba quando utilizá-las.

### Ferramentas de análise automática

<div class="guia-cards guia-cards--3">
  <a class="guia-card" href="wave.md">
    <span class="guia-kicker">Análise visual</span>
    <strong>WAVE</strong>
    <span>Identificação visual de problemas de acessibilidade, contraste e estrutura.</span>
  </a>

  <a class="guia-card" href="axe.md">
    <span class="guia-kicker">Auditoria automática</span>
    <strong>axe DevTools</strong>
    <span>Inspeção de violações de acessibilidade e orientação para correção.</span>
  </a>

  <a class="guia-card" href="lighthouse.md">
    <span class="guia-kicker">Auditoria de qualidade</span>
    <strong>Lighthouse</strong>
    <span>Auditorias automatizadas de acessibilidade e outros aspectos de qualidade web.</span>
  </a>

  <a class="guia-card" href="ases.md">
    <span class="guia-kicker">eMAG</span>
    <strong>ASES Web</strong>
    <span>Avaliação de páginas web com foco nas recomendações brasileiras de acessibilidade.</span>
  </a>
</div>

### Leitores de tela

<div class="guia-cards guia-cards--3">
  <a class="guia-card" href="nvda.md">
    <span class="guia-kicker">Windows</span>
    <strong>NVDA</strong>
    <span>Teste da navegação e interpretação de interfaces com leitor de tela.</span>
  </a>

  <a class="guia-card" href="voiceover.md">
    <span class="guia-kicker">Apple</span>
    <strong>VoiceOver</strong>
    <span>Avaliação da experiência com leitor de tela em dispositivos Apple.</span>
  </a>

  <a class="guia-card is-wide" href="talkback.md">
    <span class="guia-kicker">Android</span>
    <strong>TalkBack</strong>
    <span>Teste de navegação, gestos e interação acessível em dispositivos Android.</span>
  </a>
</div>

!!! tip "Sugestão de fluxo de teste"
    1. Rode uma ferramenta **automática** (Lighthouse, Axe ou WAVE) para achar os erros evidentes.
    2. Se o site for público, avalie também no **ASES Web**.
    3. Navegue só com o **teclado** e com um **leitor de tela**.
    4. Registre o que encontrou e relacione cada problema a um item do checklist.
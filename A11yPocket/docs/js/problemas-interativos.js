
/* A11yPocket — Tabela interativa de problemas P01–P11.
   Mantém apenas um detalhamento aberto por vez.
   Sem JavaScript, a tabela e as fichas originais continuam disponíveis.
*/

(() => {
  function init() {
    const root = document.querySelector(".md-content__inner");
    if (!root) return;

    // Localiza a tabela da seção "Visão geral".
    const heading = [...root.querySelectorAll("h2")].find(
      h => h.textContent.trim() === "Visão geral"
    );

    if (!heading) return;

    let node = heading.nextElementSibling;
    let table = null;

    while (node && !node.matches("h2")) {
      table = node.matches("table")
        ? node
        : node.querySelector("table");

      if (table) break;
      node = node.nextElementSibling;
    }

    if (!table || table.dataset.apReady) return;

    const rows = [...table.querySelectorAll("tbody > tr")];

    if (
      !rows.length ||
      !rows.every(row =>
        /^P\d{2}$/.test(row.cells[0]?.textContent.trim() || "")
      )
    ) return;

    // Localiza as fichas originais.
    const detailHeading = [...root.querySelectorAll("h2")].find(
      h => h.textContent.trim() === "Detalhamento"
    );

    if (!detailHeading) return;

    const cards = new Map();
    let sectionNode = detailHeading.nextElementSibling;

    while (sectionNode && !sectionNode.matches("h2")) {
      if (sectionNode.matches("h3")) {
        const match = sectionNode.textContent.trim().match(/^P\d{2}/);
        const card = sectionNode.nextElementSibling;

        if (match && card?.classList.contains("prob-card")) {
          cards.set(match[0], {
            heading: sectionNode,
            card
          });
        }
      }

      sectionNode = sectionNode.nextElementSibling;
    }

    // Só transforma a tabela se todas as fichas existirem.
    if (
      rows.some(row =>
        !cards.has(row.cells[0].textContent.trim())
      )
    ) return;

    table.dataset.apReady = "true";
    table.classList.add("ap-problems-table");

    // Remove as colunas "Página / local" e "Evidência".
    // A remoção ocorre da direita para a esquerda para
    // preservar os índices das colunas restantes.
    [4, 2].forEach(index => {
      table.querySelectorAll("thead th")[index]?.remove();
    });

    let current = null;

    function close() {
      if (!current) return;

      const {
        row,
        panel,
        button,
        card,
        originalParent,
        originalNext
      } = current;

      button.setAttribute("aria-expanded", "false");
      row.classList.remove("ap-is-open");

      panel.remove();

      // Devolve a ficha ao local original.
      if (originalNext?.parentNode === originalParent) {
        originalParent.insertBefore(card, originalNext);
      } else {
        originalParent.appendChild(card);
      }

      current = null;
    }

    rows.forEach(row => {
      const id = row.cells[0].textContent.trim();
      const entry = cards.get(id);

      // Identifica a severidade antes de remover colunas.
      const severityElement = row.cells[3].querySelector(".sev");

      const severity = [...(severityElement?.classList || [])]
        .find(name => /^sev-[1-4]$/.test(name));

      if (severity) {
        row.classList.add("ap-" + severity);
      }

      // Remove as duas colunas desnecessárias.
      [4, 2].forEach(index => {
        row.cells[index]?.remove();
      });

      // Substitui o link do ID por um botão acessível.
      const originalLink = row.cells[0].querySelector("a");

      const button = document.createElement("button");
      button.type = "button";
      button.className = "ap-problem-toggle";
      button.textContent = id;

      button.setAttribute("aria-expanded", "false");
      button.setAttribute(
        "aria-controls",
        "ap-detail-" + id.toLowerCase()
      );

      button.setAttribute(
        "aria-label",
        "Mostrar ou ocultar detalhes do problema " + id
      );

      if (originalLink) {
        originalLink.replaceWith(button);
      } else {
        row.cells[0].replaceChildren(button);
      }

      row.classList.add("ap-problem-row");

      function toggle() {
        // Clicar no problema aberto fecha o detalhamento.
        if (current?.row === row) {
          close();
          return;
        }

        // Fecha qualquer outro detalhamento.
        close();

        const panel = document.createElement("tr");
        panel.className = "ap-detail-row";
        panel.id = "ap-detail-" + id.toLowerCase();

        if (severity) {
          panel.classList.add("ap-" + severity);
        }

        const cell = document.createElement("td");
        cell.colSpan = 3;

        // Guarda a posição original da ficha.
        const originalParent = entry.card.parentNode;
        const originalNext = entry.card.nextSibling;

        // Reutiliza a ficha original, sem duplicar conteúdo.
        cell.appendChild(entry.card);
        panel.appendChild(cell);

        // Insere o detalhamento imediatamente após a linha.
        row.after(panel);

        button.setAttribute("aria-expanded", "true");
        row.classList.add("ap-is-open");

        current = {
          row,
          panel,
          button,
          card: entry.card,
          originalParent,
          originalNext
        };
      }

      // Permite clicar na linha inteira.
      row.addEventListener("click", event => {
        if (
          event.target.closest(
            "a, button, input, select, textarea"
          )
        ) return;

        toggle();
      });

      // O botão funciona nativamente com Enter e Espaço.
      button.addEventListener("click", toggle);
    });

    // Esconde a seção original somente após a
    // inicialização bem-sucedida.
    detailHeading.hidden = true;

    for (const { heading, card } of cards.values()) {
      heading.hidden = true;
      card.classList.add("ap-movable-card");
    }

    // Suporte a links diretos como #p01, #p02 etc.
    function openHash() {
      let id;

      try {
        id = decodeURIComponent(
          location.hash.slice(1)
        ).toUpperCase();
      } catch {
        return;
      }

      if (!cards.has(id)) return;

      const row = rows.find(
        r => r.cells[0]?.textContent.trim() === id
      );

      if (!row) return;

      if (current?.row !== row) {
        row.querySelector(".ap-problem-toggle")?.click();
      }

      row.scrollIntoView({
        block: "center",
        behavior: "instant"
      });
    }

    openHash();
    window.addEventListener("hashchange", openHash);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Compatibilidade com navegação instantânea do MkDocs Material.
  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  }
})();
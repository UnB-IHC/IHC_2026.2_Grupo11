
/*
 * A11yPocket — Lightbox acessível de evidências.
 * Amplia imagens sem sair da página.
 * Exibe identificação e descrição da evidência.
 */

(() => {
  let overlay;
  let dialog;
  let picture;
  let legend;
  let closer;
  let priorFocus;

  // Descrições das evidências utilizadas na avaliação.
  const bDescriptions = {
    b1: "Resultados do WAVE na página inicial (E1).",
    b2: "Resultados do WAVE na Consulta de Nada Consta do Veículo (E2).",
    b3: "Resultados do WAVE na Consulta de Débito do Veículo (E3).",
    b4: "Resultados do WAVE na Emissão de CRLV-e (E4).",
    b5: "Resultados do WAVE na Emissão de ATPV-e (E5).",
    b6: "Resultados do WAVE na Emissão de Placa de Identificação do Veículo (E6).",
    b7: "Resultados do WAVE na Transferência de Veículo (E7).",
    b8: "Resultados do WAVE na Consulta de CNH (E8).",
    b9: "Resultados do WAVE na Marcação de Provas CNH — Teórico e Prático (E9).",
    b10: "Resultados do WAVE no Acompanhamento de Processo de Habilitação (E10).",
    b11: "Resultados do WAVE na Permissão Internacional para Dirigir (E11).",
    b12: "Resultados do WAVE na CNH Definitiva (E12).",
    b13: "Resultados do WAVE no Agendamento Presencial (E13).",
    b14: "Resultados do WAVE no Balcão Virtual (E14).",
    b15: "Resultados do WAVE na Consulta de Infrações por Condutor (E15).",
    b16: "Resultados do WAVE no Histórico de Infrações por Veículo (E16).",
    b17: "Resultados do WAVE na Consulta de Clínica (E18).",
    b18: "Resultados do WAVE na Consulta de Instrutores de Trânsito (E19).",
    b19: "Resultados do WAVE na Consulta de Auto Escola (E20).",
    b20: "Resultados do WAVE na Página de Login (E21).",
    b21: "Resultados do WAVE na Página Inicial 2 (E22).",

    b22: "Resultados do axe DevTools na página inicial (E1).",
    b23: "Resultados do axe DevTools na Consulta de Nada Consta do Veículo (E2).",
    b24: "Resultados do axe DevTools na Consulta de Débito do Veículo (E3).",
    b25: "Resultados do axe DevTools na Emissão de CRLV-e (E4).",
    b26: "Resultados do axe DevTools na Emissão de ATPV-e (E5).",
    b27: "Resultados do axe DevTools na Emissão de Placa de Identificação do Veículo (E6).",
    b28: "Resultados do axe DevTools na Transferência de Veículo (E7).",
    b29: "Resultados do axe DevTools na Consulta de CNH (E8).",
    b30: "Resultados do axe DevTools na Marcação de Provas CNH — etapa 1 de 4 (E9).",
    b31: "Resultados do axe DevTools na Marcação de Provas CNH — etapa 2 de 4 (E9).",
    b32: "Resultados do axe DevTools na Marcação de Provas CNH — etapa 3 de 4 (E9).",
    b33: "Resultados do axe DevTools na Marcação de Provas CNH — etapa 4 de 4 (E9).",
    b34: "Resultados do axe DevTools no Acompanhamento de Processo de Habilitação (E10).",
    b35: "Resultados do axe DevTools na Permissão Internacional para Dirigir (E11).",
    b36: "Resultados do axe DevTools na CNH Definitiva (E12).",
    b37: "Resultados do axe DevTools no Agendamento Presencial (E13).",
    b38: "Resultados do axe DevTools no Balcão Virtual (E14).",
    b39: "Resultados do axe DevTools na Consulta de Infrações por Condutor (E15).",
    b40: "Resultados do axe DevTools no Histórico de Infrações por Veículo (E16).",
    b41: "Resultados do axe DevTools na Consulta de Clínica (E18).",
    b42: "Resultados do axe DevTools na Consulta de Instrutores de Trânsito (E19).",
    b43: "Resultados do axe DevTools na Consulta de Auto Escola (E20).",
    b44: "Resultados do axe DevTools na Página de Login (E21).",
    b45: "Resultados do axe DevTools na Página Inicial 2 (E22)."
  };

  const descriptions = {
    "c14": "Cartões de serviços da página inicial do Detran-DF com textos descritivos em cinza claro sobre fundo branco, apresentando contraste insuficiente.",
    "c15": "Botões de download da App Store e do Google Play na página inicial, com imagens que não apresentam alternativas textuais adequadas.",
    "c16": "Campo de mensagem do assistente virtual, identificado visualmente pelo texto 'Digite uma mensagem', sem rótulo associado.",
    "c17": "Ícones de redes sociais, como Facebook, X e LinkedIn, apresentados sem nomes acessíveis adequados.",
    "c18": "Página de autenticação do Detran Digital com a opção de entrada pelo gov.br, relacionada à dificuldade de autenticação identificada na avaliação.",
    "c19": "Página inicial do Detran Digital, apresentando uma organização visual diferente da utilizada no portal público.",
    "c20": "Tela de login do Detran Digital, utilizada na comparação da identidade visual entre os ambientes.",
    "c21": "Formulário de transferência de veículo com campos de placa e Renavam e apresentação de uma mensagem de erro genérica.",
    "c22": "Menu do usuário do Detran Digital com a opção de Logoff, sem uma etapa de confirmação da ação.",
    "c23": "Página inicial do portal do Detran-DF, na qual não foi identificada uma seção de perguntas frequentes claramente visível."
  };

  function create() {
    if (overlay) return;

    overlay = document.createElement("div");
    overlay.className = "ap-evidence-overlay";
    overlay.hidden = true;

    overlay.innerHTML = `
      <section
        class="ap-evidence-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Visualizador de evidência"
        aria-describedby="ap-evidence-description"
        tabindex="-1"
      >
        <button
          class="ap-evidence-close"
          type="button"
          aria-label="Fechar imagem"
        >
          &times;
        </button>

        <img
          class="ap-evidence-image"
          alt=""
        >

        <p
          class="ap-evidence-caption"
          id="ap-evidence-description"
        ></p>
      </section>
    `;

    document.body.appendChild(overlay);

    dialog = overlay.querySelector(".ap-evidence-dialog");
    picture = overlay.querySelector(".ap-evidence-image");
    legend = overlay.querySelector(".ap-evidence-caption");
    closer = overlay.querySelector(".ap-evidence-close");

    closer.addEventListener("click", close);

    overlay.addEventListener("click", event => {
      if (event.target === overlay) close();
    });
  }

  function close() {
    if (!overlay || overlay.hidden) return;

    overlay.hidden = true;

    picture.removeAttribute("src");
    picture.alt = "";

    document.documentElement.classList.remove(
      "ap-evidence-open"
    );

    if (priorFocus?.isConnected) {
      priorFocus.focus();
    }
  }

  function getFigureId(url) {
    const filename = url.pathname
      .split("/")
      .pop()
      ?.toLowerCase();

    const match = filename?.match(
      /^fig-([bc]\d+)\.webp$/
    );

    return match ? match[1] : null;
  }


  function getEvidenceDescription(url, trigger, alt, caption) {
    const figureId = getFigureId(url);

    if (trigger?.dataset?.caption?.trim()) {
      return trigger.dataset.caption.trim();
    }

    if (figureId && bDescriptions[figureId]) {
      return bDescriptions[figureId];
    }

    if (figureId && descriptions[figureId]) {
      return descriptions[figureId];
    }

    if (
      caption?.trim() &&
      !/^fig\.?\s*[bc]\d+\.?$/i.test(caption.trim())
    ) {
      return caption.trim();
    }

    if (
      alt?.trim() &&
      !/^fig\.?\s*[bc]\d+\.?$/i.test(alt.trim())
    ) {
      return alt.trim();
    }

    return "Captura de tela da avaliação de acessibilidade e usabilidade.";
  }

  function getFigureTitle(url) {
    const id = getFigureId(url);

    if (!id) return "";

    return `Fig. ${id.charAt(0).toUpperCase()}${id.slice(1)}`;
  }

  function open(src, alt, caption, trigger) {
    create();

    priorFocus = trigger || document.activeElement;

    const url = new URL(src, location.href);

    const description = getEvidenceDescription(
      url,
      trigger,
      alt,
      caption
    );

    const title = getFigureTitle(url);

    picture.src = url.href;
    picture.alt = alt || description;

    legend.textContent = title
      ? `${title} — ${description}`
      : description;

    overlay.hidden = false;

    document.documentElement.classList.add(
      "ap-evidence-open"
    );

    closer.focus();
  }

  function isEvidence(url) {
    return (
      url.origin === location.origin &&
      /\/assets\/images\/avaliacao-detran\/fig-[bc]\d+\.webp$/i.test(
        url.pathname
      )
    );
  }

  // Transforma imagens sem link em controles acessíveis.
  function initialize() {
    const root = document.querySelector(
      ".md-content__inner"
    );

    if (!root) return;

    const images = root.querySelectorAll(
      '.prob-fig img, .rel-fig img, img[src*="avaliacao-detran/fig-"]'
    );

    for (const img of images) {
      if (
        img.closest("a") ||
        img.closest(".ap-evidence-trigger") ||
        img.dataset.apLightbox
      ) {
        continue;
      }

      const url = new URL(
        img.currentSrc || img.src,
        location.href
      );

      if (!isEvidence(url)) continue;

      const button = document.createElement("button");

      button.type = "button";
      button.className = "ap-evidence-trigger";

      button.setAttribute(
        "aria-label",
        `Ampliar imagem: ${img.alt || getFigureTitle(url)}`
      );

      const figure = img.closest("figure");
      const caption = figure
        ?.querySelector("figcaption")
        ?.textContent
        ?.trim();

      img.before(button);
      button.append(img);

      img.dataset.apLightbox = "true";

      button.addEventListener("click", () => {
        open(
          url.href,
          img.alt,
          caption,
          button
        );
      });
    }
  }

  // Intercepta links diretos para imagens de evidência.
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href]");

    if (
      !link ||
      overlay?.contains(link) ||
      event.defaultPrevented ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    let url;

    try {
      url = new URL(link.href, location.href);
    } catch {
      return;
    }

    if (!isEvidence(url)) return;

    event.preventDefault();

    const img = link.querySelector("img");
    const figure = link.closest("figure");

    const caption = figure
      ?.querySelector("figcaption")
      ?.textContent
      ?.trim();

    open(
      url.href,
      img?.alt || link.textContent.trim(),
      caption,
      link
    );
  });

  // Navegação por teclado.
  document.addEventListener("keydown", event => {
    if (!overlay || overlay.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "Tab") {
      // O botão fechar é o único controle da janela.
      event.preventDefault();
      closer.focus();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialize
    );
  } else {
    initialize();
  }

  // Navegação instantânea do MkDocs Material.
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      close();
      initialize();
    });
  }
})();
/* A11yPocket — Guia de Acessibilidade: progresso dos checklists.
   - Salvo em localStorage (por navegador).
   - Cada item é identificado por um hash do próprio texto (sem siglas/códigos).
   - Nenhuma lista fixa de categorias: o total vem do HTML (data-total / max). */
(function () {
  "use strict";

  var PREFIX = "a11ypocket:guia:";

  function hash(text) {
    var s = text.replace(/\s+/g, " ").trim().toLowerCase();
    var h = 5381;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) | 0; }
    return (h >>> 0).toString(36);
  }
  function load(cat) {
    try { return JSON.parse(localStorage.getItem(PREFIX + cat) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function save(cat, state) {
    try { localStorage.setItem(PREFIX + cat, JSON.stringify(state)); } catch (e) { /* sem armazenamento */ }
  }
  function clear(cat) {
    try { localStorage.removeItem(PREFIX + cat); } catch (e) { /* noop */ }
  }
  function percent(done, total) { return total ? Math.round((done / total) * 100) : 0; }

  /* ---------- página de uma categoria ---------- */
  function setupCategoryPage() {
    var panel = document.querySelector("[data-checklist-progress]");
    if (!panel) return;
    var cat = panel.getAttribute("data-category");
    var boxes = Array.prototype.slice.call(
      document.querySelectorAll(".md-content .task-list-item input[type='checkbox']")
    );
    var countEl = panel.querySelector("[data-checklist-count]");
    var barEl = panel.querySelector("[data-checklist-bar]");
    var resetBtn = panel.querySelector("[data-checklist-reset]");
    var state = load(cat);

    function update() {
      var checked = boxes.filter(function (b) { return b.checked; }).length;
      if (countEl) countEl.textContent = checked + "/" + boxes.length + " itens concluídos (" + percent(checked, boxes.length) + "%)";
      if (barEl) barEl.value = percent(checked, boxes.length);
    }

    boxes.forEach(function (box) {
      var item = box.closest(".task-list-item");
      var text = item ? item.textContent.trim() : "";
      var key = hash(text);
      if (text && !box.getAttribute("aria-label")) box.setAttribute("aria-label", text); // nome acessível
      box.disabled = false;
      box.checked = state[key] === true;
      if (box.dataset.guiaBound === "true") return;
      box.dataset.guiaBound = "true";
      box.addEventListener("change", function () {
        if (box.checked) { state[key] = true; } else { delete state[key]; }
        save(cat, state);
        update();
      });
    });

    if (resetBtn && resetBtn.dataset.guiaBound !== "true") {
      resetBtn.dataset.guiaBound = "true";
      resetBtn.addEventListener("click", function () {
        if (!window.confirm("Limpar o progresso desta página?")) return;
        boxes.forEach(function (b) { b.checked = false; });
        Object.keys(state).forEach(function (k) { delete state[k]; });
        clear(cat);
        update();
      });
    }
    update();
  }

  /* ---------- painéis gerais (visão geral / home) ---------- */
  function feedbackFor(done, total) {
    if (done === 0) return "Nenhum item marcado ainda. Escolha uma categoria para começar.";
    if (done === total) return "Checklist completo! Todos os itens foram atendidos.";
    var p = percent(done, total);
    if (p < 34) return "Bom começo! Continue avançando pelas categorias.";
    if (p < 67) return "Você já passou de um terço do caminho.";
    return "Reta final: faltam poucos itens.";
  }

  function setupOverview() {
    var cats = {};
    document.querySelectorAll("[data-cat-bar],[data-cat-count]").forEach(function (el) {
      var id = el.getAttribute("data-cat-bar") || el.getAttribute("data-cat-count");
      var total = parseInt(el.getAttribute("data-total") || el.getAttribute("max"), 10);
      if (id && total && !cats[id]) cats[id] = total;
    });

    var ids = Object.keys(cats), total = 0, done = 0;
    ids.forEach(function (id) {
      var d = Math.min(Object.keys(load(id)).filter(function (k) { return load(id)[k] === true; }).length, cats[id]);
      total += cats[id]; done += d;
      document.querySelectorAll("[data-cat-count='" + id + "']").forEach(function (el) {
        el.textContent = d + "/" + cats[id] + " itens";
      });
      document.querySelectorAll("[data-cat-bar='" + id + "']").forEach(function (el) {
        el.max = cats[id]; el.value = d;
        var label = el.getAttribute("data-label");
        if (label) el.setAttribute("aria-label", label + ": " + d + " de " + cats[id] + " itens");
      });
    });

    var bar = document.getElementById("global-progress");
    var text = document.getElementById("global-progress-text");
    var fb = document.getElementById("checklist-feedback");
    if (bar) { bar.max = total || 1; bar.value = done; }
    if (text) text.textContent = done + " de " + total + " itens (" + percent(done, total) + "%)";
    if (fb) fb.textContent = feedbackFor(done, total);

    var resetAll = document.querySelector("[data-checklist-reset-all]");
    if (resetAll && resetAll.dataset.guiaBound !== "true") {
      resetAll.dataset.guiaBound = "true";
      resetAll.addEventListener("click", function () {
        if (!window.confirm("Limpar o progresso de TODAS as categorias?")) return;
        ids.forEach(clear);
        setupOverview();
      });
    }
  }

  function init() {
    setupCategoryPage();
    if (document.querySelector("[data-cat-bar],[data-cat-count]")) setupOverview();
  }

  if (typeof document$ !== "undefined") { document$.subscribe(init); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();
<!-- # A11yPocket — Grupo 11 (IHC · UnB)

Guia prático com checklists interativos, conteúdos e boas práticas de acessibilidade em interfaces web.
Site feito com [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) e publicado no GitHub Pages.

## Rodar localmente

```bash
pip install -r requirements.txt
mkdocs serve        # http://127.0.0.1:8000
```

## Publicar

1. Faça push na branch `main`. O workflow `.github/workflows/deploy.yml` roda `mkdocs gh-deploy` e cria/atualiza a branch `gh-pages`.
2. No GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `(root)`**.
3. Ajuste `site_url`, `repo_url` e `repo_name` no `mkdocs.yml` para o endereço real do repositório.

## Estrutura

```
docs/
  index.md                 # home
  referencias.md
  ihc/                     # conteúdos de IHC (norma/guia, UX/DCU, ferramentas)
  checklist/               # visão geral + 5 categorias (75 itens)
  javascripts/checklist-progress.js
  stylesheets/extra.css
mkdocs.yml                 # tema, navegação e extensões
```

## Editar o checklist

Cada item é uma linha `- [ ] **CÓDIGO** — texto`. O progresso é salvo por **código** (ex.: `DEV-03`), então
reordenar itens não perde as marcações. Se adicionar ou remover itens, atualize também:

- os totais em `CATEGORIES` no início de `docs/javascripts/checklist-progress.js`;
- os números exibidos em `docs/index.md` e `docs/checklist/index.md` (o `max` dos `<progress>`). -->

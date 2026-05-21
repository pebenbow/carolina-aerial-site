# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A commercial website for Carolina Aerial Wash, a small business owned and operated by a military veteran and spouse. Built with [Quarto](https://quarto.org/), a scientific/technical publishing framework that generates static sites from Markdown and YAML.

## Commands

```bash
quarto preview       # Start local dev server with live reload
quarto render        # Build the full site to docs/
quarto render <file> # Render a single page
```

Quarto must be installed separately from [quarto.org/docs/get-started](https://quarto.org/docs/get-started/). There is no npm/pip install step.

## Architecture

Quarto sites are configured via `_quarto.yml`. Key conventions:

- **`_quarto.yml`** — top-level config: site title, navbar, theme, output format
- **`.qmd` files** — Quarto Markdown pages (YAML frontmatter + Markdown body); these become HTML pages at the same relative path
- **`docs/`** — build output directory, committed to git (GitHub Pages serves from here)
- **`styles.css`** — custom CSS overrides on top of the Bootstrap cosmo theme

Page structure maps directly to file structure: `about.qmd` → `/about.html`. Navigation is declared in `_quarto.yml` rather than in individual files. Images go in `images/`.

## Commits

Use atomic commits: each commit should represent one logical change. Always run `quarto render` before committing so `docs/` stays in sync with the source `.qmd` files — both must be staged together in the same commit. The `docs/` directory is intentionally committed; do not add it to `.gitignore`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A commercial website for Carolina Aerial Wash, a small business owned and operated by a military veteran and spouse. Built with [Quarto](https://quarto.org/), a scientific/technical publishing framework that generates static sites from Markdown and YAML.

## Commands

```bash
quarto preview       # Start local dev server with live reload
quarto render        # Build the full site to _site/
quarto render <file> # Render a single page
```

Quarto must be installed separately from [quarto.org/docs/get-started](https://quarto.org/docs/get-started/). There is no npm/pip install step.

## Architecture

Quarto sites are configured via `_quarto.yml` (not yet created — this is the first file to add). Key conventions:

- **`_quarto.yml`** — top-level config: site title, navbar, theme, output format
- **`.qmd` files** — Quarto Markdown pages (YAML frontmatter + Markdown body); these become HTML pages at the same relative path
- **`_site/`** — build output directory, not committed to git
- **`styles.css`** or a Bootstrap theme — controls visual design

Page structure maps directly to file structure: `about.qmd` → `/about.html`. Navigation is declared in `_quarto.yml` rather than in individual files.

Images go in `images/`; the business logo is already at `images/logo.PNG`.

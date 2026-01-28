# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website with blog built using Eleventy (11ty) static site generator. Dark-themed, responsive design with glass-morphism styling.

## Development Commands

```bash
# Start development server with live reload
npx eleventy --serve

# Build for production
npx eleventy

# Clean build (remove output and rebuild)
rm -rf _site && npx eleventy
```

## Architecture

**Static Site Generator**: Eleventy 3.1.2 with Nunjucks templating

**Key Directories**:
- `_includes/` - Layout templates (layout.njk is base, post.njk for blog posts)
- `blog/` - Markdown blog posts with YAML front matter
- `assets/` - Static images
- `_site/` - Generated output (gitignored)

**Content Flow**:
- Blog posts use front matter with `tags: ['posts']` to join `collections.posts`
- Posts are automatically available on homepage and blog archive via Eleventy collections
- Custom date filters defined in `.eleventy.js`: `date` (locale) and `ymd` (YYYY.MM.DD)

**Styling**: Single `style.css` file using CSS variables for theming. No preprocessor.

**JavaScript**: Minimal vanilla JS in layout.njk for mobile menu and scroll-based navigation highlighting.

## Blog Post Format

```markdown
---
layout: post.njk
title: Post Title
date: YYYY-MM-DD
tags: ['posts']
---

Content here...
```

## Hosting

Deployed via Netlify (configured through `_redirects` file).

## Git Conventions

Uses conventional commits: `feat:`, `fix:`, `style:`, `refactor:`, etc.
Main branch is `master`.

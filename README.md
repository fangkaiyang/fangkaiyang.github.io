# Fangkai Yang Personal Website

Academic personal homepage for Fangkai Yang, built as a small Vite and TypeScript static site.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is prepared for GitHub Pages through `.github/workflows/deploy.yml`. The canonical repository is `fangkaiyang/fangkaiyang.github.io`, which publishes to `https://fangkaiyang.github.io/`.

## Publication Data

Publication entries live in `src/data.ts`. The homepage shows selected publications, while the full lists are served from static research-program pages under `work/<slug>/`:

- Computer-using agents and GUI intelligence
- Repository and code intelligence
- Reasoning, RAG, and model learning
- Cloud intelligence and autonomic systems
- Human-aware robotics and embodied agents

Each publication supports an optional `imageUrl` and `imageAlt` field for paper teaser images.
Use Google Scholar, ORCID, user-confirmed facts, and primary paper/project pages as identity and publication anchors; avoid importing from merged same-name records without manual verification. Raw downloaded PDFs or TeX sources should stay in the ignored `paper-artifacts/` folder.
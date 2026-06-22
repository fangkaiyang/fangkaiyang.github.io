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

The site is prepared for GitHub Pages through `.github/workflows/deploy.yml`. The intended repository name is `keanudicap.github.io`, which publishes to `https://keanudicap.github.io/`.

## Publication Data

Publication entries live in `src/data.ts` and are currently grouped into:

- LLM agents, RAG, and code intelligence
- Autonomic cloud systems
- Robotics and social agents

Each publication supports an optional `imageUrl` and `imageAlt` field for paper teaser images.
Use the KTH profile, Google Scholar, and ORCID as the primary identity anchors when updating publications; avoid importing from merged same-name records without manual verification.
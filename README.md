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

Publication entries live in `src/data.ts` and are currently grouped into:

- LLM agents, RAG, and code intelligence
- Code intelligence and repository agents
- RAG, reasoning, and model learning
- Autonomic cloud systems
- Robotics and social agents

Each publication supports an optional `imageUrl` and `imageAlt` field for paper teaser images.
Use the KTH profile, Google Scholar, and ORCID as the primary identity anchors when updating publications; avoid importing from merged same-name records without manual verification.
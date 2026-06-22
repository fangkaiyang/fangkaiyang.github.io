import './style.css'
import {
  biographyParagraphs,
  newsItems,
  profileLinks,
  quickFacts,
  selectedPublications,
  workAreas,
  type ProfileLink,
  type Publication,
  type RichTextPart,
  type WorkArea,
} from './data'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Application root was not found.')
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[character]
  })

const workHref = (slug: string) => `/work/${slug}/`

const renderExternalLink = (link: ProfileLink, className = 'link') => `
  <a class="${className}" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
    ${escapeHtml(link.label)}
  </a>
`

const renderRichText = (parts: RichTextPart[]) =>
  parts
    .map((part) => (typeof part === 'string' ? escapeHtml(part) : renderExternalLink(part, 'inline-link')))
    .join('')

const renderHeader = () => `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Fangkai Yang homepage">Fangkai Yang</a>
    <nav aria-label="Primary navigation">
      <a href="/#research">Research</a>
      <a href="/#selected">Selected</a>
      <a href="/#news">News</a>
      <a href="/#contact">Contact</a>
    </nav>
  </header>
`

const renderPublicationVisual = (publication: Publication) => {
  if (publication.imageUrl) {
    return `
      <img
        class="publication-image"
        src="${escapeHtml(publication.imageUrl)}"
        alt="${escapeHtml(publication.imageAlt ?? publication.title)}"
        loading="lazy"
      />
    `
  }

  return `
    <div class="publication-mark" aria-hidden="true">
      <span>${escapeHtml(publication.year)}</span>
      <strong>${escapeHtml(publication.venue)}</strong>
    </div>
  `
}

const renderPublicationLinks = (publication: Publication, areaSlug?: string) => {
  const links = publication.links ?? [{ label: 'Paper', href: publication.href }]
  const areaLink = areaSlug
    ? `<a class="paper-link internal-paper-link" href="${workHref(areaSlug)}">View area</a>`
    : ''

  return `
    <div class="publication-links">
      ${links.map((link) => renderExternalLink(link, 'paper-link')).join('')}
      ${areaLink}
    </div>
  `
}

const renderPublication = (publication: Publication, areaSlug?: string, isFeatured = false) => `
  <article class="publication-card${isFeatured ? ' featured-card' : ''}">
    ${renderPublicationVisual(publication)}
    <div class="publication-body">
      <div class="publication-meta">
        <span>${escapeHtml(publication.category)}</span>
        <span>${escapeHtml(publication.venue)}</span>
        <span>${escapeHtml(publication.year)}</span>
      </div>
      <h3><a href="${escapeHtml(publication.href)}" target="_blank" rel="noreferrer">${escapeHtml(publication.title)}</a></h3>
      <p>${escapeHtml(publication.summary)}</p>
      ${renderPublicationLinks(publication, areaSlug)}
    </div>
  </article>
`

const renderWorkAreaCard = (area: WorkArea) => {
  const featured = area.publications.find((publication) => publication.featured) ?? area.publications[0]

  return `
    <article class="work-card">
      <div class="work-card-visual">
        ${renderPublicationVisual(featured)}
      </div>
      <div class="work-card-body">
        <p class="card-kicker">${escapeHtml(area.eyebrow)}</p>
        <h3>${escapeHtml(area.title)}</h3>
        <p>${escapeHtml(area.description)}</p>
        <ul class="keyword-list">
          ${area.keywords.map((keyword) => `<li>${escapeHtml(keyword)}</li>`).join('')}
        </ul>
        <a class="area-link" href="${workHref(area.slug)}">View ${escapeHtml(area.shortTitle)}</a>
      </div>
    </article>
  `
}

const renderQuickFacts = () => `
  <dl>
    ${quickFacts
      .map(
        (fact) => `
          <div>
            <dt>${escapeHtml(fact.label)}</dt>
            <dd>${escapeHtml(fact.value)}</dd>
          </div>
        `,
      )
      .join('')}
  </dl>
`

const renderHome = () => {
  document.title = 'Fangkai Yang'

  return `
    ${renderHeader()}
    <main id="top">
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Microsoft Research Asia / Data, Knowledge, and Intelligence</p>
          <h1 id="hero-title">Fangkai Yang</h1>
          <p class="lead">
            I build agentic AI systems that can use software, reason over structured knowledge,
            write and evaluate code, and make reliable decisions in production and embodied environments.
          </p>
          <div class="profile-links" aria-label="Scholarly and research group links">
            ${profileLinks.map((link) => renderExternalLink(link)).join('')}
          </div>
        </div>
        <aside class="profile-panel" aria-label="Profile summary">
          <img
            class="portrait"
            src="/profile.jpg"
            alt="Fangkai Yang"
            width="240"
            height="240"
          />
          ${renderQuickFacts()}
        </aside>
      </section>

      <section class="section split-section" aria-labelledby="about-title">
        <div>
          <p class="section-kicker">About</p>
          <h2 id="about-title">Research across agents, systems, and social intelligence.</h2>
        </div>
        <div class="prose">
          ${biographyParagraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join('')}
        </div>
      </section>

      <section id="research" class="section" aria-labelledby="research-title">
        <div class="section-heading">
          <p class="section-kicker">Research Programs</p>
          <h2 id="research-title">Organized by the problems the papers are trying to solve</h2>
          <p>
            The homepage keeps only selected work visible. Full publication lists are grouped into research-program pages
            so GUI agents, GUI grounding, code intelligence, RAG, cloud systems, and robotics are easier to browse.
          </p>
        </div>
        <div class="work-grid">
          ${workAreas.map((area) => renderWorkAreaCard(area)).join('')}
        </div>
      </section>

      <section id="selected" class="section" aria-labelledby="selected-title">
        <div class="section-heading compact-heading">
          <p class="section-kicker">Selected Publications</p>
          <h2 id="selected-title">Top conference and journal papers</h2>
          <p>
            A compact entry point to recent papers; each card links to the paper and its research-program page.
          </p>
        </div>
        <div class="featured-grid">
          ${selectedPublications
            .map((publication) => renderPublication(publication, publication.areaSlug, true))
            .join('')}
        </div>
      </section>

      <section id="news" class="section split-section" aria-labelledby="news-title">
        <div>
          <p class="section-kicker">News</p>
          <h2 id="news-title">Recent updates</h2>
        </div>
        <ol class="news-list">
          ${newsItems
            .map(
              (item) => `
                <li>
                  <time>${escapeHtml(item.date)}</time>
                  <span>${escapeHtml(item.text)}</span>
                </li>
              `,
            )
            .join('')}
        </ol>
      </section>

      <section id="contact" class="section contact-section" aria-labelledby="contact-title">
        <div>
          <p class="section-kicker">Contact</p>
          <h2 id="contact-title">Scholarly profiles and research groups</h2>
        </div>
        <div class="contact-links">
          ${profileLinks.map((link) => renderExternalLink(link, 'contact-link')).join('')}
        </div>
      </section>
    </main>
  `
}

const renderCategoryPage = (area: WorkArea) => {
  document.title = `${area.title} | Fangkai Yang`

  return `
    ${renderHeader()}
    <main id="top" class="category-main">
      <section class="category-hero" aria-labelledby="category-title">
        <a class="back-link" href="/">Back to homepage</a>
        <p class="eyebrow">${escapeHtml(area.eyebrow)}</p>
        <h1 id="category-title">${escapeHtml(area.title)}</h1>
        <p class="lead">${escapeHtml(area.description)}</p>
        <div class="category-question">
          <span>Research question</span>
          <p>${escapeHtml(area.question)}</p>
        </div>
        <ul class="keyword-list category-keywords">
          ${area.keywords.map((keyword) => `<li>${escapeHtml(keyword)}</li>`).join('')}
        </ul>
      </section>

      <section class="section" aria-labelledby="category-publications-title">
        <div class="section-heading compact-heading">
          <p class="section-kicker">Publication List</p>
          <h2 id="category-publications-title">${escapeHtml(area.publications.length.toString())} papers in this program</h2>
          <p>
            Papers are ordered from newest to oldest, with project, code, PDF, or publisher links where available.
          </p>
        </div>
        <div class="publication-list category-publication-list">
          ${area.publications.map((publication) => renderPublication(publication)).join('')}
        </div>
      </section>
    </main>
  `
}

const normalizePath = (pathname: string) => pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
const currentPath = normalizePath(window.location.pathname)
const activeArea = workAreas.find((area) => currentPath === normalizePath(workHref(area.slug)))

app.innerHTML = activeArea ? renderCategoryPage(activeArea) : renderHome()

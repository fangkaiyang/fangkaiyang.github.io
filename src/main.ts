import './style.css'
import {
  biographyParagraphs,
  contactEmail,
  newsItems,
  profileLinks,
  recruitingNote,
  workAreas,
  type PatentRecord,
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

const renderExternalLink = (link: ProfileLink, className = 'link') => {
  if (className === 'inline-link') {
    return `<a class="${className}" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
  }

  return `
    <a class="${className}" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
      ${escapeHtml(link.label)}
    </a>
  `
}

const renderRichText = (parts: RichTextPart[]) =>
  parts
    .map((part) => (typeof part === 'string' ? escapeHtml(part) : renderExternalLink(part, 'inline-link')))
    .join('')

const renderHeader = () => `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Fangkai Yang homepage">Fangkai Yang</a>
    <nav aria-label="Primary navigation">
      <a href="/#research">Research</a>
      <a href="/#publications">Publications</a>
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

const renderPublicationLinks = (publication: Publication) => {
  const links = publication.links ?? [{ label: 'Paper', href: publication.href }]

  return `
    <div class="publication-links">
      ${links.map((link) => renderExternalLink(link, 'paper-link')).join('')}
    </div>
  `
}

const renderPublication = (publication: Publication, isCompact = false, isCategory = false) => `
  <article class="publication-card${isCompact ? ' compact-publication' : ''}${isCategory ? ' category-publication-card' : ''}">
    ${renderPublicationVisual(publication)}
    <div class="publication-body">
      <div class="publication-meta">
        <span>${escapeHtml(publication.category)}</span>
        <span>${escapeHtml(publication.venue)}</span>
        <span>${escapeHtml(publication.year)}</span>
      </div>
      <h3><a href="${escapeHtml(publication.href)}" target="_blank" rel="noreferrer">${escapeHtml(publication.title)}</a></h3>
      <p>${escapeHtml(publication.summary)}</p>
      ${renderPublicationLinks(publication)}
    </div>
  </article>
`

const renderPatentRecord = (patent: PatentRecord) => `
  <article class="patent-record">
    <div class="publication-meta">
      <span>${escapeHtml(patent.category)}</span>
      <span>${escapeHtml(patent.venue)}</span>
      <span>${escapeHtml(patent.year)}</span>
    </div>
    <h3><a href="${escapeHtml(patent.href)}" target="_blank" rel="noreferrer">${escapeHtml(patent.title)}</a></h3>
    <p>${escapeHtml(patent.summary)}</p>
    <div class="publication-links">
      ${(patent.links ?? [{ label: 'Patent', href: patent.href }]).map((link) => renderExternalLink(link, 'paper-link')).join('')}
    </div>
  </article>
`

const getHomepagePublications = (area: WorkArea) => {
  if (area.homepagePublicationIds?.length) {
    const publicationsById = new Map(area.publications.map((publication) => [publication.id, publication]))

    return area.homepagePublicationIds
      .map((publicationId) => publicationsById.get(publicationId))
      .filter((publication): publication is Publication => Boolean(publication))
  }

  const featured = area.publications.filter((publication) => publication.featured)
  const candidates = featured.length >= 2 ? featured : area.publications.slice(0, 3)

  return candidates.slice(0, 4)
}

const renderHomeAreaSection = (area: WorkArea) => `
  <article class="area-section" id="${escapeHtml(area.slug)}">
    <div class="area-intro">
      <p class="section-kicker">${escapeHtml(area.eyebrow)}</p>
      <h3><a class="area-title-link" href="${workHref(area.slug)}">${escapeHtml(area.title)}</a></h3>
      <p>${escapeHtml(area.homepageSummary)}</p>
      <ul class="keyword-list">
        ${area.keywords.map((keyword) => `<li>${escapeHtml(keyword)}</li>`).join('')}
      </ul>
      <a class="area-link" href="${workHref(area.slug)}">See more in ${escapeHtml(area.shortTitle)}</a>
    </div>
    <div class="area-publications">
      ${getHomepagePublications(area)
        .map((publication) => renderPublication(publication, true))
        .join('')}
    </div>
  </article>
`

const renderHome = () => {
  document.title = 'Fangkai Yang'

  return `
    ${renderHeader()}
    <main id="top">
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="portrait-column">
          <img
            class="portrait"
            src="/profile.jpg"
            alt="Fangkai Yang"
            width="220"
            height="220"
          />
        </div>
        <div class="hero-copy">
          <p class="eyebrow">About</p>
          <h1 id="hero-title">Fangkai Yang</h1>
          <p class="email-line">
            <a href="mailto:${escapeHtml(contactEmail)}">${escapeHtml(contactEmail)}</a>
          </p>
          <p class="lead">
            I build agentic AI systems that can use software, reason over structured knowledge,
            write and evaluate code, and make reliable decisions in production and embodied environments.
          </p>
          <div class="hero-bio">
            ${biographyParagraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join('')}
          </div>
          <p class="recruiting-note">${escapeHtml(recruitingNote)}</p>
          <div class="profile-links" aria-label="Scholarly and research group links">
            ${profileLinks.map((link) => renderExternalLink(link)).join('')}
          </div>
        </div>
      </section>

      <section id="research" class="section" aria-labelledby="research-title">
        <div class="section-heading">
          <p class="section-kicker">Research Areas</p>
          <h2 id="research-title">Selected work by area</h2>
        </div>
        <div id="publications" class="area-section-list">
          ${workAreas.map((area) => renderHomeAreaSection(area)).join('')}
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
          <h2 id="contact-title">Email and scholarly profiles</h2>
          <p class="contact-email"><a href="mailto:${escapeHtml(contactEmail)}">${escapeHtml(contactEmail)}</a></p>
          <p class="contact-note">${escapeHtml(recruitingNote)}</p>
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
          <h2 id="category-publications-title">Publications</h2>
        </div>
        <div class="publication-list category-publication-list">
          ${area.publications.map((publication) => renderPublication(publication, false, true)).join('')}
        </div>
      </section>

      ${
        area.patents?.length
          ? `
            <section class="section" aria-labelledby="category-patents-title">
              <div class="section-heading compact-heading">
                <p class="section-kicker">Patents</p>
                <h2 id="category-patents-title">Patents and invention records</h2>
              </div>
              <div class="patent-list">
                ${area.patents.map((patent) => renderPatentRecord(patent)).join('')}
              </div>
            </section>
          `
          : ''
      }
      <nav class="category-footer-nav" aria-label="Category page navigation">
        <a class="back-link bottom-back-link" href="/">Back to homepage</a>
      </nav>
    </main>
  `
}

const normalizePath = (pathname: string) => pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
const currentPath = normalizePath(window.location.pathname)
const activeArea = workAreas.find((area) => currentPath === normalizePath(workHref(area.slug)))

app.innerHTML = activeArea ? renderCategoryPage(activeArea) : renderHome()

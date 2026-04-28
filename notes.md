# Website Development Notes

Last updated: 25 April 2026

## What's been done

### Original setup
- Branch structure: `main` (live), `develop` (preview), feature branches per piece of work
- Netlify: `main` → leannefischler.net, `develop` has preview URL, PRs get deploy previews
- Blog infrastructure built: post template, date filter, listing page — unlisted from nav until ready to launch
- Repo cleanup: envs/ removed from tracking, stale branches deleted, safe vulnerabilities fixed

### Full redesign (April 2026)
Five-branch redesign merged through develop:
- `redesign/foundation` — new stylesheet, base layout, sidebar, footer; replaced Nunito/Roboto with Inter Tight + Source Serif 4
- `redesign/home-about` — homepage and about page rebuilt around new design system
- `redesign/projects-list` — new shared category page template with featured/earlier split
- `redesign/project-page` — new individual project layout with meta block at top
- `redesign/rotating-drawing` — random drawings per page with client-side rotation on refresh

Design system summary:
- Single typographic size (17px), hierarchy via opacity and italic emphasis
- Inter Tight body with Source Serif 4 italics for concept words
- Flat light grey background (#e8e8e6)
- Orange accent (#ff4a1c) used sparingly: link hovers, recent/in-progress markers
- Two-column layout: sticky sidebar (200px) + main content (max 1180px wide on all pages)
- Per-page random drawings from src/images/drawings/, with frontmatter override for specific pages
- Drawings cycle on every page load (client-side JS swap)

### Frontmatter schema additions (projects)
- `featuredIn: [tag1, tag2]` — array of category tags where project appears in featured grid
- `featuredOrder: 1/2/3/...` — global position in featured grids
- `kind` — short description for table column ("Dissertation, MSc", "Web app", etc.)
- `status: recent | in progress` — optional, shows orange marker beside title
- `drawing: /images/drawings/foo.jpg` — optional per-page sidebar drawing override

## Known issues to fix next session

- [ ] @11ty/eleventy-img needs updating from 2.0.1 → 6.0.4 (breaking change — do in feature branch, test locally first)
- [ ] Some projects still missing summary or kind values — table column will be sparse until filled in
- [ ] `client` frontmatter field unused; consider repurposing as second `with` field if needed

## Things to consider editing

### Copy I drafted that you might want to revise
- Page intros on the five category pages (research-and-futures.njk etc.) — currently placeholder-y
- Page heading italics (e.g. `Research & futures` with italic on "futures") — easy to change
- `kind` values added to project frontmatter — review and edit per project
- Italic concept words in About — check whether each italic still feels right after living with it
- Connect page placeholder — write your real version

### Style decisions to revisit later
- Image widths in project bodies: currently all full reading-column width; could add option for breakouts
- Featured grid layout: repeats 3-pattern for 4+ items; works but look at it once a category has 6+
- Sidebar drawing pool: aspect ratios vary; currently OK because container is square but consider standardising

## What's next

### Content (bring back from old site)
- [ ] Review old site PDFs — identify blog posts worth migrating to new blog
- [ ] Review old site PDFs — identify play/fun projects not currently in src/projects/
- [ ] Current projects in src/projects/ are mostly good — focus is on adding, not rewriting
- [ ] Add more line drawings to src/images/drawings/ as drawn

### Features
- [ ] Launch blog when ready: add eleventyNavigation block back to src/blog/index.njk
- [ ] RSS feed for blog (eleventy-plugin-rss — five minutes once blog is ready to launch)
- [ ] Blog placeholder page — structure ready to activate when announcement is appropriate
- [ ] Reading/Influences page — digital garden style, writers like Illich, Haraway, Ford, Gabrys

### Infrastructure
- [ ] Move images to external hosting (Cloudflare Images or Cloudinary)
  - Keep Eleventy Image plugin for resizing/format conversion
  - Point at remote URLs rather than local files
  - GitHub not ideal for image hosting at this scale

## Branch protocol
All work: feature branch → develop (review on Netlify preview) → main (goes live)

## Decisions made
- Blog stays on Eleventy (static, no new tools)
- No Roles section on homepage — credibility comes through the work
- public/ and WIP-and-unused/ excluded from git via .gitignore
- Self-description unified as "researcher and designer" everywhere
- All pages use the same wide page container (1180px) so sidebar position never shifts
- No prev/next links on project pages — keeps each page self-contained
- Site headline phrasing kept in Leanne's original voice ("connected small places on this planet")

## Files of note
- `src/_includes/base.njk` — page wrapper, fonts, base layout
- `src/_includes/nav-list.njk` — sidebar including drawing rotation logic
- `src/_includes/footer.njk` — colophon
- `src/_includes/category-page.njk` — shared template for all five project category pages
- `src/_includes/project-featured.njk` — single featured project tile
- `src/_includes/project.njk` — individual project layout
- `src/_includes/infos.njk` — about and connect layout
- `src/_data/drawings.js` — drawing pool data file
- `src/css/style.css` — full site stylesheet
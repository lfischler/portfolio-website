# Project notes and tasks

Last updated: April 2026

## What's been done

- Branch structure set up: `main` (live), `develop` (preview), feature branches for each piece of work
- Netlify configured: `main` deploys to leannefischler.net, `develop` has preview URL, PRs get deploy previews
- Homepage rewritten: profile card, on-this-site section, research themes, roles section removed
- About page rewritten: bio in Leanne's voice, CV updated and restructured
- Blog infrastructure built: post template, date filter, listing page — unlisted from nav until ready to launch
- Stale branches (`add-content`, `feature/bio-and-about`, `feature/blog-setup`) deleted after merging

## What's next

### Short term
- [ ] Add RSS feed (eleventy-plugin-rss — one plugin, five minutes)
- [ ] Fix connect page: remove closing "Feel free to reach out" filler line
- [ ] Review old site content (PDFs downloaded from Wayback Machine) — identify what to bring back
- [ ] Update project pages — add non-design work alongside existing design portfolio
- [ ] Launch blog when ready: add eleventyNavigation block back to src/blog/index.njk

### Medium term
- [ ] PhD placeholder page — draft structure ready to activate when announcement is appropriate
- [ ] Reading/Influences page — digital garden style, where writers like Illich, Haraway, Ford, Gabrys can live properly
- [ ] Consider Buttondown or RSS for blog subscriptions when blog launches
- [ ] Move images to external hosting (Cloudflare Images or Cloudinary), keeping Eleventy Image plugin for resizing/format conversion but pointing at remote URLs rather than local files

### Decisions already made
- Blog stays on Eleventy (static, no new tools)
- No Roles section on homepage — credibility comes through the work
- Em dashes replaced with en dashes throughout (UK English)
- PhD not mentioned on site until confirmed

## Branch protocol
All work goes: feature branch → develop (review on Netlify preview) → main (goes live)
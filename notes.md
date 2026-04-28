# Website Development Notes

Last updated: April 2026

## What's been done

- Branch structure: `main` (live), `develop` (preview), feature branches per piece of work
- Netlify: `main` → leannefischler.net, `develop` has preview URL, PRs get deploy previews
- Homepage rewritten in Leanne's voice: profile card, on-this-site, research themes, roles section removed
- About page rewritten: bio in Leanne's voice, CV updated and restructured
- Blog infrastructure built: post template, date filter, listing page — unlisted from nav until ready to launch
- Repo cleanup: envs/ removed from tracking, stale branches deleted, safe vulnerabilities fixed

## Known issues to fix next session

- [ ] @11ty/eleventy-img needs updating from 2.0.1 → 6.0.4 (breaking change — do in feature branch, test locally first)
- [ ] Connect page: remove closing "Feel free to reach out" filler line

## What's next

### Content (bring back from old site)
- [ ] Review old site PDFs — identify blog posts worth migrating to new blog
- [ ] Review old site PDFs — identify play/fun projects not currently in src/projects/
- [ ] Current projects in src/projects/ are mostly good — focus is on adding, not rewriting

### Features
- [ ] Launch blog when ready: add eleventyNavigation block back to src/blog/index.njk
- [ ] RSS feed for blog (eleventy-plugin-rss — five minutes once blog is ready to launch)
- [ ] PhD placeholder page — structure ready to activate when announcement is appropriate
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
- En dashes throughout (UK English)
- PhD not mentioned on site until confirmed
- public/ and WIP-and-unused/ excluded from git via .gitignore
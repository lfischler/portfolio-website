# Website Development Notes

Last updated: April 2026

## Branch protocol
All work: feature branch → develop (review on Netlify preview) → main (goes live via PR).
Never push directly to main from the command line.

## Known issues
- [ ] @11ty/eleventy-img needs updating 2.0.1 → 6.0.4 (breaking change — do in feature branch, test locally first)
- [ ] Update Node.js version to 22 — add `.node-version` file containing `22` to repo root, or add `NODE_VERSION = "22"` to `netlify.toml`

## Content to add or complete
- [ ] Go through all project frontmatter and ensure every field is present and filled out
- [ ] Add content to: The Intersection, GSA talk, SDR, SRIP, IsleDex, CES Techy, Branch
- [ ] Review old site PDFs — identify blog posts and play projects worth bringing back
- [ ] Add more line drawings to src/images/drawings/ as drawn
- [ ] Wanted to rewrite Address Fuel Poverty to be more critical.
- [ ] Projects to add:
    - [ ] MOS Singapore (Creative)
    - [ ] Invocation for Hope and Refuge for Resurgence (C)
    - [ ] MOTF
    - [ ] Other Superflux?
    - [ ] Galgael Workshop
    

## Features to build
- [ ] Launch blog: add eleventyNavigation block back to src/blog/index.njk, add RSS feed (eleventy-plugin-rss)
- [ ] Reading/Influences page — digital garden style

## Infrastructure
- [ ] Move images to external hosting (Cloudflare Images or Cloudinary), keeping Eleventy Image plugin for resizing

## Design decisions to revisit
- [ ] Category page intros — review whether current wording still feels right
- [ ] `kind` values on project frontmatter — review per project
- [ ] Featured grid layout — review when any category has 6+ items

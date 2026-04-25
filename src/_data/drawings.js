// Data source for sidebar drawings.
//
// Drops any image files in src/images/drawings/ into a rotation pool.
// On each build, picks one at random as the default sidebar drawing.
// Pages can override the default by setting `drawing: /images/drawings/foo.jpg`
// in their frontmatter.

import fs from "fs";
import path from "path";

export default function () {
  const dir = path.join(process.cwd(), "src", "images", "drawings");

  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  } catch (err) {
    // Folder doesn't exist yet — return empty so the site still builds.
    files = [];
  }

  if (files.length === 0) {
    return {
      all: [],
      random: null,
    };
  }

  const all = files.map((f) => `/images/drawings/${f}`);
  const random = all[Math.floor(Math.random() * all.length)];

  return { all, random };
}

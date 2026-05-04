// .eleventy.js (ESM style)
import fs from "fs";
import path from "path";
import Image from "@11ty/eleventy-img";
import markdownIt from "markdown-it";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import embeds from "eleventy-plugin-embed-everything";
import matter from "gray-matter";

export default function (eleventyConfig) {
  // Markdown library
  const mdLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });  
  mdLib.renderer.rules.image = (tokens, idx) => {
    const token = tokens[idx];
    const src = token.attrGet("src");
    const alt = token.content;
    const cloudinaryBase = "https://res.cloudinary.com/diwlxq34b/image/upload";
    const remoteSrc = `${cloudinaryBase}/portfolio${src}`;
    
    return `<figure>
      <img
        src="${remoteSrc.replace('/upload/', '/upload/w_800,f_auto,q_auto/')}"
        srcset="${remoteSrc.replace('/upload/', '/upload/w_300,f_auto,q_auto/')} 300w,
                ${remoteSrc.replace('/upload/', '/upload/w_800,f_auto,q_auto/')} 800w,
                ${remoteSrc.replace('/upload/', '/upload/w_1200,f_auto,q_auto/')} 1200w"
        sizes="(min-width: 30em) 80vw, 100vw"
        alt="${alt}"
        loading="lazy">
      ${alt ? `<figcaption>${alt}</figcaption>` : ''}
    </figure>`;
  };
  eleventyConfig.setLibrary("md", mdLib);

  eleventyConfig.addFilter("cloudinaryUrl", (src, width) => {
    if (!src) return "";
    const w = width || 800;
    return `https://res.cloudinary.com/diwlxq34b/image/upload/w_${w},f_auto,q_auto/portfolio${src}`;
  });
  
  // Markdown filter (so you can use {{ something | markdown }} in Nunjucks)
  eleventyConfig.addFilter("markdown", (content) => {
    return mdLib.render(content);
  });

  // Registering the 'file' filter
  eleventyConfig.addFilter("file", function (filePath) {
    const file = path.join(process.cwd(), "src", filePath); // __dirname not available in ESM
    const fileContent = fs.readFileSync(file, "utf-8");

    // Parse the front matter and return only the content
    const { content } = matter(fileContent);
    return content;
  });

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(embeds);

  // Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", async (src, alt, sizes) => {
    const cloudinaryBase = "https://res.cloudinary.com/diwlxq34b/image/upload";
    const remoteSrc = `${cloudinaryBase}/portfolio${src}`;
    let metadata = await Image(remoteSrc, {
      widths: [300, 800, null],
      formats: ["avif", "jpeg"],
      urlPath: "/images/",
      outputDir: "./public/images/",
      cacheOptions: {
        duration: "1d",
        directory: ".cache",
      }
    });
    return Image.generateHTML(metadata, { alt, sizes, loading: "lazy", decoding: "async" });
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });

  return {
    dir: { input: "src", output: "public" }
  };
}
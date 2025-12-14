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
  eleventyConfig.setLibrary("md", mdLib);

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

  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", async (src, alt, sizes) => {
    let metadata = await Image(`./src${src}`, {
      widths: [300, 800, null],
      formats: ["avif", "jpeg"],
      urlPath: "/images/",
      outputDir: "./public/images/"
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
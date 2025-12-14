const fs = require("fs");
const path = require("path");
const Image = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const embeds = require("eleventy-plugin-embed-everything");

module.exports = function (eleventyConfig) {
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
  eleventyConfig.addFilter("file", function(filePath) {
    const fs = require("fs");
    const path = require("path");
    const matter = require("gray-matter");

    const file = path.join(__dirname, "src", filePath);  // Adjust the path as necessary
    const fileContent = fs.readFileSync(file, "utf-8"); // Read the file content

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
};
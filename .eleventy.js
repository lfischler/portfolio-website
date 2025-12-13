const Image = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const md = new markdownIt();

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg"],
    urlPath: "/images/",
    outputDir: "./public/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); // for side nav

const { EleventyRenderPlugin } = require("@11ty/eleventy"); // for rendering md sections

const embeds = require("eleventy-plugin-embed-everything");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin); //for side navigation
  
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(embeds);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

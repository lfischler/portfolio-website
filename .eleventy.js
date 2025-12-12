import Image from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation"; // for side nav
import { EleventyRenderPlugin } from "@11ty/eleventy"; // for rendering md sections
import embeds from "eleventy-plugin-embed-everything";

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

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin); // for side navigation
  
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

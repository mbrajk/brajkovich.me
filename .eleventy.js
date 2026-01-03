module.exports = function(eleventyConfig) {
  // Pass through copy for CSS and Assets
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon*");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addFilter("date", (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
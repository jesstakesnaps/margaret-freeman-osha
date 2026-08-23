module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Filter: format a date nicely (optional format: "MMM", "DD", "YYYY")
  eleventyConfig.addFilter("dateDisplay", function(date, format) {
    const d = new Date(date);
    if (format === "MMM") return d.toLocaleDateString("en-US", { month: "short" });
    if (format === "DD") return String(d.getDate()).padStart(2, "0");
    if (format === "YYYY") return d.getFullYear();
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  // Filter: slugify a string
  eleventyConfig.addFilter("slugify", function(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

const eleventySass = require("eleventy-sass");
// const Section = require("./src/components/Section");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            style: "compressed",
            sourceMap: false
        }
    });
    // eleventyConfig.addShortcode("Section", Section);
    eleventyConfig.addWatchTarget("./src/");

    return {
        dir: {
            input: 'src',
            layouts: '_layouts',
            output: '_site',
        },
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk"]
    }
};

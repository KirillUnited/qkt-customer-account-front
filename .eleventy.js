const eleventySass = require("eleventy-sass");
const Card = require("./src/_includes/components/Card");
const Input = require("./src/_includes/components/Input");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            style: "compressed",
            sourceMap: false
        }
    });
    eleventyConfig.addShortcode("Card", Card);
    eleventyConfig.addShortcode("Input", Input);

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

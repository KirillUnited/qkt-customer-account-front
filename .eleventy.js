const eleventySass = require("eleventy-sass");
const Card = require("./src/_includes/components/Card");
const { Input, Checkbox } = require("./src/_includes/components/Input");
const Breadcrumbs = require("./src/_includes/components/Breadcrumbs");
const Button = require("./src/_includes/components/Button");

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
    eleventyConfig.addShortcode("Checkbox", Checkbox);
    eleventyConfig.addShortcode("Breadcrumbs", Breadcrumbs);
    eleventyConfig.addShortcode("Button", Button);

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

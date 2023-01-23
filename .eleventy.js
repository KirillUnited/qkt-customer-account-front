const eleventySass = require("eleventy-sass");
const {Card, CardProduct} = require("./src/_includes/components/card");
const {Input, Checkbox} = require("./src/_includes/components/form");
const Breadcrumbs = require("./src/_includes/components/Breadcrumbs");
const Button = require("./src/_includes/components/Button");
const {Modal, ModalTabs} = require("./src/_includes/components/modal");
const Tag = require("./src/_includes/components/Tag");
const {EleventyRenderPlugin} = require("@11ty/eleventy");
const eleventyVue = require("@11ty/eleventy-plugin-vue");
const Dropdown = require("./src/_includes/components/Dropdown");
const Picture = require("./src/_includes/components/Picture");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPassthroughCopy("src/assets/js/index.js");
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            style: "compressed",
            sourceMap: false
        }
    });
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(eleventyVue);
    eleventyConfig.addShortcode("Card", Card);
    eleventyConfig.addShortcode("CardProduct", CardProduct);
    eleventyConfig.addShortcode("Input", Input);
    eleventyConfig.addShortcode("Checkbox", Checkbox);
    eleventyConfig.addShortcode("Breadcrumbs", Breadcrumbs);
    eleventyConfig.addShortcode("Button", Button);
    eleventyConfig.addShortcode("Modal", Modal);
    eleventyConfig.addShortcode("ModalTabs", ModalTabs);
    eleventyConfig.addShortcode("Tag", Tag);
    eleventyConfig.addShortcode("Dropdown", Dropdown);
    eleventyConfig.addShortcode("Picture", Picture);

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

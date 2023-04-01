const {Card, CardProduct} = require("./src/_includes/components/card");
const {Input, Checkbox} = require("./src/_includes/components/form");
const Breadcrumbs = require("./src/_includes/components/Breadcrumbs");
const Button = require("./src/_includes/components/Button");
const {Modal, ModalTabs} = require("./src/_includes/components/modal");
const Tag = require("./src/_includes/components/Tag");
const {EleventyRenderPlugin} = require("@11ty/eleventy");
const Dropdown = require("./src/_includes/components/Dropdown");
const Picture = require("./src/_includes/components/Picture");
const {
    emailIcon,
    callIcon,
    linkedinIcon,
    twitterIcon,
    instagramIcon,
    facebookIcon,
    MenuIcon,
    BackIcon,
    EyeIcon
} = require("./src/_includes/icons");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addPlugin(EleventyRenderPlugin);
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
    eleventyConfig.addShortcode("emailIcon", emailIcon);
    eleventyConfig.addShortcode("callIcon", callIcon);
    eleventyConfig.addShortcode("linkedinIcon", linkedinIcon);
    eleventyConfig.addShortcode("twitterIcon", twitterIcon);
    eleventyConfig.addShortcode("instagramIcon", instagramIcon);
    eleventyConfig.addShortcode("facebookIcon", facebookIcon);
    eleventyConfig.addShortcode("MenuIcon", MenuIcon);
    eleventyConfig.addShortcode("BackIcon", BackIcon);
    eleventyConfig.addShortcode("EyeIcon", EyeIcon);

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

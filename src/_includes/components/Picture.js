const {html} = require("common-tags");

function Picture({src = "", srcSet = "", className = "", text, breakpoint = "767px"}) {
    return html`
        <picture class="${className}">
            <source media="(max-width: ${breakpoint})" srcset=${srcSet} />
            <img src=${src} alt=${text} />
        </picture>
    `;
}

module.exports = Picture;

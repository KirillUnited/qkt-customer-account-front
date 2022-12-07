const {html} = require("common-tags");

function Tag(title="", status="") {
    if (!title) return;

    return html`
<div class="tag ${status && `tag-${status}`}">${title}</div>
`;
}

module.exports = Tag;

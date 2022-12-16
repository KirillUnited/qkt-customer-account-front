const {html} = require("common-tags");

function Tag(props) {
    return html`
        <div class="tag ${props.status && `tag-${props.status}`}">${props.tag}</div>
    `;
}

module.exports = Tag;

const {html} = require("common-tags");

function Tag(props) {
    return html`
            <div class="tag ${props.status && `tag-${props.status}`}">
                <span class="text-truncate">${props.tag}</span>
            </div>
    `;
}

module.exports = Tag;

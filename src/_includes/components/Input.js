const { html } = require("common-tags");

const Input = ({ type, id, label, children = "", rest = {} }) => {
    const { pattern, required } = rest;

    return html`
        <div class="form-group">
            ${label ? `<label class="form-label" for="${id}">${label}</label>` : ""
        }
            <div class="form-input">
                <input
                    class="form-input-field"
                    type="${type}"
                    id="${id}"
                    name="${id}"
                    autoComplete="${id}"
                    ${pattern && `pattern="${rest.pattern}"`}
                    ${required && `required`}
                />
                ${children}
            </div>
        </div>
`
};

const Checkbox = ({ id, label }) => {
    return html`
        <div class="form-group">
            <label class="form-checkbox">
                <input type="checkbox" id="${id}" name="${id}">
                <svg
                    width="32" height="32" viewbox="-4 -4 39 39" aria-hidden="true" focusable="false">
                    <!-- The background -->
                    <rect
                        class="checkbox__background"
                        width="35"
                        height="35"
                        x="-2"
                        y="-2"
                        stroke="currentColor"
                        fill="none"
                        stroke-width="3"
                        rx="6"
                        ry="6"></rect>
                    <!-- The checkmark-->
                    <polyline class="checkbox__checkmark" points="4,14 12,23 28,5" stroke="transparent" stroke-width="4" fill="none"></polyline>
                </svg>
                <span>${label}</span>
            </label>
        </div>
`
};

module.exports = { Input, Checkbox };

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

module.exports = Input;

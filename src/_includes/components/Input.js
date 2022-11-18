const {html} = require("common-tags");

const Input = ({type, id, label, children = "", ...rest}) => {
    return html`
        <div class="form-group">
            ${
                label ? `<label class="form-label" for="${id}">${label}</label>` : ""
            }
            <div class="form-input">
                <input
                    class="form-input-field"
                    type="${type}"
                    id="${id}"
                    name="${id}"
                    autoComplete="${id}"
                />
                ${children}
            </div>
        </div>
`
};

module.exports = Input;

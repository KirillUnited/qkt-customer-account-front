const {html} = require("common-tags");

function Checkbox({type = "checkbox", id, name = id, label = "", status = ""}) {
    return html`
            <label class="form-${type}">
                <input type="${type}" id="${id}" name="${name}" value="" ${status}>
                ${(type === "checkbox") && `<svg
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
                </svg>`}
                ${label && `<span>${label}</span>`}
            </label>
`
}

module.exports = Checkbox;

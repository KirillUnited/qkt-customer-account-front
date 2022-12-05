const {html} = require("common-tags");
const Button = ({children, state = null, type = "button", rest = {}}) => {
    return html`
        <button class='btn ${state ? "btn-" + state : ""}' type="${type}" ${state === "disabled" ? state : ""} ${rest.toggle && `data-toggle="${rest.toggle}"`}
         ${rest.target && `data-target="${rest.target}"`}>
            ${children || "Button"}
        </button>
    `;
};

module.exports = Button;

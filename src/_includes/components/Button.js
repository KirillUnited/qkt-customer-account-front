const {html} = require("common-tags");
const Button = ({children, state = null, type = "button"}) => {
    return html`
        <button class='btn ${state ? "btn-" + state : ""}' type="${type}" ${state === "disabled" ? state : ""}>${children || "Button"}</button>
    `;
};

module.exports = Button;

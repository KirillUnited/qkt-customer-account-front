const {html} = require("common-tags");
const {Input} = require("../form");

function getAccountTmpl() {
    return html`
        <div class="grid-col-span">
            ${Input({
                id: "Select_Bank_Account",
                label: "Select Bank Account"
            })}
        </div>
    `
}

module.exports = getAccountTmpl;

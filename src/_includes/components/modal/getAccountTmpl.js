const {html} = require("common-tags");
const {Input} = require("../form");

function getAccountTmpl(props) {
    const {options} = props;

    return html`
        <div class="grid-col-span">
            ${Input({
                id: "Select_Bank_Account",
                label: "Select Bank Account",
                rest: {options}
            })}
        </div>
    `
}

module.exports = getAccountTmpl;

const {html} = require("common-tags");
const getPaymentsTemplate = require("./getPaymentsTmpl");
const getDelAccountTemplate = require("./getDelAccountTmpl");

const Modal = ({id, title, desc="", header, content="", className=""}) => {
    return html`
        <div class="modal ${className}" data-modal='${id}' data-close="true">
            <div class="modal-dialog">
                ${header ? `<div class="modal-header">${header}</div>` : getHeader(title, desc)}
                ${getContentTemplate(content) && getContent(id, getContentTemplate(content))}
                ${getFooter(id, content)}
            </div>
        </div>
    `
};

function getHeader(title = "", desc = "") {
    return html`
                <div class="modal-header">
                    <h1 class="modal-title">${title}</h1>
                    ${desc && `<p class="modal-desc">${desc}</p>`}
                </div>
    `
}

function getContent(id = "", contentTemplate = "") {
    return html`<div class="modal-content">
                    <form class="form" id="${id}_Form" method="POST" action="">
                        <fieldset class="form-fieldset grid grid-col-2 grid-col-fixed">
                            ${contentTemplate}
                        </fieldset>
                    </form>
                </div>`
}

function getContentTemplate(content = "") {
    const contentTemplates = {
        "payments": getPaymentsTemplate(),
        "delete": getDelAccountTemplate(),
        "default": content
    };

    return (contentTemplates[content] || contentTemplates["default"])
}

function getFooter(id = "", content = "") {
    return html`
                <div class="modal-footer">
                    <button class='btn btn-invert' type="button" data-close="true">Cancel</button>
                    <button class='btn btn-primary' type="submit" form="${id}_Form">${content === 'delete' ? 'DELETE ACCOUNT' : 'Save'}</button>
                </div>
    `
}

module.exports = Modal;

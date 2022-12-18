const {html} = require("common-tags");
const getPaymentsTemplate = require("./getPaymentsTmpl");
const getDelAccountTemplate = require("./getDelAccountTmpl");

const Modal = ({id, title, desc="", header, content=[]}) => {
    const contentTemplates = {
        "payments": getPaymentsTemplate(),
        "confirmation": null,
        "delete": getDelAccountTemplate(),
        "default": content
    };
    const contentTemplate = (contentTemplates[content] || contentTemplates["default"]);

    return html`
        <div class="modal ${(content === 'confirmation') && 'modal-confirm'}" data-modal='${id}' data-close="true">
            <div class="modal-dialog">
                ${
                    header
                        ?
                        `<div class="modal-header">${header}</div>`
                        :
                        `<div class="modal-header">
                                        <h1 class="modal-title">${title}</h1>
                                        ${desc && `<p class="modal-desc">${desc}</p>`}
                                    </div>`
                }
                ${contentTemplate &&
                `<div class="modal-content">                
                    <form class="form" id="${id}_Form" method="POST" action="">
                        <fieldset class="form-fieldset grid grid-col-2 grid-col-fixed">                             
                            ${contentTemplate}
                        </fieldset>
                    </form>
                </div>`}
                <div class="modal-footer">
                    <button class='btn btn-invert' type="button" data-close="true">Cancel</button>
                    <button class='btn btn-primary' type="submit" form="${id}_Form" data-close="true">${content==='delete' ? 'DELETE ACCOUNT' : 'Save'}</button>
                </div>
            </div>
        </div>
    `;
};

module.exports = Modal;

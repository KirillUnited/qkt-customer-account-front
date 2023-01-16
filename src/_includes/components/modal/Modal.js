const {html} = require("common-tags");
const getPaymentsTemplate = require("./getPaymentsTmpl");
const getDelAccountTemplate = require("./getDelAccountTmpl");
const getAccountTemplate = require("./getAccountTmpl");

module.exports = class _Modal {
    constructor(props = {}) {
        const {id="", className = ""} = props;

        this.id = id;
        this.className = className;
        this.props = props;
    }

    render() {
        return html`
            <div class="modal ${this.className}" data-modal='${this.id}' data-close="true">
                <div class="modal-dialog">
                    ${this.getInner(this.props)}
                </div>
            </div>
        `
    }

    getInner(props = {}) {
        const {id, title, desc = "", header, content = ""} = props;

        return html`
        ${header ? `<div class="modal-header">${header}</div>` : this.getHeader(title, desc)}
        ${this.getContentTemplate(content) && this.getContent(id, this.getContentTemplate(content, props))}
        ${this.getFooter(id, content)}
    `
    }

    getHeader(title = "", desc = "") {
        return html`
                <div class="modal-header">
                    <h1 class="modal-title">${title}</h1>
                    ${desc && `<p class="modal-desc">${desc}</p>`}
                </div>
    `
    }

    getContent(id = "", contentTemplate = "") {
        return html`<div class="modal-content">
                    <form class="form" id="${id}_Form" method="POST" action="">
                        <fieldset class="form-fieldset grid grid-col-2 grid-col-fixed">
                            ${contentTemplate}
                        </fieldset>
                    </form>
                </div>`
    }

    getContentTemplate(content = "", props={}) {
        const contentTemplates = {
            "payments": getPaymentsTemplate(),
            "delete": getDelAccountTemplate(),
            "account": getAccountTemplate(props),
            "default": content
        };

        return (contentTemplates[content] || contentTemplates["default"])
    }

    getFooter(id = "", content = "") {
        return html`
                <div class="modal-footer">
                    <button class='btn btn-invert' type="button" data-close="true">Cancel</button>
                    <button class='btn btn-primary' type="submit" form="${id}_Form">${content === 'delete' ? 'DELETE ACCOUNT' : 'Save'}</button>
                </div>
    `
    }
};

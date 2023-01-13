const {html} = require("common-tags");
const getPaymentsTemplate = require("./getPaymentsTmpl");
const getDelAccountTemplate = require("./getDelAccountTmpl");

const ModalTabs = ({id="", className="", config}={}) => {
    const tabs = config || [
        {
            title: "title",
            panel: {
                title: "title",
                desc: "desc"
            }
        },
        {
            title: "title",
            panel: {
                title: "title",
                desc: "desc"
            }
        }
    ];

    function getNavbar(id, tabs = []) {
        return html`
        <nav class="tabs-navbar">
            <ul class="tabs-list list-style-reset" data-tablist> 
                ${tabs.map(({title}) => {
                    return `
                                <li class="tabs-item">
                                    <a href="#" class="tabs-link tabs-link-active"
                                       data-tab="${id}_${title.replace(/\s/g, "_")}">
                                        <span class="text-truncate">${title}</span>
                                    </a>
                                </li>
                            `
                }).join('')}
            </ul>
        </nav>
    `
    }

    return html`
        <div class="modal ${className}" data-modal='${id}' data-close="true">
            <div class="modal-dialog">
                ${getNavbar(id, tabs)}
                <div class="tabs-content">
                    ${tabs.map(({panel})=>{
                        const {title, desc, type} = panel;
                        
                        return `
                            <div id="${id}_${title.replace(/\s/g, "_")}" class="tabs-panel" data-panel="${id}_${title.replace(/\s/g, "_")}">
                                ${getHeader(title,desc)}
                                ${getContent(`${id}_${title.replace(/\s/g, "_")}`, getContentTemplate(type))}
                            </div>
                        `
                    }).join('')}
                </div>
                ${getFooter(id)}
            </div>
        </div>
    `
};
const Modal = (props = {}) => {
    const {id, className = ""} = props;

    return html`
        <div class="modal ${className}" data-modal='${id}' data-close="true">
            <div class="modal-dialog">
                ${getInner(props)}
            </div>
        </div>
    `
};

function getInner(props={}) {
    const {id, title, desc = "", header, content = ""} = props;

    return html`
        ${header ? `<div class="modal-header">${header}</div>` : getHeader(title, desc)}
        ${getContentTemplate(content) && getContent(id, getContentTemplate(content))}
        ${getFooter(id, content)}
    `
}

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

module.exports = {Modal,ModalTabs};

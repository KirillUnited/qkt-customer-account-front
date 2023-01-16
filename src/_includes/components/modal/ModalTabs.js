const {html} = require("common-tags");
const _Modal = require("./Modal");

module.exports = class _ModalTabs extends _Modal {
    constructor(props = {}) {
        super(props);
        const {config} = props;

        this.tabs = config || [
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
    }

    getInner(props = {}) {
        return html`
            ${this.getNavbar(this.id, this.tabs)}
            <div class="tabs-content">
                ${this.tabs.map(({panel})=>{
                    const {title, desc, type} = panel;
                    const ID = `${this.id}_${title.replace(/\s/g, "_")}`;
        
                    return `
                                    <div id="${ID}" class="tabs-panel" data-panel="${ID}">
                                        ${this.getHeader(title,desc)}
                                        ${this.getContent(ID, this.getContentTemplate(type, panel))}
                                        ${this.getFooter(ID)}
                                    </div>
                                `
                    }).join('')}
            </div>
    `
    }

    getNavbar(id, tabs = []) {
        return html`
            <nav class="tabs-navbar">
                <ul class="tabs-list list-style-reset" data-tablist> 
                    ${tabs.map(({title}, index) => {
                        const ID = `${id}_${title.replace(/\s/g, "_")}`;
                        
                        return `
                                    <li class="tabs-item">
                                        <a href="#" class="tabs-link ${index === 0 ? 'tabs-link-active' : ''}"
                                           data-tab="${ID}">
                                            <span class="text-truncate">${title}</span>
                                        </a>
                                    </li>
                                `
                        }).join('')}
                </ul>
            </nav>
        `
    }
};

const {html} = require("common-tags");
const Tag = require("./Tag");
const Dropdown = require("./Dropdown");

function Card(props) {
    const {img, title, desc, type, tag, status, options=""} = props;

    return html`
        <div class="card ${type}">
            <div class="card-img">
                <img src="/assets/images/${img}" alt="${title}">
            </div>
            <div class="card-body">
                <h2 class="card-title">${title}</h2>
                ${desc && `<p class="card-desc">${desc}</p>`}
                
                ${(type === "card-ticket") &&
                    `
                     ${Tag(tag, status)}
                     <a href="" class="card-link">MANAGE BOOKING</a>
                     `
                }
                ${options&&`
                    ${Dropdown(`options_${title.replace(" ", "_")}`)}
                `}
            </div>
            ${(type === "card-minimal") &&
                `<svg class="hidden-more-sm" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
                          fill="#485868"/>
                </svg>`
            }
            ${(type === "card-account") &&
                `<button class="card-account-del" data-toggle="modal" data-target="del_account_payments_modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 5V22H19.5V5H4.5Z" stroke="#485868" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M10 10V16.5" stroke="#485868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 10V16.5" stroke="#485868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 5H22" stroke="#485868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 5L9.6445 2H14.3885L16 5H8Z" stroke="#485868" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                </button>`
            }
        </div>
    `;
}

module.exports = Card;

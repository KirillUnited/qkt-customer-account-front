const {html} = require("common-tags");
const Tag = require("./Tag");

function Card(props) {
    const {img, title, desc, type, tag, status, options=""} = props;

    return html`
        <div class="card ${type}">
            <div class="card-img">
                <img src="/assets/images/${img}" alt="${title}">
            </div>
            <div class="card-body">
                <h2 class="card-title">${title}</h2>
                <p class="card-desc">${desc}</p>
                
                ${(type === "card-ticket") &&
                    `
                     ${Tag(tag, status)}
                     <a href="" class="card-link">MANAGE BOOKING</a>
                     `
                }
                ${options&&`
                    
    <div class="dropdown">
    <div class="dropdown-toggle" data-toggle="dropdown" data-target="options_${title.replace(" ", "_")}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z"
                fill="black" fill-opacity="0.85" />
            <path
                d="M7.25 12C7.25 12.6904 6.69036 13.25 6 13.25C5.30964 13.25 4.75 12.6904 4.75 12C4.75 11.3096 5.30964 10.75 6 10.75C6.69036 10.75 7.25 11.3096 7.25 12Z"
                stroke="black" stroke-opacity="0.85" stroke-width="0.5" />
            <path
                d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                fill="black" fill-opacity="0.85" />
            <path
                d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
                stroke="black" stroke-opacity="0.85" stroke-width="0.5" />
            <path
                d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5Z"
                fill="black" fill-opacity="0.85" />
            <path
                d="M19.25 12C19.25 12.6904 18.6904 13.25 18 13.25C17.3096 13.25 16.75 12.6904 16.75 12C16.75 11.3096 17.3096 10.75 18 10.75C18.6904 10.75 19.25 11.3096 19.25 12Z"
                stroke="black" stroke-opacity="0.85" stroke-width="0.5" />
        </svg>
    </div>
    <div class="dropdown-menu" data-dropdown="options_${title.replace(" ", "_")}">
        <a href="#" class="dropdown-item">
            <svg class="dropdown-icon" width="20" height="21" viewBox="0 0 20 21" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5202 13.8453L14.8737 13.4917L14.5202 13.1382L11.8821 10.5001L14.5202 7.86197L14.8737 7.50841L14.5202 7.15486L13.3452 5.97986L12.9916 5.62631L12.6381 5.97986L9.99996 8.61798L7.36185 5.97986L7.00829 5.62631L6.65474 5.97986L5.47974 7.15486L5.12619 7.50841L5.47974 7.86197L8.11785 10.5001L5.47974 13.1382L5.12619 13.4917L5.47974 13.8453L6.65474 15.0203L7.00829 15.3739L7.36185 15.0203L9.99996 12.3822L12.6381 15.0203L12.9916 15.3739L13.3452 15.0203L14.5202 13.8453ZM2.16663 10.5001C2.16663 6.16789 5.66777 2.66675 9.99996 2.66675C14.3322 2.66675 17.8333 6.16789 17.8333 10.5001C17.8333 14.8323 14.3322 18.3334 9.99996 18.3334C5.66777 18.3334 2.16663 14.8323 2.16663 10.5001Z"
                    fill="#D4190C" stroke="#D4190C" />
            </svg>

            <span>Cancel Subscription</span>
        </a>
    </div>
</div>
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

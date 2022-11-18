const {html} = require("common-tags");

function Card(card) {
    return html`
        <a href="${card.link}" class="card card-minimal">
            <div class="card-img">
                <img src="/assets/images/icons/${card.img}" alt="${card.name}">
            </div>
            <div class="card-body">
                <h2 class="card-title">${card.name}</h2>
                <p class="card-desc hidden-less-sm">${card.desc}</p>
            </div>
            <svg class="hidden-more-sm" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
                      fill="#485868"/>
            </svg>
        </a>
    `;
}

module.exports = Card;

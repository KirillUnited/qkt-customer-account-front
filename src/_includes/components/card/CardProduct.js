const {html} = require("common-tags");
const _Card = require("./Card");

module.exports = class _CardProduct extends _Card {
    constructor(props = {}) {
        super(props);
    }

    getFooter(props) {
        super.getFooter(props);
        const {date, time}=props;

        return html`<div class="card-footer">
                        <div class="card-product-meta">
                            <span class="text-truncate">${date}</span>
                            <span class="text-truncate">${time}</span>
                        </div>
                    </div>`
    }
};

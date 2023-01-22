const {html} = require("common-tags");
const _Card = require("./Card");

const Card = (props = {}) => html`${new _Card(props).render()}`;

module.exports = Card;

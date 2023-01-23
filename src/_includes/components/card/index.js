const {html} = require("common-tags");
const _Card = require("./Card");
const _CardProduct = require("./CardProduct");

const Card = (props = {}) => html`${new _Card(props).render()}`;
const CardProduct = (props = {}) => html`${new _CardProduct(props).render()}`;

module.exports = {Card, CardProduct};

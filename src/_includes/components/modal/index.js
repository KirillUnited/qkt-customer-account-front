const {html} = require("common-tags");
const _Modal = require("./Modal");
const _ModalTabs = require("./ModalTabs");

const ModalTabs = ({id = "", className = "", config} = {}) => {
    const _modalTabs = new _ModalTabs({id, className, config});

    return html`${_modalTabs.render()}`;
};
const Modal = (props = {}) => {
    const _modal = new _Modal(props);

    return html`${_modal.render()}`;
};

module.exports = {Modal, ModalTabs};

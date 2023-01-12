const {html} = require("common-tags");

const Input = ({type, id, label, children = "", rest = {}}) => {
    const props = {type, id, label, children, rest};

    return html`
            ${label ?
        `<div class="form-group">
                        <label class="form-label" for="${id}">${label}</label>
                        ${type ? getFormInput(props) : getFormSelect(props)}
                     </div>`
        :
        `${type ? getFormInput(props) : getFormSelect(props)}`}
`
};

function getFormInput(props) {
    const {type = "", id = "", children = ""} = props;
    const {placeholder = "", pattern = "", required = "", disabled = "", value = ""} = props.rest;

    return html`
        <div class="form-input">
                <input
                    class="form-input-field"
                    type="${type}"
                    id="${id}"
                    name="${id}"
                    ${value && `value="${value}"`}
                    ${placeholder && `placeholder="${placeholder}"`}
                    ${pattern && `pattern="${pattern}"`}
                    ${required && `required`}
                    ${disabled && `disabled`}
                />
                ${children}
            </div>
    `;
}

function getFormSelect(props) {
    const {id = ""} = props;
    const {placeholder = ""} = props.rest;

    return html`
        <div class="form-input form-select">
                       <select class="form-input-field" id="${id}" name="${id}">
                           <option disabled selected>${placeholder ? placeholder : 'Please Select'}</option>
                           <option value="Today">Today</option>
                           <option value="This Weekend">This Weekend</option>
                           <option value="Next 7 Days">Next 7 Days</option>
                           <option value="Next 30 Days">All Dates</option>
                       </select>
                   </div>
    `;
}

module.exports = Input;

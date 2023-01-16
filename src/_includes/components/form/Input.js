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

function getFormInput({type = "", id = "", children = "", rest = {}}) {
    const {placeholder = "", pattern = "", required = "", disabled = "", value = ""} = rest;

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

function getFormSelect({id = "", rest = {}}) {
    const {placeholder = "", options = []} = rest;

    return html`
        <div class="form-input form-select">
                       <select class="form-input-field" id="${id}" name="${id}">
                           <option disabled selected>${placeholder ? placeholder : 'Please Select'}</option>
                           ${options.map(({text, value})=>{
                               return `<option value="${value}">${text}</option>`;
                           }).join('')}
                       </select>
                   </div>
    `;
}

module.exports = Input;

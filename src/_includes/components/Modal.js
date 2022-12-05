const {html} = require("common-tags");
const {Input, Checkbox} = require("./Input");

const Modal = ({id, title, desc, header, content}) => {
    const contentTemplate = content || getPaymentsTemplate();

    return html`
        <div class="modal" data-modal='${id}' data-close="true">
            <div class="modal-dialog">
                ${
        header
            ?
            `<div class="modal-header">${header}</div>`
            :
            `<div class="modal-header">
                            <h1 class="modal-title">${title}</h1>
                            <p class="modal-desc">${desc}</p>
                        </div>`
    }
                <div class="modal-content">                
                    <form class="form" id="account_payments" method="POST" action="">
                        <fieldset class="form-fieldset grid grid-col-2 grid-col-fixed">                             
                            ${contentTemplate}
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class='btn btn-invert' type="button" data-close="true">Cancel</button>
                    <button class='btn btn-primary' type="submit" data-close="true">Save</button>
                </div>
            </div>
        </div>
    `;
};

function getPaymentsTemplate() {
    return html`<div class="form-group grid-col-span">
                                <label class="form-label" for="Select_Bank_Branch">Select Bank Branch</label>
                                <div class="form-input">
                                    <select class="form-input-field" id="Select_Bank_Branch" name="Select_Bank_Branch">
                                        <option disabled selected>Please Select</option>
                                        <option value="FNB/RMB">FNB/RMB</option>
                                        <option value="Savings">Savings</option>
                                    </select>
                                </div>
                             </div>
                             <div class="form-group grid-col-span">
                                <label class="form-label" for="Account_Type">Account Type</label>
                                <div class="form-input">
                                    <select class="form-input-field" id="Account_Type" name="Account_Type">
                                        <option disabled selected>Please Select</option>
                                        <option value="Savings">Savings</option>
                                    </select>
                                </div>
                             </div>
                            ${Input({
                                type: "text",
                                id: "account_payments_Holder_Name",
                                label: "Account Holder Name",
                                children: "",
                                rest: {}
                            })}                             
                            ${Input({
                                type: "text",
                                id: "account_payments_Account_Number",
                                label: "Account Number",
                                children: "",
                                rest: {}
                            })}
                            <div class="grid-col-span">
                            ${Checkbox({
                                id: "Account_Default_Check",
                                label: "Set this as my default account"
                            })}
                            </div>
`;
}

module.exports = Modal;

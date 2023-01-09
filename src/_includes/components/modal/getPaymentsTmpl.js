const {html} = require("common-tags");
const {Input, Checkbox} = require("../form");

function getPaymentsTmpl() {
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

module.exports = getPaymentsTmpl;

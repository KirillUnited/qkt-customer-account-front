const {html} = require("common-tags");
const {Input, Checkbox} = require("../Input");

function getDelAccountTmpl() {
    return html`
                            <div class="grid-col-span">
                               ${Input({
                                    type: "password",
                                    id: "del_account_Password",
                                    label: "Password",
                                    children: '<img alt="" src="/assets/images/icons/Eye.svg" width="20" height="20" class="form-input-icon">',
                                    rest: {required: true}
                                })}
                           </div>
                           <div class="grid-col-span">
                               ${Checkbox({
                                    id: "del_account_Password_Check",
                                    label: "I understand my user account and all associated data will be deleted and that this can not be reversed."
                                })}
                           </div>
                           <div class="grid-col-span" style="padding-top: var(--gap); border-top: 1px solid #D8D8D8;">
                               <span>If you would rather just unsubscribe from Quicket emails, then please <a href="#">click here</a>.</span>
                           </div>
    `;
}

module.exports = getDelAccountTmpl;

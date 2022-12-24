const Tag = require("../_includes/components/Tag");
const {Checkbox} = require("../_includes/components/Input");

module.exports = {
    path: "/pages/ticket-details",
    title: "Rocking The Daisies",
    image: "ticket-details-banner.png",
    imageMobile: "ticket-details-banner-mobile.png",
    tag: "UPCOMING",
    status: "primary",
    desc: {
        "Date": "08:00 Friday 5 October 2018 - 16:00 Sunday 7 October 2018",
        "Reference Number": "REF02253665",
        "Number Of Tickets": 6,
        "Amount": "R2,570",
    },
    actions: [
        {
            title: "Edit Ticket Details",
            icon: "icons/pencil.svg",
            link: "/pages/ticket-details/edit-ticket"
        },
        {
            title: "View Invoice",
            icon: "icons/edit-one.svg",
            link: "/pages/ticket-details/invoice"
        },
        {
            title: "Edit Invoice",
            icon: "icons/edit-one-1.svg",
            link: "#edit_invoice",
            attrs: "data-toggle=\"modal\" data-target=\"edit_invoice\""
        },
        {
            title: "Transfer Tickets",
            icon: "icons/Refresh.svg",
            link: "/pages/ticket-details/transfer-tickets"
        },
        {
            title: "Request A Refund",
            icon: "icons/close-one.svg",
            link: "/"
        },
        {
            title: "List Ticket For Resale",
            icon: "icons/paper-money-two.svg",
            link: "/pages/ticket-details/list-ticket-for-resale",
            "tabs": [
                {
                    "title": "Available For Resale",
                    "panel": {
                        "title": "Put Your Tickets Up For Resale",
                        "desc": "View payments below. Payment will happen every month only for revenue<br class=\"hidden-less-sm\"/> generated for events which have successfully finished.",
                        "content": [
                            {
                                "Select Ticket": `${Checkbox({id:"resale_checkbox", status:"checked"})}`,
                                "Tickets Type": "Cheap Ticket",
                                "Price": "R 0.0",
                                "Ticket Holder": "Name Surname",
                                "Public": "<label class=\"form-checkbox-toggle\">\n" +
                                    "                \n" +
                                    "                <input type=\"checkbox\" id=\"public1\" checked=\"\">\n" +
                                    "                <label for=\"public1\"></label>\n" +
                                    "            </label>",
                                "Email": "<span class=\"text-clamp\" style='--lines: 1'>name@email.com</span>"
                            },
                            {
                                "Select Ticket": `${Checkbox({id:"resale_checkbox2"})}`,
                                "Tickets Type": "Cheap Ticket",
                                "Price": "R 0.0",
                                "Ticket Holder": "Name Surname",
                                "Public": "<label class=\"form-checkbox-toggle\">\n" +
                                    "                \n" +
                                    "                <input type=\"checkbox\" id=\"public2\">\n" +
                                    "                <label for=\"public2\"></label>\n" +
                                    "            </label>",
                                "Email": "<span class=\"text-clamp\" style='--lines: 1'>name@email.com</span>"
                            }
                        ],
                        "enableFilter": false,
                        "contentDisplay": "table"
                    }
                },
                {
                    "title": "Currently Listed",
                    "panel": {
                        "title": "Your Currently Listed Tickets",
                        "desc": "You will receive a ticket once your ticket is sold.",
                        "enableFilter": false,
                        "contentDisplay": "table",
                        "tableType": "table-grid",
                        "content": [
                            {
                                "Tickets Type": "Cheap Ticket",
                                "Price": "R 0.0",
                                "Status": `${Tag({tag: "ON SALE", status: "primary"})}`,
                                "Type": "Public",
                                "Date Created": "10/10/2022",
                                "Email": "<span class=\"text-clamp\" style='--lines: 1'>name@email.com</span>",
                                "Bank Details": "N/A",
                                "Actions": "<a href=\"#\" style='color: var(--color-orange)'>Cancel</a>"
                            },
                            {
                                "Tickets Type": "Cheap Ticket",
                                "Price": "R 0.0",
                                "Status": `${Tag({tag: "SOLD", status: "default"})}`,
                                "Type": "Public",
                                "Date Created": "10/10/2022",
                                "Email": "<span class=\"text-clamp\" style='--lines: 1'>name@email.com</span>",
                                "Bank Details": "FNB Savings **** 7682",
                                "Actions": "<a href=\"#\" style='color: var(--color-orange)'>Cancel</a>"
                            }
                        ],
                        "contentGrid": [
                            {
                                "title": "Rocking The Daisies",
                                "desc": "<strong>Ticket Type:</strong> Cheap" +
                                    "<br/><strong>Date:</strong> Sunday, 7 October 2018" +
                                    "<br/><strong>Bank Details:</strong> FNB Savings **** 7682",
                                "tag": "ON SALE",
                                "status": "primary"
                            },
                            {
                                "title": "Rocking The Daisies 2",
                                "desc": "<strong>Ticket Type:</strong> Cheap" +
                                    "<br/><strong>Date:</strong> Sunday, 7 October 2018" +
                                    "<br/><strong>Bank Details:</strong> FNB Savings **** 7682",
                                "tag": "SOLD",
                                "status": "default"
                            }
                        ]
                    }
                }
            ]
        }
    ]
};

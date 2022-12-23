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
                    "title": "Available FOR RESALE",
                    "panel": {
                        "title": "Put Your Tickets Up For Resale",
                        "desc": "View payments below. Payment will happen every month only for revenue<br class=\"hidden-less-sm\"/> generated for events which have successfully finished.",
                        "content": [
                            {
                                "Organiser": "Guy Hawkins",
                                "Membership": "Free Styler",
                                "Date Subscribed": "08 April 2021",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            },
                            {
                                "Organiser": "Guy Hawkins 2",
                                "Membership": "Free Styler for everyday",
                                "Date Subscribed": "23 April 2019",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            },
                            {
                                "Organiser": "Guy Hawkins 3",
                                "Membership": "Free Styler",
                                "Date Subscribed": "08 April 2021",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            },
                            {
                                "Organiser": "Guy Hawkins 4",
                                "Membership": "Free Styler for everyday",
                                "Date Subscribed": "23 April 2019",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            }
                        ],
                        "enableFilter": false,
                        "contentDisplay": "table"
                    }
                },
                {
                    "title": "CURRENTLY LISTED",
                    "panel": {
                        "title": "Your Currently Listed Tickets",
                        "desc": "You will receive a ticket once your ticket is sold.",
                        "content": [
                            {
                                "Organiser": "Guy Hawkins",
                                "Membership": "Free Styler",
                                "Date Subscribed": "08 April 2021",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            },
                            {
                                "Organiser": "Guy Hawkins 2",
                                "Membership": "Free Styler for everyday",
                                "Date Subscribed": "23 April 2019",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            },
                            {
                                "Organiser": "Guy Hawkins 3",
                                "Membership": "Free Styler",
                                "Date Subscribed": "08 April 2021",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            },
                            {
                                "Organiser": "Guy Hawkins 4",
                                "Membership": "Free Styler for everyday",
                                "Date Subscribed": "23 April 2019",
                                "Price": "Free",
                                "Status": "Valid",
                                "Next Billing Date": "08 April 2021",
                                "Actions": "Cancel"
                            }
                        ],
                        "enableFilter": false,
                        "contentDisplay": "table"
                    }
                }
            ]
        }
    ]
};

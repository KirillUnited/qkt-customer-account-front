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
            link: "/"
        }
    ]
};

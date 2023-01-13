module.exports = {
    "title": "Earn Commission",
    "path": "/pages/earn-commission",
    "actions": {
        "networks":
            {
                "img": "icons/Megaphone.svg",
                "title": "Promoter Networks",
                "desc": "Promote events for organisers.",
                "link": "/pages/earn-commission/networks",
                content: [
                    {
                        "title": "St Andrew’s Family Festival",
                        "img": "tickets/ticket-1.png",
                        "desc": "Share this link to earn 1.00% of ticket sales:" +
                            "<br/><strong>https://qkt.io/zxB5HP</strong>",
                        "tag": "UPCOMING",
                        "status": "primary"
                    },
                    {
                        "title": "Rocking The Daisies 2",
                        "img": "tickets/ticket-2.png",
                        "desc": "<strong>Ticket Holder:</strong> John Doe" +
                            "<br/><strong>Date:</strong> Sunday, 7 October 2018" +
                            "<br/><strong>Bank Details:</strong> FNB Savings **** 7682"
                    },
                    {
                        "title": "Rocking The Daisies 3",
                        "img": "tickets/ticket-3.png",
                        "desc": "<strong>Ticket Holder:</strong> John Doe" +
                            "<br/><strong>Date:</strong> Sunday, 7 October 2018" +
                            "<br/><strong>Bank Details:</strong> FNB Savings **** 7682"
                    }
                ],
                "placeholder": {
                    "img": "/assets/images/earn-commission/placeholder-networks.png",
                    "title": "Become a promoter",
                    "desc": "You join promoter networks by invitation from an organiser or by browsing public promoter networks.",
                    "button": false,
                    "footer": null,
                    "link": "/pages/earn-commission/networks-empty"
                }
            },
        "referrals":
            {
                "img": "icons/link.svg",
                "title": "Referrals",
                "desc": "Sign event organisers up to quicket",
                "link": "/pages/earn-commission/referrals",
                "tabs": [
                    {
                        title: "Add Bank Account",
                        panel: {
                            title: "Add Bank Account",
                            desc: "This is the bank account the refund will be processed to.",
                            type: "payments"
                        }
                    },
                    {
                        title: "Link Existing",
                        panel: {
                            title: "Link Existing",
                            desc: "Please select your account below that you wish for the refund to be processed to.",
                            type: "account"
                        }
                    }
                ],
                "placeholder": {
                    "img": "/assets/images/earn-commission/placeholder-referrals.png",
                    "title": "No commissions Earned Yet",
                    "desc": "Your commissions will appear here once they go through.",
                    "button": "LINK BANK ACCOUNT",
                    "footer": null,
                    "link": "/pages/earn-commission/referrals-empty"
                }
            }
    }
};

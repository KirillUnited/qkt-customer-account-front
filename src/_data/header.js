const commission = require("./commission");
const events = require("./commission");

module.exports = {
    "menu": {
        "products": {
            "title": "products",
            "header": null,
            "list": [
                {
                    "title": "Ticketing",
                    "link": ""
                },
                {
                    "title": "Online Event",
                    "link": ""
                },
                {
                    "title": "Fundraisers",
                    "link": ""
                },
                {
                    "title": "Subscriptions",
                    "link": ""
                },
            ],
            "footer": null
        },
        "help": {
            "title": "help",
            "header": null,
            "list": [
                {
                    "title": "KNOWLEDGEBASE",
                    "link": ""
                },
                {
                    "title": "BLOG",
                    "link": ""
                }
            ],
            "footer": {"title": "CONTACT US", "link": ""}
        },
        "BROWSE EVENTS": {
            "title": "BROWSE EVENTS",
            "header": "",
            "list": [],
            "footer": ""
        },
        "account": {
            "title": "CUSTOMER@gmail.com",
            "header": {"title": "My Tickets", "link": ""},
            "list": [
                {
                    "title": "Create Event",
                    "link": ""
                },
                {
                    "title": "saved events",
                    "link": events.path
                },
                {
                    "title": "EARN COmission",
                    "link": commission.path
                },
                {
                    "title": "My Account",
                    "link": ""
                }
            ],
            "footer": {"title": "Log Out", "link": ""}
        }
    }
};

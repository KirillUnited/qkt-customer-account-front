const commission = require("./commission.data");
const events = require("./commission.data");
const account = require("./account.data");
const tickets = require("./tickets.data");

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
            "header": {"title": tickets.title, "link": tickets.path},
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
                    "link": account.path
                }
            ],
            "footer": {"title": "Log Out", "link": ""}
        }
    }
};

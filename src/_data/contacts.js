const {facebookIcon} = require("../_includes/icons");
const {instagramIcon} = require("../_includes/icons");
const {twitterIcon} = require("../_includes/icons");
const {linkedinIcon} = require("../_includes/icons");

module.exports = {
    "email": "support@quicket.co.za",
    "tel": "+27 21 424 9308",
    "socials": {
        "linkedin": {
            icon: linkedinIcon({className: "icon"}),
            link: ""
        },
        "twitter": {
            icon: twitterIcon({className: "icon"}),
            link: ""
        },
        "insta": {
            icon: instagramIcon({className: "icon"}),
            link: ""
        },
        "facebook": {
            icon: facebookIcon({className: "icon"}),
            link: ""
        },
    }
};

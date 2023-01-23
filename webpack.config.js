const path = require("path");

module.exports={
    entry: {
        main: path.resolve(__dirname, "src/assets/js", "index.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "_site", "assets/js")
    }
};

const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/assets/js", "index.js"),
        products: path.resolve(__dirname, "src/assets/js", "products.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "_site", "assets/js")
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

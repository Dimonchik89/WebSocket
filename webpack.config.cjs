const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "build.js",
        publicPath: "/"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                          implementation: require("sass"),
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
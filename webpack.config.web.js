const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'web') + "/index.ts",

    devServer: {
        client: {
            overlay: true,
        },
        compress: true,
        port: 9000,
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/web'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css']
    },
    module: {
        rules: [
            { // TS loader
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { // CSS auto injection
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({ // Auto-inject JS into HTML + copy HTML
            template: "./web/index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin({ // Copy Assets
            patterns: [
                {
                    from: './web/assets',
                    to: 'assets'
                }
            ]
        })
    ]

};
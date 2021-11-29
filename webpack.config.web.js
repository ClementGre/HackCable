const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: ["@babel/polyfill", path.resolve(__dirname, 'web') + "/index.ts"],
    performance: {
        hints: false
    },
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
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css'],
        fallback: {
            buffer: require.resolve('buffer/'),
        }
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
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "stylus-loader",
                        options: {
                            webpackImporter: false,
                        },
                    },
                ],
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
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })
    ],
};
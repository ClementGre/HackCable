const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src') + "/main.ts"],
    performance: {
        hints: false
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/src'),
        library: "hackcable",
        libraryTarget: "umd", // exposes and know when to use module.exports or exports.
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            { // TS loader
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
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
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        })
    ]

};
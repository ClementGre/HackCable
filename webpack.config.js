const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src') + "/main.ts",

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/app'),
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
                }
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ]

};
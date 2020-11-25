const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            './src/js/app',
            './src/css/style.css'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                },
            ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader?name=[name].[ext]',
                },
            ],
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader',
            ],
        },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            favicon: 'src/favicon.ico',
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};

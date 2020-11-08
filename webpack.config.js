const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        port: 3033,
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ],
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '/src/index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
};
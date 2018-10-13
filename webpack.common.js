const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractLess = new ExtractTextPlugin('./style/style.css');

module.exports = {
    entry: {
        app: './src/js/index.js',
        // vendor: [
        //     'lodash'
        // ]
        // another: './src/another-module.js'
    },

    plugins: [
        ExtractLess,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'unity title canonHu',
            template: 'index.ejs'
        })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': ExtractTextPlugin.extract({
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: false,
                                        minimize: true //css压缩
                                    }
                                },
                                {
                                    loader: 'less-loader',
                                    options: {
                                        sourceMap: false
                                    }
                                }
                            ]
                        })
                    },
                }
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
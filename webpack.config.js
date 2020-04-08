const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
        entry: {
            demo: './demo.js',
        },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
        devtool: 'inline-source-map',
      devServer: {
         contentBase: './dist'
       },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',

                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule:false
                        }
                    }
                ]
            },

            ]
    },
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'ringChart',
        template: 'public/index.html'
    })
]
};
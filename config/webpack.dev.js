const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')
module.exports = {
    entry: {
        app: ['./src/index.js', './src/index.html'],
        vendor: ['react', ]
    },
    output: {
        filename: '[name].[hash:8].js',
        path: resolve(__dirname, '../build')
    },
    module: {
        rules: [
            {
                enforce:'pre',
                test:/\.js$/,
                exclude:/node_modules/,
                include:resolve(__dirname,'/src/js'),
                loader:'eslint-loader'
                },
            {
            oneOf: [{
                test: /\.(html)$/,
                loader: 'html-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use:
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", ["@babel/preset-env", { "modules": false }]],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                    },

                }
            },
            {
                test: /\.(less)$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader', options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    { loader: 'less-loader' }
                ]
            }, {
                test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[name].[hash:8].[ext]',
                    
                }
            }, {
                exclude: /\.(js|json|less|css|jsx)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/',
                    name: '[name].[hash].[ext]'
                }
            }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    mode: 'development',
    devServer: {
        contentBase: '../build',
        open: true,
        port: 3000,
        hot: true
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
}
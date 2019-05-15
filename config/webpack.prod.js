const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const os = require('os')
module.exports = {
    entry: {
        app: ['babel-polifill', './src/index.js'],
        vendor: ['react']
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                include: resolve(__dirname, '/src/js'),
                loader: 'eslint-loader'
            },
            {
                oneOf: [{
                    test: /\.(html)$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'thread-loader',
                            options: {
                                workers: os.cpus().length
                            }
                        }, {
                            loader: 'babel-loader',
                            options: {
                                presets: ["@babel/preset-react", ["@babel/preset-env", { "modules": false }]],
                                plugins: ["@babel/plugin-syntax-dynamic-import",
                                    ["import", { libraryName: "antd-mobile", style: true }]],
                                cacheDirectory: true
                            },
                        }
                    ]

                },
                {
                    test: /\.(css)$/,
                    loader: "css-loader"
                },
                {
                    test: /\.(less)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader'
                            , options: {
                                modules: false,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        },
                        { loader: 'postcss-loader' },
                        {
                            loader: 'less-loader',
                            options: { javascriptEnabled: true }
                        }
                    ]
                },
                {
                    test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,

                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8 * 1024,
                                name: '[name].[hash:8].[ext]',
                                outputPath: '/img'
                            }
                        },
                        {
                            loader: 'img-loader',
                            options: {
                                plugins: [
                                    require('imagemin-gifsicle')({
                                        interlaced: false
                                    }),
                                    require('imagemin-mozjpeg')({
                                        progressive: true,
                                        arithmetic: false
                                    }),
                                    require('imagemin-pngquant')({
                                        floyd: 0.5,
                                        speed: 2
                                    }),
                                    require('imagemin-svgo')({
                                        plugins: [
                                            { removeTitle: true },
                                            { convertPathData: false }
                                        ]
                                    })
                                ]
                            }
                        }
                    ]



                }, {
                    exclude: /\.(js|json|less|css|jsx)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'media/',
                        name: '[name].[contenthash:8].[ext]'
                    }
                }
                ]
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new webpack.NamedModulesPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            importWorkboxFrom: 'local',
            include: [/\.js$/, /\.css$/, /\.html$/, /\.jpg/, /\.jpeg/, /\.svg/, /\.webp/, /\.png/],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin({
            cssProcessPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            }
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    mode: 'production',
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all'
        }
    }
}
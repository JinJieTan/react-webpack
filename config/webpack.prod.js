const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const os = require('os')
module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js', './src/pages/home/index.jsx',],
        vendor: ['react', 'better-scroll', 'react-redux']
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
                                presets: ["@babel/preset-react",
                                    //tree shaking 按需加载babel-polifill
                                    ["@babel/preset-env", { "modules": false, "useBuiltIns": "false", "corejs": 2 }]],
                                plugins: [
                                    //支持
                                    "@babel/plugin-syntax-dynamic-import",
                                    //true是less， 可以写'css' 如果不用less
                                    ["import", { libraryName: "antd-mobile", style: true }],
                                    ["@babel/plugin-proposal-class-properties", { "loose": true }],
                                ],
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
                                localIdentName: '[local]--[hash:base64:5]',
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
        new webpack.HashedModuleIdsPlugin(),
        // new PrerenderSPAPlugin({ 
        //     // 生成文件的路径，也可以与webpakc打包的一致。
        //     // 下面这句话非常重要！！！
        //     // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
        //     staticDir: resolve(__dirname, '../dist'),
        //     // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
        //     routes: ["/", "/home", "/buy"],
        //     // 这个很重要，如果没有配置这段，也不会进行预编译
        //     renderer: new Renderer({
        //         inject: {
        //             foo: "bar"
        //         },
        //         headless: true,
        //         // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
        //         renderAfterDocumentEvent: "render-event"
        //     })
        // })
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
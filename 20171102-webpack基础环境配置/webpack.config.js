/**
 * 开发阶段的基础配置
 * 1. 入口文件：./src/app.js
 * 2. 命令行输入： webpack命令 打包后的文件路径：当前文件夹下的dist文件
 * 3. 命令行输入： npm run server 启动服务
 * 4. 模板文件是：./src/index.ejs，默认输出路径是 output.path，title的配置
 * 5. loaders：
 *    （1） babel-loader：es6，jsx转化
 *    （2） style-loader css-loader postcss-loader less less-loader：csst添加浏览器前缀，less预编译，
 *    （3） url-loader 图片 字体
 * 6. 插件：
 *    （1）html-webpack-plugin, html模板插件
 *    （2）open-browser-webpack-plugin 自动打开浏览器插件
 *
 * 7. 问题：
 *      （1）css文件并不是以link的形式加载在html中，即css文件并未分离出来
 *      （2）文件的缓存，md5
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry:'./src/app.js',
    output:{
        path: __dirname+"/dist",
        filename:'bundle.js'
    },
    module:{
        rules:[
            // js,jsx预编译
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },

            // css，
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:()=>[require('autoprefixer')]
                        }
                    }
                ]
            },

            // less预编译
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'less-loader'
                ]
            },

            // 图片
            {
                test:/\.(jpg|jpeg|png|bmp|gif)$/,
                loader:'url-loader'
            },

            // 图标字体
            {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader:'url-loader'
            }
        ]
    },

    // 启动本地服务
    devServer:{
        contentBase:__dirname+'/dist',
        port:3000,
        inline:true,
        hot:true
    },

    // 插件
    plugins:[
        // html模板插件
        new HtmlWebpackPlugin({
            template:'./src/index.ejs',
            filename:'index.html',
            title:'Webapck基础配置'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 启动服务时自动打开浏览器插件
        new OpenBrowserPlugin({
            url:'http://localhost:3000'
        })
    ]
}
